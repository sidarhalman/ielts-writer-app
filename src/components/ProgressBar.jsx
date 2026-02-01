export default function ProgressBar({ progress }) {
  return (
    <div style={{ height: 5, background: "#e5e7eb" }}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: progress >= 100 ? "#22c55e" : "#3b82f6"
        }}
      />
    </div>
  );
}