export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Asterisk() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="10">
        <path d="M50 5v90M5 50h90M18 18l64 64M18 82l64-64" />
      </g>
    </svg>
  );
}
