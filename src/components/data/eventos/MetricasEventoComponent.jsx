// "use client";
// import React from "react";
// import Link from "next/link";
// export default function MetricasEventoComponent({ eventId }) {
//   const [eventoId, setEventoId] = React.useState(null);
//   React.useEffect(() => {
//     setEventoId(eventId);
//   }, [eventId]);
//   return (
//     <div>
//       <div>Métricas</div>
//       <div className="h-[100vh] flex justify-center items-center">
//         <Link href={`/data/${eventoId}/cuestionario`}>
//           Ir al cuestionario del evento
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return dateStr;
  }
}

// --- Normaliza el objeto del endpoint (por si viene {event: {...}} u otra estructura)
function normalizeEventPayload(json) {
  if (!json) return null;
  if (json.event) return json.event;
  if (json.data?.event) return json.data.event;
  return json;
}

// --- Normaliza seleccion: puede venir como array, string o null
function normalizeSelection(sel) {
  if (Array.isArray(sel)) return sel.filter(Boolean);
  if (typeof sel === "string" && sel.trim()) return [sel.trim()];
  return [];
}

function buildAnalytics(event) {
  const questions = Array.isArray(event?.data) ? event.data : [];

  const selectionMapGlobal = new Map();

  const summaryByQuestion = questions.map((q, idx) => {
    const respuestas = Array.isArray(q?.respuestas) ? q.respuestas : [];

    let selectionsCount = 0;
    let localMap = new Map();

    for (const r of respuestas) {
      const seleccionArr = normalizeSelection(r?.seleccion);
      selectionsCount += seleccionArr.length;

      for (const s of seleccionArr) {
        // global
        selectionMapGlobal.set(s, (selectionMapGlobal.get(s) || 0) + 1);
        // local
        localMap.set(s, (localMap.get(s) || 0) + 1);
      }
    }

    const localTop = Array.from(localMap.entries())
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);

    return {
      index: idx + 1,
      pregunta: q?.pregunta || `Pregunta ${idx + 1}`,
      responsesCount: respuestas.length,
      selectionsCount,
      localTop,
    };
  });

  const selectionCountsGlobal = Array.from(selectionMapGlobal.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  // Pie: top N + Otros
  const TOP_N = 6;
  const pieData = selectionCountsGlobal.slice(0, TOP_N);
  const rest = selectionCountsGlobal
    .slice(TOP_N)
    .reduce((acc, cur) => acc + cur.value, 0);
  const pieWithOthers =
    rest > 0 ? [...pieData, { name: "Otros", value: rest }] : pieData;

  // Bar: top 10
  const barTop = selectionCountsGlobal.slice(0, 10);

  // Line: por pregunta
  const lineByQuestion = summaryByQuestion.map((x) => ({
    name: `P${x.index}`,
    respuestas: x.responsesCount,
    selecciones: x.selectionsCount,
  }));

  const totalQuestions = questions.length;
  const totalResponses = summaryByQuestion.reduce(
    (acc, x) => acc + x.responsesCount,
    0
  );
  const totalSelections = summaryByQuestion.reduce(
    (acc, x) => acc + x.selectionsCount,
    0
  );
  const answeredQuestions = summaryByQuestion.filter(
    (x) => x.responsesCount > 0
  ).length;

  return {
    summaryByQuestion,
    pieWithOthers,
    barTop,
    lineByQuestion,
    kpi: { totalQuestions, answeredQuestions, totalResponses, totalSelections },
  };
}

const PIE_COLORS = [
  "#7C3AED",
  "#06B6D4",
  "#22C55E",
  "#F97316",
  "#E11D48",
  "#FACC15",
  "#94A3B8",
];

function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <Card className="p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight text-white">
        {value}
      </div>
    </Card>
  );
}

function EmptyChart({ title = "Sin datos todavía" }) {
  return (
    <div className="grid h-full place-items-center rounded-xl border border-white/10 bg-black/20">
      <div className="text-center">
        <div className="text-sm text-white/80">{title}</div>
        <div className="mt-1 text-xs text-white/50">
          Necesitás al menos una respuesta con{" "}
          <code className="text-white/70">seleccion[]</code>.
        </div>
      </div>
    </div>
  );
}

