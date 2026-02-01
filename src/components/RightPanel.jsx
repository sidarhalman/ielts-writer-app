export default function RightPanel() {
  return (
    <div
      style={{
        padding: 16,
        fontFamily: "system-ui",
        color: "#111827",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 800,
          marginBottom: 12
        }}
      >
        CHECK RESULT
      </div>

      <div
        style={{
          flex: 1,
          background: "#f9fafb",
          borderRadius: 12,
          padding: 14,
          color: "#6b7280",
          fontSize: 14,
          lineHeight: 1.6
        }}
      >
        Checked text and feedback will appear here.
      </div>
    </div>
  );
}