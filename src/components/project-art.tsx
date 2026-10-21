import type { Project } from "@/content/projects";
export function ProjectArt({
  kind,
  large = false,
}: {
  kind: Project["visual"];
  large?: boolean;
}) {
  return (
    <div
      className={`project-art art-${kind} ${large ? "art-large" : ""}`}
      aria-hidden="true"
    >
      {kind === "platform" && (
        <div className="mini-app">
          <div className="mini-sidebar">
            <b>b.</b>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="mini-main">
            <div className="mini-top">
              <span>Taller / Órdenes</span>
              <span>•••</span>
            </div>
            <div className="mini-heading">
              Cada máquina,
              <br />
              su historia.
            </div>
            <div className="mini-row">
              <i />
              Ingreso<span>01</span>
            </div>
            <div className="mini-row">
              <i />
              Diagnóstico<span>02</span>
            </div>
            <div className="mini-row">
              <i />
              Reparación<span>03</span>
            </div>
          </div>
        </div>
      )}
      {kind === "loomarq" && (
        <>
          <div className="loom-weave">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
          <strong>
            LOOMARQ<span>INGENIERÍA DIGITAL</span>
          </strong>
          <span className="art-foot">Personas. Procesos. Tecnología.</span>
        </>
      )}
      {kind === "quasar" && (
        <>
          <svg viewBox="0 0 480 300">
            <g fill="none" stroke="currentColor">
              {[55, 95, 135].map((r) => (
                <circle key={r} cx="240" cy="155" r={r} opacity=".15" />
              ))}
              <path
                d="M105 85 240 175 380 95M240 175 330 240"
                strokeDasharray="4 7"
                opacity=".65"
              />
              {[
                [105, 85],
                [380, 95],
                [330, 240],
              ].map(([x, y]) => (
                <g key={x} transform={`translate(${x} ${y}) rotate(-25)`}>
                  <rect x="-9" y="-12" width="18" height="24" rx="3" />
                  <path d="M-9-6h-22V6h22M9-6h22V6H9M0-12v-8" />
                  <circle cy="-23" r="3" />
                </g>
              ))}
              <circle cx="240" cy="175" r="15" stroke="#dc9871" />
            </g>
            <circle cx="240" cy="175" r="5" fill="#dc9871" />
            <g fill="currentColor" fontFamily="monospace" fontSize="13">
              <text x="28" y="35">
                GO / API REST
              </text>
              <text x="254" y="169">
                Emisor
              </text>
            </g>
          </svg>
          <span className="art-foot">Tres señales. Un punto de encuentro.</span>
        </>
      )}
      {kind === "esp32" && (
        <>
          <svg viewBox="0 0 480 300">
            <g stroke="currentColor" fill="none" strokeWidth="1.5">
              <path d="M0 95h105l50 50h65M480 210H370l-50-50h-60M0 220h80l45-45h95M480 75H370l-45 45h-65" />
              <rect x="183" y="85" width="114" height="130" rx="10" />
              {Array.from({ length: 6 }, (_, i) => (
                <path key={i} d={`M168 ${103 + i * 18}h15m114 0h15`} />
              ))}
              <path d="M210 110h60v30h-60zM210 160h20m10 0h30M210 180h60" />
              <circle cx="105" cy="95" r="6" />
              <circle cx="370" cy="210" r="6" />
            </g>
            <text
              x="200"
              y="245"
              fill="currentColor"
              fontFamily="monospace"
              fontSize="13"
            >
              ESP32 / HTTP
            </text>
            <circle cx="370" cy="75" r="9" fill="#d3794a" />
          </svg>
          <span className="art-foot">Un navegador. Un mundo físico.</span>
        </>
      )}
      {kind === "robot" && (
        <>
          <svg viewBox="0 0 480 300">
            <g fill="none" stroke="currentColor">
              <path d="M60 244h350M120 270V45M72 267l240-145" opacity=".2" />
              {[0, 1, 2, 3].map((i) => (
                <ellipse
                  key={i}
                  cx="245"
                  cy="213"
                  rx={50 + i * 25}
                  ry={16 + i * 10}
                  opacity=".12"
                />
              ))}
              <path
                d="M160 225l65-105 84 38 42-63"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M308 157l44-64"
                stroke="#c95837"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {[
                [160, 225],
                [225, 120],
                [309, 158],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="12"
                  fill="#ebe9db"
                  strokeWidth="3"
                />
              ))}
              <path
                d="m342 78 19 10-6 16M120 232h70l10 16H110z"
                strokeWidth="2"
              />
              <path d="M300 65q75 12 91 75" strokeDasharray="3 5" />
            </g>
            <text
              x="55"
              y="58"
              fill="currentColor"
              fontFamily="monospace"
              fontSize="12"
            >
              x · y · z
            </text>
          </svg>
          <span className="art-foot">3 GDL / infinitas preguntas</span>
        </>
      )}
    </div>
  );
}