export default function MetricasEventoComponent() {
  const { id } = useParams();
  const router = useRouter();

  const [event, setEvent] = React.useState(null);
  const [analytics, setAnalytics] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`/api/events/${id}`, { cache: "no-store" });
        const json = await res.json();

        const normalized = normalizeEventPayload(json);

        // ✅ Debug clave: mirá esto en la consola
        console.log("API RAW JSON:", json);
        console.log("EVENT NORMALIZED:", normalized);
        console.log("EVENT.data:", normalized?.data);

        if (!res.ok) {
          throw new Error(
            normalized?.message ||
              `Error ${res.status}: No se pudo cargar el evento`
          );
        }

        if (!mounted) return;

        const a = buildAnalytics(normalized);

        // ✅ Debug clave: si esto sale vacío, el problema es la data
        console.log("ANALYTICS:", a);

        setEvent(normalized);
        setAnalytics(a);
      } catch (e) {
        if (!mounted) return;
        setError(e?.message || "Error inesperado");
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    if (id) load();
    return () => {
      mounted = false;
    };
  }, [id]);

  const title = event?.titulo || "Evento";
  const link = event?.link || "#";
  const fecha = event?.fecha ? formatDate(event.fecha) : "";

  return (
    <div className="min-h-screen bg-[#05060A] text-white w-full py-[150px]">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[460px] w-[460px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              Analytics Dashboard
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h1>
            {fecha && <p className="mt-1 text-sm text-white/60">{fecha}</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => router.back()}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
            >
              ← Volver
            </button>

            <a
              href={link}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(124,58,237,0.25)] hover:opacity-95 transition text-center"
            >
              Ir al formulario →
            </a>
          </div>
        </motion.div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Card className="p-5">Cargando…</Card>
              </motion.div>
            ) : error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Card className="p-5">
                  <div className="text-sm text-rose-300">Error</div>
                  <div className="mt-1 text-white/80">{error}</div>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <Stat
                    label="Preguntas"
                    value={analytics?.kpi?.totalQuestions ?? 0}
                  />
                  <Stat
                    label="Preguntas respondidas"
                    value={analytics?.kpi?.answeredQuestions ?? 0}
                  />
                  <Stat
                    label="Respuestas totales"
                    value={analytics?.kpi?.totalResponses ?? 0}
                  />
                  <Stat
                    label="Selecciones totales"
                    value={analytics?.kpi?.totalSelections ?? 0}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="text-sm font-medium">
                      Top intereses (global)
                    </div>
                    <div className="mt-4 h-[300px]">
                      {(analytics?.pieWithOthers || []).length === 0 ? (
                        <EmptyChart title="No hay selecciones para graficar" />
                      ) : (
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <ReTooltip
                              contentStyle={{
                                background: "rgba(10,10,15,0.9)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: 12,
                              }}
                            />
                            <Pie
                              data={analytics.pieWithOthers}
                              dataKey="value"
                              nameKey="name"
                              innerRadius={70}
                              outerRadius={110}
                              paddingAngle={2}
                              isAnimationActive
                            >
                              {analytics.pieWithOthers.map((_, i) => (
                                <Cell
                                  key={i}
                                  fill={PIE_COLORS[i % PIE_COLORS.length]}
                                />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="text-sm font-medium">
                      Top 10 selecciones
                    </div>
                    <div className="mt-4 h-[300px]">
                      {(analytics?.barTop || []).length === 0 ? (
                        <EmptyChart title="No hay selecciones para graficar" />
                      ) : (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={analytics.barTop}>
                            <CartesianGrid
                              strokeDasharray="3 3"
                              stroke="rgba(255,255,255,0.06)"
                            />
                            <XAxis
                              dataKey="name"
                              tick={{
                                fill: "rgba(255,255,255,0.65)",
                                fontSize: 11,
                              }}
                              interval={0}
                              angle={-18}
                              textAnchor="end"
                              height={60}
                            />
                            <YAxis
                              tick={{
                                fill: "rgba(255,255,255,0.65)",
                                fontSize: 11,
                              }}
                            />
                            <ReTooltip
                              contentStyle={{
                                background: "rgba(10,10,15,0.9)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: 12,
                              }}
                            />
                            <Bar
                              dataKey="value"
                              radius={[10, 10, 0, 0]}
                              isAnimationActive
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </Card>
                </div>

                <Card className="p-4">
                  <div className="text-sm font-medium">
                    Respuestas y selecciones por pregunta
                  </div>
                  <div className="mt-4 h-[320px]">
                    {(analytics?.lineByQuestion || []).length === 0 ? (
                      <EmptyChart title="No hay data para graficar" />
                    ) : (
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={analytics.lineByQuestion}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(255,255,255,0.06)"
                          />
                          <XAxis
                            tick={{
                              fill: "rgba(255,255,255,0.65)",
                              fontSize: 11,
                            }}
                            dataKey="name"
                          />
                          <YAxis
                            tick={{
                              fill: "rgba(255,255,255,0.65)",
                              fontSize: 11,
                            }}
                          />
                          <ReTooltip
                            contentStyle={{
                              background: "rgba(10,10,15,0.9)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              borderRadius: 12,
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="respuestas"
                            strokeWidth={2.5}
                            dot={false}
                            isAnimationActive
                          />
                          <Line
                            type="monotone"
                            dataKey="selecciones"
                            strokeWidth={2.5}
                            dot={false}
                            isAnimationActive
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="text-sm font-medium">
                    Detalle por pregunta
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                    <table className="w-full text-sm">
                      <thead className="bg-white/5 text-white/70">
                        <tr>
                          <th className="px-3 py-2 text-left font-medium">#</th>
                          <th className="px-3 py-2 text-left font-medium">
                            Pregunta
                          </th>
                          <th className="px-3 py-2 text-right font-medium">
                            Respuestas
                          </th>
                          <th className="px-3 py-2 text-right font-medium">
                            Selecciones
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(analytics?.summaryByQuestion || []).map((row) => (
                          <tr
                            key={row.index}
                            className="border-t border-white/10"
                          >
                            <td className="px-3 py-2 text-white/70">
                              {row.index}
                            </td>
                            <td className="px-3 py-2 text-white/90">
                              {row.pregunta}
                            </td>
                            <td className="px-3 py-2 text-right text-white/80">
                              {row.responsesCount}
                            </td>
                            <td className="px-3 py-2 text-right text-white/80">
                              {row.selectionsCount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
