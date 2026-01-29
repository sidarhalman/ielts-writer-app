export default function TextArea({ value, onChange, placeholder }) {
  return (
    <textarea
  value={value}
  onChange={e => onChange(e.target.value)}
  placeholder={placeholder}
  spellCheck
  style={{
    flex: 1,
    padding: 32,
    fontSize: 18,
    lineHeight: "1.75",
    fontFamily: "Georgia, serif",
    border: "none",
    outline: "none",
    resize: "none",
    background: "#3f3f3f",
    color: "#f9fafb"
  }}
/>
  );
}