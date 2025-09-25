"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import { useMemo, useState, useEffect, useTransition } from "react";
import { public_sans } from "@/app/fonts/fonts";

const TABS = [
  { key: "users", label: "Team Leads", href: "/" },
  { key: "provider", label: "Partners", href: "/provider" },
];

export default function NavUserProviderToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Activo real según la ruta
  const activeKey = useMemo(() => {
    if (pathname?.startsWith("/provider")) return "provider";
    return "users";
  }, [pathname]);

  // Tab elegido por click (dispara animación inmediatamente)
  const [selectedKey, setSelectedKey] = useState(null);

  // Cuando la ruta cambia, dejamos de forzar el seleccionado y volvemos al activo real
  useEffect(() => {
    setSelectedKey(null);
  }, [pathname]);

  // La píldora se posiciona en el clickeado si existe; si no, en el activo real
  const currentKey = selectedKey ?? activeKey;

  const handleClick = (e, tab) => {
    // Evitamos que Link navegue primero: iniciamos animación y luego navegamos de forma controlada
    e.preventDefault();
    if (tab.key === activeKey) return; // si ya estás ahí, no hagas nada
    setSelectedKey(tab.key); // <-- arranca animación YA
    startTransition(() => {
      router.push(tab.href); // <-- navegación concurrente; la animación sigue
    });
  };

  return (
    <LayoutGroup id="users-providers-toggle">
      <motion.div
        layout
        className="relative inline-flex h-10 w-[260px] select-none p-1"
        style={{ backgroundColor: "#27272A", borderRadius: "8px" }}
        role="tablist"
        aria-label="Team Leads / Partners"
      >
        {TABS.map((tab) => {
          const isActive = activeKey === tab.key;
          const isCurrent = currentKey === tab.key;

          return (
            <motion.div key={tab.key} layout className="relative z-0 flex-1">
              {/* Píldora blanca compartida: mismo layoutId en ambos slots */}
              {isCurrent && (
                <motion.div
                  layoutId="toggle-pill"
                  initial={false}
                  className="absolute inset-0"
                  style={{
                    background: "#FAFAFA",
                    borderRadius: "6px",
                    boxShadow: "0 1px 2px rgba(0,0,0,.06)",
                    willChange: "transform",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                    mass: 0.6,
                  }}
                />
              )}

              <Link
                href={tab.href}
                // prefetch opcional; si te genera tirón, podés desactivarlo:
                // prefetch={false}
                role="tab"
                aria-selected={isActive}
                className={`${public_sans.className} relative z-10 grid h-full w-full place-items-center px-3`}
                onClick={(e) => handleClick(e, tab)}
              >
                <span
                  className={`${
                    isActive ? "font-semibold" : "font-medium"
                  } transition-opacity duration-200`}
                  style={{ color: "#5F5F5F", opacity: isActive ? 1 : 0.9 }}
                >
                  {tab.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </LayoutGroup>
  );
}
