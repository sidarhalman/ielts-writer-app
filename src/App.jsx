import { useEffect, useMemo, useState } from "react";

const WORD_TARGET = 250;
const EXAM_TIME = 40 * 60;

function countWords(text) {
  const t = text.trim();
  if (!t) return 0;
  return t.split(/\s+/).length;
}

export default function App() {
  const [text, setText] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(EXAM_TIME);
  const [running, setRunning] = useState(false);

  const wordCount = useMemo(() => countWords(text), [text]);
  const progress = Math.min((wordCount / WORD_TARGET) * 100, 100);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div style={{ minHeight: "100vh", background: "#e5e7eb", padding: 24,  width:"540px"}}>
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        height: "90vh"
      }}>
        {/* ÜST BİLGİ BAR */}
        <div style={{
          padding: "12px 20px",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "system-ui",
          fontSize: 14
        }}>
          <div style={{ display: "flex", gap: 20, color: "#374151" }}>
            <strong>{wordCount}</strong> / {WORD_TARGET} words
            <span
              style={{
                fontFamily: "monospace",
                minWidth: 110,
                display: "inline-block"
              }}
            >
              Time: {minutes} min {String(seconds).padStart(2, "0")} sec
            </span>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setRunning(r => !r)}>
              {running ? "Pause" : "Start"}
            </button>
            <button onClick={() => {
              setRunning(false);
              setSecondsLeft(EXAM_TIME);
            }}>
              Reset
            </button>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div style={{ height: 5, background: "#e5e7eb" }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: progress >= 100 ? "#22c55e" : "#3b82f6"
          }} />
        </div>

        {/* YAZI ALANI */}
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write your IELTS answer here..."
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

          }}
        />
      </div>
    </div>
  );
}