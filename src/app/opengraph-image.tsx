import { ImageResponse } from "next/og";
export const alt =
  "Marcio Bagnus · Backend Software Engineer. Ingeniería con mirada humana.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f3f1e7",
        color: "#262d24",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 70,
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
        }}
      >
        <span>MB / MARCIO BAGNUS</span>
        <span>CÓRDOBA, ARGENTINA · CIUDADANÍA UE</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 86,
            lineHeight: 1.05,
            letterSpacing: -4,
          }}
        >
          <span>Backend</span>
          <span style={{ color: "#a84227" }}>Software Engineer.</span>
        </div>
        <span style={{ fontSize: 30, marginTop: 24 }}>
          Ingeniería con mirada humana.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 27,
          borderTop: "1px solid #b7bcad",
          paddingTop: 22,
        }}
      >
        <span>Marcio Bagnus</span>
        <span>Java · Go · .NET · Ex Mercado Libre</span>
      </div>
    </div>,
    size,
  );
}
