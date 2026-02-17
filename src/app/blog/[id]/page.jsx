import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

const POSTS = [
  {
    id: "leadership-costs",
    title: "438 mil millones: el costo oculto del mal liderazgo",
    date: "2025-07-23",
    tag: "Costos",
    cover: "/images/Blog/wakeboard.svg",
    content: `
      <p>La falta de conexión en el trabajo está drenando silenciosamente la economía global, y ya no es un problema “blando”. Datos recientes muestran que el mal liderazgo le cuesta a las empresas <strong>438 mil millones de dólares al año</strong>. No se trata solo de baja productividad, sino también de rotación, ausentismo, desalineación, burnout y algo más profundo: un modelo de trabajo que nunca fue diseñado pensando en las personas.</p>

      <p>Y lo más preocupante: solo <strong>el 21% de los empleados en el mundo</strong> se siente realmente involucrado en su trabajo. Eso significa que casi 8 de cada 10 están desconectados de su propósito, de su equipo o de su liderazgo. No es un simple problema de retención. Es una crisis cultural y operativa. La pregunta ya no es por qué está pasando, sino por qué seguimos gestionando empresas así en 2025.</p>

      <h3>🧠 La brecha de liderazgo que cuesta billones</h3>
      <p>La calidad del liderazgo es el factor más determinante en el desempeño de un equipo. Puede explicar hasta <strong>el 70% de la diferencia</strong> entre un equipo motivado y uno tóxico. Sin embargo, muchos managers no están preparados y carecen de herramientas para liderar en entornos híbridos, dinámicos y centrados en la experiencia.</p>

      <p>Aún más alarmante: el compromiso de los propios managers también está disminuyendo. Los grupos más afectados son <strong>líderes jóvenes</strong> y <strong>mujeres en roles de liderazgo</strong>, que enfrentan mayores niveles de agotamiento y desconexión.</p>

      <p>Cuando el liderazgo colapsa, la cultura se deteriora. Y cuando la cultura se rompe, la empresa comienza a desviarse.</p>

      <p>Si ampliamos la mirada: si las compañías invirtieran estratégicamente en conexión, podríamos desbloquear <strong>9,6 billones de dólares</strong> en productividad global. Eso representa casi <strong>el 10% del PBI mundial</strong>.</p>

      <h3>✨ Donde entra Sparkclub</h3>
      <p>En Sparkclub no creamos simples herramientas de engagement. Construimos <strong>sistemas que activan cultura</strong>, fortalecen el liderazgo y generan resultados reales.</p>

      <p>Utilizamos tecnología para conectar personas a través de experiencias significativas que van mucho más allá del clásico after office de los viernes. Porque la conexión no depende del presupuesto, sino de la intención. Y cuando está bien diseñada, se traduce en rendimiento.</p>

      <h2>Nuestra plataforma ayuda a los líderes a:</h2>
      <ul>
        <li>Leer señales de ánimo, fricción y energía en tiempo real.</li>
        <li>Recibir recomendaciones basadas en intereses reales, no en suposiciones.</li>
        <li>Activar experiencias curadas y automatizar incentivos mediante dinámicas de gamificación.</li>
      </ul>

      <p>Lo que hacemos es conectar <strong>el momento adecuado</strong> con <strong>la experiencia correcta</strong>. Porque la cultura no sucede por accidente: se diseña.</p>

      <h3>📊 Una oportunidad de mercado masiva</h3>
      <p>La industria HR Tech sigue creciendo, pero muchas herramientas aún tratan el engagement como un KPI anual.</p>

      <p>Mientras tanto, el mercado real de personas desconectadas es enorme — <strong>más de 130 millones solo en Latinoamérica</strong>. A nivel global, este problema se traduce en cientos de miles de millones de dólares.</p>

      <p>Las empresas que logren cerrar esta brecha no solo retendrán talento: construirán una ventaja competitiva basada en confianza, cultura y energía humana.</p>

      <p>En Sparkclub estamos construyendo esa infraestructura. Transformamos momentos cotidianos en <strong>señales escalables de conexión</strong>. Conectamos datos y emoción.</p>

      <p>Y ayudamos a las empresas a pasar de simplemente tener “cultura” a lograr una <strong>conexión activa y medible</strong>.</p>

      <blockquote>Ayudamos a las empresas a pasar de cultura pasiva a conexión activa.</blockquote>

      <h3>🔁 De gestionar a liderar</h3>
      <p>El costo de no hacer nada ya no es intangible: es medible. Y enorme. Pero la oportunidad de hacerlo mejor nunca fue tan clara.</p>

      <p>Creemos en un <strong>liderazgo respaldado por sistemas</strong>, impulsado por datos y guiado por propósito. Todo comienza cuando dejamos de adivinar y empezamos a construir equipos que realmente prosperan.</p>

      <hr />

      <p><em>Fuentes:</em><br />
      Gallup – State of the Global Workplace 2025</p>
    `,
  },

  {
    id: "workplace-changing",
    title: "El trabajo está cambiando. ¿Estamos escuchando?",
    date: "2025-07-11",
    tag: "Trabajo",
    cover: "/images/Blog/Bouldering.svg",
    content: `
    <p>Mientras la conexión laboral alcanza mínimos históricos y los managers enfrentan una presión creciente, el futuro del trabajo está en juego. Este artículo explora las causas profundas de la desconexión en el entorno laboral y cómo un enfoque más personalizado y basado en datos puede ayudar a los equipos a reconstruir confianza, motivación y sentido de pertenencia.</p>

    <p>Solo <strong>el 21% de los empleados a nivel mundial</strong> afirma sentirse realmente involucrado en su trabajo. En Europa, esa cifra cae al <strong>14%</strong>, y en Latinoamérica alcanza apenas el <strong>26%</strong>. Esta creciente desconexión entre las personas y su trabajo no es solo un problema motivacional: es un problema económico. Se estima que la falta de engagement le cuesta a la economía global más de <strong>438 mil millones de dólares al año</strong> en pérdida de productividad, ausentismo y rotación.</p>

    <h3>Managers bajo presión, culturas perdiendo forma</h3>
    <p>No solo los empleados están luchando. Apenas <strong>el 27% de los managers</strong> se siente realmente comprometido, y muchos reportan falta de apoyo, herramientas y tiempo para liderar de manera efectiva. Esto es crítico, considerando que <strong>el 70% del engagement de un equipo</strong> está directamente vinculado a su manager.</p>

    <p>Al mismo tiempo, existe una brecha cada vez mayor entre lo que el liderazgo cree estar ofreciendo y lo que los empleados realmente experimentan. Muchas organizaciones dicen priorizar el bienestar, pero las personas no lo perciben así. La desconexión es cada vez más evidente.</p>

    <h3>Entonces, ¿hacia dónde vamos?</h3>
    <p>Las organizaciones más avanzadas no solo están sumando beneficios aislados: están <strong>rediseñando la experiencia del empleado</strong> en función de necesidades reales.</p>

    <p>Las áreas clave de enfoque incluyen:</p>
    <ul>
      <li>Mayor flexibilidad horaria</li>
      <li>Más visibilidad y proyección profesional</li>
      <li>Rediseño de momentos culturales clave</li>
      <li>Atención a la salud mental</li>
      <li>Experiencias y beneficios personalizados</li>
    </ul>

    <p>Lo que estas estrategias tienen en común es claro: se basan en <strong>señales humanas reales</strong>, no en suposiciones. Y están diseñadas a nivel individual, no para el “empleado promedio”.</p>

    <h3>Tecnología y cultura no son opuestas — son aliadas</h3>
    <p>La tecnología no puede arreglar la cultura por sí sola. Pero cuando se utiliza con propósito, puede ayudar a los equipos a escuchar mejor, actuar más rápido y conectar de forma más significativa.</p>

    <p>Con las herramientas adecuadas, podemos interpretar datos de comportamiento, comprender el pulso del equipo y activar experiencias que realmente resuenen. Lo que antes se basaba en intuición, hoy puede guiarse por información concreta.</p>

    <blockquote>Porque en el fondo, este no es solo un problema estructural: es un problema emocional. Las personas quieren sentirse vistas, escuchadas y valoradas. Y la tecnología puede ayudarnos a hacerlo realidad.</blockquote>

    <h3>El porqué de Sparkclub</h3>
    <p>En Sparkclub creemos que el futuro del trabajo se construye sobre la <strong>conexión</strong>. Estamos desarrollando una plataforma impulsada por IA que ayuda a los managers a fortalecer la cultura y la motivación conectando a las personas con experiencias personalizadas, alineadas con sus intereses y necesidades reales.</p>

    <p>Pero Sparkclub no es una herramienta más de engagement. Está diseñada para actuar sobre <strong>señales reales:</strong> preferencias, comportamientos, feedback y señales emocionales.</p>

    <p>Nuestro sistema mapea los intereses y motivadores de cada persona, y los conecta con experiencias curadas — desde actividades de team building y oportunidades de aprendizaje hasta beneficios de bienestar y momentos de comunidad — todo alineado con los valores de la empresa.</p>

    <p>Los managers no tienen que adivinar qué motiva a su equipo. Obtienen información, flexibilidad y herramientas para actuar — no una vez al año, sino como parte del día a día. Sparkclub hace que la cultura sea medible, el engagement dinámico y la conexión escalable.</p>

    <p>A través de nuestra capa de inteligencia, <strong>InfoFi</strong>, transformamos señales de comportamiento en datos accionables — y los datos en sistemas de incentivos que premian la participación, el sentido de pertenencia y la involucración.</p>

    <h3>Porque el trabajo no debería ser solo presentarse.<br/>Debería significar algo.</h3>

    <hr />

    <p><em>Fuentes:</em><br />
      Gallup – State of the Global Workplace 2025<br />
      Global Talent Trends Report 2024<br />
      Deloitte – Global Human Capital Trends 2025
    </p>
  `,
  },


  {
    id: "ai-hr-future",
    title:
      "Recursos Humanos al mando: por qué el futuro de la IA en el trabajo debe estar liderado por RR. HH.",
    date: "2025-07-09",
    tag: "IA y RR. HH.",
    cover: "/images/Blog/ArtificialIntelligence.webp",
    content: `
    <p>La inteligencia artificial ya no es una tendencia lejana: está totalmente integrada en la forma en que las organizaciones operan, evolucionan y prosperan. A medida que las empresas se apresuran a adoptar la IA, crece el consenso sobre quién debe liderar esta transformación: el área de Recursos Humanos (RR. HH.).</p>

    <p>Declaraciones recientes de la CHRO de IBM, combinadas con informes globales de Mercer y Deloitte, señalan un cambio profundo en cómo se percibe a RR. HH.: ya no solo como una función de soporte, sino como la <strong>arquitecta estratégica</strong> del entorno laboral impulsado por IA.</p>

    <h3>RR. HH. está en una posición única para liderar la adopción de IA</h3>
    <p>Según IBM, las y los profesionales de RR. HH. son quienes están mejor preparados para liderar la transformación porque entienden cómo trabajan las personas y qué necesitan para prosperar <span class="italic">[Deloitte 2025]</span>. Esto se alinea con el informe <strong>Global Talent Trends 2024</strong> de Mercer, que muestra que las organizaciones que adoptan tecnología centrada en las personas logran <strong>mayor retención y engagement</strong> <span class="italic">[Mercer 2024]</span>.</p>

    <p>Además, <strong>el 30% de los ejecutivos encuestados por Deloitte</strong> cree que las CHRO deberían trabajar muy de cerca con las áreas de tecnología (CIO) para optimizar la colaboración entre humanos y máquinas. Aún más llamativo: <strong>el 11%</strong> imagina que el rol de CHRO evolucionará hacia un <em>Chief Human and Machine Resource Officer</em> <span class="italic">[Deloitte 2025]</span>.</p>

    <h3>Las personas exigen personalización — y la IA lo hace posible</h3>
    <p>Hoy, las personas quieren más que un empleo. Buscan <strong>propósito, bienestar y personalización</strong>. Según Deloitte, <strong>el 60% de los empleados</strong> espera que su compañía aumente su motivación, pero solo <strong>el 33%</strong> siente que sus managers entienden realmente qué los impulsa <span class="italic">[Deloitte 2025]</span>.</p>

    <p>Ahí entra la IA. Los sistemas avanzados ya permiten a las empresas:</p>
    <ul>
      <li>Analizar señales de estrés a través de wearables y herramientas de medición.</li>
      <li>Conectar a las personas con oportunidades personalizadas de aprendizaje y desarrollo.</li>
      <li>Usar tableros impulsados por IA para enviar recordatorios e incentivos alineados con los objetivos e intereses de cada individuo <span class="italic">[Deloitte 2025]</span>.</li>
    </ul>

    <h3>La fórmula Sparkclub: IA centrada en las personas para potenciar el engagement</h3>
    <p>En Sparkclub creemos que la IA debe <strong>amplificar a las personas, no reducirlas a puntos de datos</strong>. La IA no viene a reemplazar a RR. HH.: viene a hacerlo más potente.</p>

    <p>Nuestra plataforma está diseñada para:</p>
    <ul>
      <li>Proveer tableros inteligentes que miden bienestar, colaboración y puntos de fricción.</li>
      <li>Sugerir experiencias hiperpersonalizadas — desde formaciones hasta actividades de equipo — según intereses y comportamientos individuales.</li>
      <li>Dar a los equipos de RR. HH. información predictiva para anticipar la desmotivación y el riesgo de desconexión.</li>
    </ul>

    <p>Según Deloitte, la adopción de IA ya está redefiniendo la <strong>Propuesta de Valor al Empleado (EVP)</strong>. Más de <strong>el 70% de las personas</strong> dice que es más probable que se quede en una empresa que la ayude a prosperar en un mundo impulsado por IA <span class="italic">[Deloitte 2025]</span>.</p>

    <p>Para liderar esta transformación, RR. HH. necesita:</p>
    <ul>
      <li>Abrazar roles cruzados entre personas y tecnología.</li>
      <li>Priorizar una IA ética que respete la autonomía y la privacidad de los empleados.</li>
      <li>Reimaginar el engagement no como un beneficio extra, sino como un imperativo estratégico.</li>
    </ul>

    <h2>RR. HH. tiene la llave para alinear tecnología y confianza</h2>
    <p>A medida que las compañías adoptan la IA, RR. HH. tiene el poder de alinear <strong>tecnología con confianza</strong> y <strong>desempeño con personalización</strong>. Plataformas como Sparkclub permiten que los equipos de personas desbloqueen ese potencial, escalando cultura y conexión con inteligencia y datos accionables.</p>

    <blockquote>La IA no viene a reemplazar a RR. HH.: viene a potenciarlo.</blockquote>

    <hr />

    <h3>Fuentes y referencias</h3>
    <ul>
      <li>Declaración de la CHRO de IBM – “Why HR Should Lead the AI Revolution in Companies”, Infobae, junio 2025</li>
      <li>Mercer (2024) – Global Talent Trends Report: <em>Empathy in Action: Designing Work for a New Era</em></li>
      <li>Deloitte (2025) – Global Human Capital Trends Report: <em>Reimagining the Workforce Experience for a Boundaryless World</em></li>
      <li>Gartner – “How HR Can Prepare for the Generative AI Shift”, Gartner Insights, 2024</li>
      <li>Accenture – “The CHRO as a Growth Executive”, Talent and Organization Report, 2023</li>
      <li>IMD – “From CHRO to CHRO+AI: The Future of People Leadership”, IMD Business School, 2023</li>
      <li>The Washington Post – “No AI, No Job: Why Companies Like Duolingo and Shopify Are Mandating AI Literacy”, junio 2025</li>
      <li>Business Insider – “How Lattice Is Preparing for a World Where AI Agents and Humans Work Together”, junio 2025</li>
      <li>The Australian – “Balancing AI Agility With Workplace Stability”, junio 2025</li>
    </ul>
  `,
  },
  {
    id: "culture-connection-google",
    title:
      "Cultura, conexión y experiencias en Google: una historia de éxito en employee engagement",
    date: "2025-04-10",
    tag: "Cultura y conexión",
    cover: "/images/blog/Running.svg",
    content: `
    <p>En el mundo corporativo actual, pocas compañías han captado tanta atención por su cultura organizacional como Google. Conocida por su entorno de trabajo innovador y sus iniciativas centradas en las personas, Google se ha convertido en un referente de engagement y satisfacción laboral. Este artículo explora cómo las estrategias de Google en cultura, conexión y experiencias pueden servir como modelo para organizaciones que buscan mejorar el engagement de sus equipos.</p>

    <h3>🌟 Definiendo el employee engagement</h3>
    <p>El <strong>employee engagement</strong> es la conexión emocional y el nivel de compromiso que una persona tiene con su organización y sus objetivos. Una persona comprometida no solo cumple tareas: aporta pasión, innovación y un deseo genuino de contribuir al éxito de la empresa.</p>

    <h3>Por qué el engagement importa</h3>
    <ul>
      <li><strong>Mayor productividad:</strong> las personas comprometidas suelen ser más eficientes y proactivas.</li>
      <li><strong>Menor rotación:</strong> cuando la gente se siente valorada, es menos probable que se vaya.</li>
      <li><strong>Mejor clima:</strong> el engagement fomenta una cultura positiva y colaborativa.</li>
    </ul>

    <h3>🎯 Experiencias que construyen cultura</h3>
    <p>En Google, se anima a las personas a participar activamente en la vida de la empresa más allá de sus responsabilidades diarias. Un ejemplo destacado es la creación de los <strong>Employee Resource Groups (ERGs)</strong>: comunidades lideradas por empleados que comparten identidades, intereses o causas, como sustentabilidad, salud mental, afiliaciones culturales o apoyo a la comunidad LGBTQ+.</p>
    <p>Lo que hace únicos a estos grupos es que Google no solo los permite, sino que los <strong>apoya y financia activamente</strong>.</p>

    <p>Google cuenta con <strong>17 ERGs</strong> que abarcan a más de <strong>50.000 empleados</strong> en más de <strong>70 países</strong>, una parte muy significativa de su plantilla. Estos grupos ayudan a <em>impulsar la creatividad y reducir el burnout</em> al crear espacios significativos de conexión y propósito.</p>

    <h3>Qué pueden hacer los ERGs</h3>
    <ul>
      <li><strong>Proponer proyectos o iniciativas internas:</strong> por ejemplo, el ERG de sustentabilidad puede liderar campañas para reducir la huella de carbono en la oficina.</li>
      <li><strong>Organizar eventos y campañas de concientización:</strong> como iniciativas durante el Mes del Orgullo para promover inclusión y diversidad.</li>
      <li><strong>Crear actividades inter-áreas:</strong> conectando personas de distintos equipos en torno a intereses compartidos.</li>
    </ul>

    <p>Este nivel de apoyo refleja el compromiso de Google con la diversidad y la inclusión. La investigación muestra que las compañías con ERGs efectivos pueden lograr hasta un <strong>9% de aumento en retención</strong> y un <strong>10% de mejora en satisfacción laboral</strong>. A través de <strong>People Analytics</strong>, Google mide el impacto de estas iniciativas; los equipos con alta seguridad psicológica —un resultado clave impulsado por los ERGs— son <strong>un 27% más propensos a ser efectivos</strong>.</p>

    <h3>📊 El impacto del engagement en Google</h3>
    <ul>
      <li><strong>Menor rotación frente al promedio del sector tecnológico:</strong> mientras que en tech la rotación ronda el <strong>13,2%</strong>, la cultura de Google ha ayudado a mantener la salida de talento por debajo del promedio.</li>
      <li><strong>Mayor productividad:</strong> diversos estudios indican que las personas felices son alrededor de un <strong>12% más productivas</strong>; el foco de Google en satisfacción y engagement se traduce en mayor eficiencia y rendimiento.</li>
      <li><strong>Rankings de “mejores lugares para trabajar”:</strong> Google aparece de forma constante en listas de empleadores destacados (como Glassdoor), reflejando un compromiso sostenido con una cultura positiva.</li>
    </ul>

    <h3>🚀 La propuesta de valor de Sparkclub</h3>
    <p>No hace falta ser tan grande como Google para construir una cultura que genere engagement.</p>
    <p>En <strong>Sparkclub</strong> nos especializamos en impulsar el engagement a través de experiencias significativas y medibles. Trabajamos de cerca con equipos de RR. HH. y con las personas de la organización para que cada iniciativa tenga un impacto real y cuantificable.</p>

    <h3>Acompañamiento end-to-end y analíticas</h3>
    <p>Desde la ideación hasta la ejecución, ofrecemos analíticas avanzadas que permiten seguir las actividades a lo largo del año y generar reportes precisos sobre ROI e impacto cultural.</p>

    <h3>Expansión de producto y adopción de Web3</h3>
    <p>Lanzamos nuestro primer producto enfocado en eventos corporativos que fortalecen la cohesión y el engagement de los equipos. Mirando hacia adelante, estamos desarrollando soluciones de beneficios para empleados y programas de lealtad, incorporando tecnologías emergentes como <strong>Web3</strong>. Estas innovaciones permiten recompensas personalizadas y sistemas de puntos más seguros y transparentes utilizando blockchain.</p>

    <p>En síntesis, Sparkclub está transformando la forma en que las organizaciones construyen y miden el engagement, combinando experiencias enriquecedoras con analíticas profundas y tecnología de vanguardia.</p>

    <h3>🧭 Reflexiones</h3>
    <blockquote>El éxito de Google no se trata solo de tecnología; comienza por entender que la verdadera innovación empieza por las personas.</blockquote>
    <p>En Spark, estamos para ayudarte a construir tu propia versión de ese éxito, a través de experiencias que no solo agregan valor, sino que transforman.</p>
  `,
  },
  {
    id: "employee-engagement",
    title: "Qué es el employee engagement y por qué tu equipo lo necesita ahora",
    date: "2025-04-08",
    tag: "Engagement de empleados",
    cover: "/images/Blog/GoogleEngagement.png",
    content: `
    <p>El mundo del trabajo cambió. Las oficinas son híbridas, los equipos están distribuidos y las personas quieren algo más que un sueldo a fin de mes. En este nuevo contexto, el <strong>engagement</strong> se volvió un activo estratégico. Ya no alcanza con tener colaboradores productivos: necesitamos personas conectadas, comprometidas y entusiasmadas por construir juntas. En este artículo, desarmamos qué es realmente el employee engagement, por qué importa y cómo las empresas innovadoras lo están activando.</p>

    <h2>Conexión, cultura y experiencias: el nuevo ABC de los equipos de alto impacto</h2>

    <h3>💡 Qué es el smart engagement</h3>
    <p>En Spark definimos el <strong>smart engagement</strong> como la <em>conexión emocional activa</em> que vincula a las personas con su equipo, su propósito y su entorno de trabajo.</p>
    <p>No se trata solo de estar “cómodo” o de cobrar bien. Un equipo comprometido:</p>
    <ul>
      <li>Siente que forma parte de algo más grande.</li>
      <li>Interactúa con autenticidad.</li>
      <li>Participa activamente de la cultura de la empresa.</li>
      <li>Celebra, propone, crea.</li>
    </ul>

    <h3>Diferencias clave</h3>
    <table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Qué significa</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Satisfacción laboral</td>
          <td>Me siento bien con mi trabajo.</td>
        </tr>
        <tr>
          <td>Retención</td>
          <td>Me quedo en la empresa.</td>
        </tr>
        <tr>
          <td>Engagement</td>
          <td>Me involucro, contribuyo, disfruto… y ayudo a que otros también lo hagan.</td>
        </tr>
      </tbody>
    </table>

    <h3>📈 Por qué importa</h3>
    <p>Según Gallup, las empresas con personas comprometidas son:</p>
    <ul>
      <li><strong>21%</strong> más rentables</li>
      <li><strong>17%</strong> más productivas</li>
      <li><strong>41%</strong> menos propensas a sufrir ausentismo</li>
    </ul>
    <p>Y aun así, solo el <strong>23%</strong> de las personas a nivel global se siente realmente comprometida. La brecha es enorme, pero la oportunidad también.</p>

    <h3>🛠️ Cómo construir engagement</h3>
    <p>No hay fórmulas mágicas, pero sí pilares:</p>

    <h2>Cultura compartida</h2>
    <p>Claridad sobre valores, visión y propósito, para que sean algo más que palabras en una pared.</p>

    <h2>Reconocimiento</h2>
    <p>Las personas necesitan sentirse vistas y valoradas, no solo por sus resultados, sino también por sus actitudes y su colaboración.</p>

    <h2>Experiencias más allá del trabajo</h2>
    <p>Las relaciones humanas no se construyen solo en una videollamada. Se construyen compartiendo, jugando y creando recuerdos.</p>

    <h2>Participación activa</h2>
    <p>Cuando las personas pueden opinar, proponer ideas y elegir, se vuelven parte del cambio.</p>

    <h3>🌍 Casos reales</h3>
    <ul>
      <li><strong>Zappos:</strong> pionera en una cultura basada en experiencias compartidas.</li>
      <li><strong>Patagonia:</strong> incentivos alineados al propósito y a la comunidad.</li>
      <li><strong>Google:</strong> fomenta la innovación con espacios colaborativos y actividades extracurriculares.</li>
    </ul>

    <h3>💡 Lo que propone Spark</h3>
    <p>En Spark creemos que la mejor forma de activar el engagement es a través de <strong>experiencias curadas, humanas y divertidas</strong> que suceden fuera de la rutina diaria.</p>
    <p><strong>🎯 Nuestra plataforma</strong> permite que cada persona configure sus intereses y reciba propuestas personalizadas de actividades, eventos y beneficios cercanos, pensados para disfrutar en equipo.</p>

    <h2>✨ Conclusión</h2>
    <p>El employee engagement no es un beneficio extra. Es una <strong>inversión directa</strong> en la cultura, la productividad y la felicidad de tu equipo, y como toda inversión, requiere acción.</p>
    <p>Desde Spark te invitamos a construir la cultura que tu empresa merece: más conectada, más auténtica, más humana.</p>
    <p><a href="https://sparkclub.xyz" target="_blank" rel="noopener">Explorá nuestras experiencias</a> y empezá a cambiar la forma en que tu equipo se conecta.</p>
  `,
  },
  {
    id: "hello-spark-future-of-engagement",
    title: "¡Hola, mundo! Conoce Spark: el futuro del employee engagement",
    date: "2025-01-23",
    tag: "Producto",
    cover: "/images/Blog/Logo.webp",
    content: `
    <p>En el mundo corporativo actual, acelerado y competitivo, mantener a las personas comprometidas, motivadas y conectadas es más desafiante que nunca. Las empresas lidian con alta rotación, falta de cohesión en los equipos y personas desconectadas, lo que deriva en pérdida de productividad y caída en la moral.</p>

    <p><strong>Spark</strong> es una plataforma integral de smart engagement diseñada para ayudar a las compañías a aumentar el engagement, reducir la rotación y mejorar el desempeño de sus equipos. Creemos que la clave de una fuerza laboral vibrante está en el <strong>smart engagement</strong>: experiencias significativas que unen a los equipos, impulsan los resultados y fortalecen la cultura.</p>

    <h3>¿Por qué Spark?</h3>
    <p>Spark transforma la manera en que los equipos se conectan dentro y fuera del trabajo mediante eventos curados, incentivos y programas de lealtad orientados al engagement.</p>
    <ul>
      <li><strong>Para las personas:</strong> experiencias hechas a medida, alineadas con sus intereses, que fomentan pertenencia y motivación.</li>
      <li><strong>Para las empresas:</strong> insights basados en datos que ayudan a RR. HH. y al liderazgo a optimizar el engagement, mejorar la retención y potenciar la productividad.</li>
    </ul>

    <h3>Un enfoque más inteligente del employee engagement</h3>
    <p>Muchos programas tradicionales de engagement fallan porque no conectan con las personas o no generan impacto medible. Spark cambia ese paradigma.</p>
    <p>A través de <strong>personalización impulsada por IA</strong>, <strong>analíticas en tiempo real</strong> y <strong>dinámicas de gamificación</strong>, Spark se asegura de que cada iniciativa sea significativa para las personas y estratégica para el negocio.</p>

    <h2>Cómo Spark potencia tanto a las personas como al liderazgo</h2>
    <h3>🔹 Para las personas</h3>
    <ul>
      <li>Experiencias de team building personalizadas según intereses.</li>
      <li>Acceso a eventos exclusivos, programas de bienestar y actividades de desarrollo.</li>
      <li>Reconocimiento y beneficios que importan: perks relevantes e incentivos basados en lealtad.</li>
    </ul>

    <h3>🔹 Para líderes y equipos de RR. HH.</h3>
    <ul>
      <li>Reducción de la rotación gracias a conexiones más profundas dentro de los equipos.</li>
      <li>Visibilidad en tiempo real sobre tendencias de engagement y clima.</li>
      <li>Estrategias costo-efectivas que mejoran desempeño y satisfacción.</li>
    </ul>

    <h3>Benchmarks: qué hacen los líderes de la industria</h3>
    <ul>
      <li>✅ <strong>Google</strong> invierte en experiencias inmersivas para sostener la innovación y la colaboración.</li>
      <li>✅ <strong>Salesforce</strong> impulsa el engagement con eventos centrados en la cultura y beneficios personalizados.</li>
      <li>✅ <strong>LinkedIn</strong> usa estrategias basadas en datos para aumentar la satisfacción y la retención.</li>
    </ul>
    <p>Spark lleva este nivel de excelencia en engagement a compañías de todos los tamaños, haciendo que las conexiones significativas en el trabajo sean accesibles y medibles.</p>

    <h3>Súmate al movimiento Spark</h3>
    <p>Estamos acá para redefinir el employee engagement, convirtiendo los desafíos actuales del trabajo en oportunidades de crecimiento y conexión.</p>
    <p><strong>¿Listo para construir un equipo más comprometido, motivado y de alto desempeño?</strong> Encendamos el cambio juntos. 🚀</p>
    <p><em>Regístrate para recibir novedades de nuestro lanzamiento y acceso anticipado a la plataforma de engagement de Spark.</em></p>
  `,
  },
];

