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
    <div>
      <div style={{ display: "flex", gap: 20, color: "#111827" }}>
        <span style={{ fontWeight: 600 }}>
          {wordCount} / {wordTarget} words
        </span>

        <span
          style={{
            fontFamily: "monospace",
            minWidth: 120,
            display: "inline-block",
            fontWeight: 600
          }}
        >
          Time: {minutes}:{String(seconds).padStart(2, "0")}
        </span>
      </div>

      <div>
        <button onClick={onToggle}>
          {running ? "Pause" : "Start"}
        </button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}