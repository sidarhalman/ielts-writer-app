export default function ModeSwitch({ mode, onChange }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button
        onClick={() => onChange("task1")}
        style={{ fontWeight: mode === "task1" ? "bold" : "normal" }}
      >
        Task 1
      </button>
      <button
        onClick={() => onChange("task2")}
        style={{ fontWeight: mode === "task2" ? "bold" : "normal" }}
      >
        Task 2
      </button>
    </div>
  );
}