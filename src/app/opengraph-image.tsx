import { ImageResponse } from "next/og";
export const alt = "Marcio Bagnus · Ingeniería con mirada humana";
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
          fontSize: 24,
        }}
      >
        <span>MB / MARCIO BAGNUS</span>
        <span>CÓRDOBA, ARGENTINA</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          lineHeight: 1.05,
          letterSpacing: -4,
        }}
      >
        <span>Ingeniería con</span>
        <span style={{ color: "#a84227" }}>mirada humana.</span>
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
        <span>Personas · Tecnología · Transformación</span>
      </div>
    </div>,
    size,
  );
}
