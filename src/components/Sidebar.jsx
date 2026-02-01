export default function Sidebar() {
  return (
    <div
      style={{
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        fontFamily: "system-ui",
        color: "#6b7280"
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>
        SAVED
      </div>

      <div
        style={{
          height: 48,
          borderRadius: 10,
          background: "#f3f4f6"
        }}
      />

      <div
        style={{
          height: 48,
          borderRadius: 10,
          background: "#f3f4f6"
        }}
      />

      <div
        style={{
          height: 48,
          borderRadius: 10,
          background: "#f3f4f6"
        }}
      />
    </div>
  );
}