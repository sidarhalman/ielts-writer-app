export default function ModeSwitch({ mode, onChange }) {
  return (
    <div
      style={{
        padding: "10px 16px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        gap: 8,
        background: "#ffffff"
      }}
    >
      <button
        onClick={() => onChange("task1")}
        style={{
          padding: "8px 14px",
          borderRadius: 10,
          background: mode === "task1" ? "#111827" : "#e5e7eb",
          color: mode === "task1" ? "#ffffff" : "#111827",
          fontWeight: 600
        }}
      >
        Task 1 (150 / 20m)
      </button>

      <button
        onClick={() => onChange("task2")}
        style={{
          padding: "8px 14px",
          borderRadius: 10,
          background: mode === "task2" ? "#111827" : "#e5e7eb",
          color: mode === "task2" ? "#ffffff" : "#111827",
          fontWeight: 600
        }}
      >
        Task 2 (250 / 40m)
      </button>
    </div>
  );
}