// helper: parse "DD-MM-YYYY" safely; fallback to native Date for ISO strings
function parseDate(d) {
  if (typeof d !== "string") return new Date(NaN);
  const m = d.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (m) {
    const [, dd, mm, yyyy] = m;
    return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  }
  return new Date(d); // works for ISO like "2025-09-22"
}

export default function BlogPostPageContainer({ params }) {
  const { id } = use(params);

  const post = POSTS.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <section
        className={`${publicSans.className} px-4 sm:px-6 md:px-0 pt-[150px]`}
      >
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-start-2 col-span-10">
            <h1 className="text-2xl font-semibold">Post no encontrado</h1>
            <Link
              href="/blog"
              className="text-zinc-700 underline mt-4 inline-block"
            >
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const dateObj = parseDate(post.date);
  const dateText = isNaN(dateObj)
    ? post.date
    : dateObj.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <article className={`${publicSans.className} bg-white text-zinc-900`}>
      <div className="px-4 sm:px-6 md:px-0 pt-[150px]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          {/* Back link and title */}
          <header className="col-start-2 col-span-10">
            <Link
              href="/blog"
              className="text-zinc-700 text-[20px] font-semibold"
            >
              ← Volver al blog
            </Link>
            <h1 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-tight">
              {post.title}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              {post.tag && (
                <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2.5 py-1 text-[11px] font-semibold">
                  {post.tag}
                </span>
              )}
              <time className="text-[14px] text-zinc-600">{dateText}</time>
            </div>
          </header>

          {/* Cover image */}
          <div className="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 py-6 lg:py-10">
            <div className="relative w-full aspect-[16/9] rounded-[4px] overflow-hidden">
              <Image
                src={post.cover || "/images/placeholders/blog-cover.png"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div
            className="
              col-start-2 col-span-10
              prose prose-zinc max-w-none py-10 mb-20
              [&_h2]:!text-[24px] [&_h2]:mt-10
              [&_h3]:!text-[30px] [&_h3]:!font-bold [&_h3]:mt-10 [&_h3]:mb-4
              [&_p]:!text-[20px] [&_p]:!text-zinc-800 [&_p]:leading-7
              [&_ul]:!list-disc [&_ul]:!ml-5 [&_ul]:!mt-4 [&_ul]:!mb-4
            "
          >
            {typeof post.content === "string" ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <pre className="text-red-600 text-sm whitespace-pre-wrap">
                {"post.content is not a string:\n" +
                  JSON.stringify(post.content, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
