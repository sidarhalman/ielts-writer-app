export default function Header({
  wordCount,
  wordTarget,
  minutes,
  seconds,
  running,
  onToggle,
  onReset
}) {
  return (
    <div
      style={{
        padding: "14px 20px",
        background: "#f9fafb",
        borderBottom: "1px solid #d1d5db",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "system-ui",
        fontSize: 15,
        color: "#111827"
      }}
    >
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <span style={{ fontWeight: 700 }}>
          {wordCount} / {wordTarget} words
        </span>

        <span
          style={{
            fontFamily: "monospace",
            fontWeight: 700,
            minWidth: 110
          }}
        >
          Time: {minutes}:{String(seconds).padStart(2, "0")}
        </span>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={onToggle}
          style={{
            padding: "8px 16px",
            borderRadius: 10,
            background: "#111827",
            color: "#ffffff",
            fontWeight: 600
          }}
        >
          {running ? "Pause" : "Start"}
        </button>

        <button
          onClick={onReset}
          style={{
            padding: "8px 16px",
            borderRadius: 10,
            background: "#111827",
            color: "#ffffff",
            fontWeight: 600
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}