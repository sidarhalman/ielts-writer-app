export default function TextArea({
  value,
  onChange,
  placeholder,
  onSave,
  onCheck,
  saveDisabled,
  checkDisabled
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        spellCheck
        style={{
          flex: 1,
          padding: 32,
          background: "#3f3f3f",
          color: "#f9fafb",
          fontSize: 18,
          lineHeight: "1.75",
          fontFamily: "Georgia, serif",
          border: "none",
          outline: "none",
          resize: "none"
        }}
      />

      {/* ACTION BAR */}
      <div
        style={{
          padding: 12,
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
          background: "#ffffff"
        }}
      >
        <button
          onClick={onSave}
          disabled={saveDisabled}
          style={{
            padding: "8px 14px",
            borderRadius: 10,
            background: saveDisabled ? "#9ca3af" : "#111827",
            color: "#ffffff",
            fontWeight: 700
          }}
        >
          Save
        </button>

        <button
          onClick={onCheck}
          disabled={checkDisabled}
          style={{
            padding: "8px 14px",
            borderRadius: 10,
            background: checkDisabled ? "#9ca3af" : "#111827",
            color: "#ffffff",
            fontWeight: 700
          }}
        >
          Check
        </button>
      </div>
    </div>
  );
}