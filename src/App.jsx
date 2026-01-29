import { useMemo, useState } from "react";
import { countWords } from "./utils/countWords";
import { useTimer } from "./hooks/useTimer";
import Header from "./components/Header";
import ModeSwitch from "./components/ModeSwitch";
import ProgressBar from "./components/ProgressBar";
import TextArea from "./components/TextArea";
import * as layout from "./styles/layout";

const MODES = {
  task1: { words: 150, time: 20 * 60 },
  task2: { words: 250, time: 40 * 60 }
};

export default function App() {
  const [mode, setMode] = useState("task2");
  const [text, setText] = useState("");

  const { secondsLeft, running, setRunning, reset } =
    useTimer(MODES[mode].time);

  const wordCount = useMemo(() => countWords(text), [text]);
  const progress = Math.min(
    (wordCount / MODES[mode].words) * 100,
    100
  );

  return (
    <div style={layout.page}>
      <div style={layout.card}>
        <Header
          wordCount={wordCount}
          wordTarget={MODES[mode].words}
          minutes={Math.floor(secondsLeft / 60)}
          seconds={secondsLeft % 60}
          running={running}
          onToggle={() => setRunning(r => !r)}
          onReset={() => reset(MODES[mode].time)}
        />

        <ProgressBar progress={progress} />

        <ModeSwitch
          mode={mode}
          onChange={m => {
            setMode(m);
            reset(MODES[m].time);
          }}
        />

        <TextArea
          value={text}
          onChange={setText}
          placeholder={`Write your IELTS ${mode} answer...`}
        />
      </div>
    </div>
  );
}