import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { techStack, locations } from "#constants/index.js";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";
import { useState, useRef, useEffect, useCallback } from "react";

// ── Icon & Color Maps (unchanged) ──────────────────────────────────
const ICON_MAP = {
  "JavaScript": "devicon-javascript-plain",
  "SQL": "devicon-azuresqldatabase-plain",
  "React.js": "devicon-react-original",
  "Next.js": "devicon-nextjs-plain",
  "TypeScript": "devicon-typescript-plain",
  "GSAP": null,
  "React-Three-Fiber(R3F)": "devicon-threejs-original",
  "Motion": null,
  "React Native": "devicon-react-original",
  "Expo": null,
  "Tailwind CSS": "devicon-tailwindcss-plain",
  "CSS": "devicon-css3-plain",
  "Node.js": "devicon-nodejs-plain",
  "Express": "devicon-express-original",
  "Bun": null,
  "MongoDB": "devicon-mongodb-plain",
  "PostgreSQL": "devicon-postgresql-plain",
  "Git": "devicon-git-plain",
  "GitHub": "devicon-github-original",
  "Vercel": null,
  "Docker": "devicon-docker-plain",
  "OpenAI": null,
  "LLMs": null,
};

const EMOJI_MAP = {
  "GSAP": "✦", "Motion": "〜", "Expo": "📱", "Bun": "🥟",
  "Vercel": "▲", "OpenAI": "◎", "LLMs": "🤖", "React-Three-Fiber(R3F)": "🔷",
};

const CATEGORY_COLORS = [
  { text: "#60a5fa", bg: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.25)", glow: "rgba(96,165,250,0.35)" },
  { text: "#a78bfa", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.25)", glow: "rgba(167,139,250,0.35)" },
  { text: "#34d399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.25)", glow: "rgba(52,211,153,0.35)" },
  { text: "#f9a8d4", bg: "rgba(249,168,212,0.12)", border: "rgba(249,168,212,0.25)", glow: "rgba(249,168,212,0.35)" },
  { text: "#fbbf24", bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.25)", glow: "rgba(251,191,36,0.35)" },
  { text: "#f87171", bg: "rgba(248,113,113,0.12)", border: "rgba(248,113,113,0.25)", glow: "rgba(248,113,113,0.35)" },
  { text: "#38bdf8", bg: "rgba(56,189,248,0.12)", border: "rgba(56,189,248,0.25)", glow: "rgba(56,189,248,0.35)" },
  { text: "#4ade80", bg: "rgba(74,222,128,0.12)", border: "rgba(74,222,128,0.25)", glow: "rgba(74,222,128,0.35)" },
];

// ── Reusable JSX builders ──────────────────────────────────────────
const Prompt = ({ cmd }) => (
  <p className="term-prompt">
    <span className="term-user">sanidhya@macbook</span>
    <span className="term-sep">:</span>
    <span className="term-path">~/portfolio</span>
    <span className="term-dollar"> $ </span>
    <span className="term-cmd">{cmd}</span>
  </p>
);

const totalItems = techStack.reduce((acc, s) => acc + s.items.length, 0);

const TechStackOutput = () => (
  <div>
    <p className="term-output-line term-dim">╔══════════════════════════════════════════════════╗</p>
    <p className="term-output-line term-dim">║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SANIDHYA GUPTA · TECH STACK v2.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║</p>
    <p className="term-output-line term-dim">╚══════════════════════════════════════════════════╝</p>
    <div className="term-stack-list">
      {techStack.map(({ category, items }, i) => {
        const color = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
        return (
          <div key={category} className="term-stack-row">
            <span className="term-category" style={{ color: color.text }}>▶ {category.padEnd(12)}</span>
            <div className="term-badges">
              {items.map((item) => {
                const iconClass = ICON_MAP[item];
                const emoji = EMOJI_MAP[item];
                return (
                  <span key={item} className="term-badge" style={{ color: color.text, background: color.bg, border: `1px solid ${color.border}`, "--glow": color.glow }}>
                    {iconClass ? <i className={`${iconClass} colored term-badge-icon`} /> : emoji ? <span className="term-badge-emoji">{emoji}</span> : null}
                    <span className="term-badge-name">{item}</span>
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
    <hr className="term-separator" />
    <p className="term-output-line term-green term-mt">✔ {techStack.length} categories · {totalItems} technologies loaded</p>
    <p className="term-output-line term-dim2">⚡ render time: 4ms · exit code: 0</p>
  </div>
);

// ── ASCII Art / Neofetch ───────────────────────────────────────────
const NEOFETCH = `
      ████████████████████
    ██                    ██
  ██   ██████    ██████   ██     sanidhya@macbook
  ██   ██████    ██████   ██     ─────────────────
  ██                      ██     OS: macOS Portfolio v2.0
  ██       ████████       ██     Host: Sanidhya's Portfolio
  ██     ██        ██     ██     Kernel: React 19 + Vite 7
  ██      ██████████      ██     Shell: zsh (interactive)
    ██                  ██       DE: macOS Finder Clone
      ██████████████████         WM: GSAP + Zustand
                                 Theme: Dark [Terminal]
                                 Icons: Lucide + Devicon
                                 Terminal: sanidhya-term v1.0
                                 CPU: Full Stack @ 100%
                                 Memory: ∞ ideas / ∞ coffee
`;

// ── Command Handlers ───────────────────────────────────────────────
const buildCommands = (openWindow, setActiveLocation) => ({
  help: () => ({
    type: "output",
    content: (
      <div className="term-help">
        <p className="term-output-line term-green" style={{ marginBottom: 8 }}>Available commands:</p>
        {[
          ["help", "Show this help message"],
          ["skills", "Display tech stack"],
          ["ls / ls projects", "List all projects"],
          ["cat about.txt", "About me"],
          ["open <project>", "Open a project in Finder"],
          ["contact", "Open contact window"],
          ["resume", "Open resume"],
          ["whoami", "Who am I?"],
          ["date", "Current date & time"],
          ["neofetch", "System info (ASCII)"],
          ["echo <text>", "Echo text back"],
          ["clear", "Clear the terminal"],
          ["history", "Show command history"],
        ].map(([cmd, desc]) => (
          <p key={cmd} className="term-output-line" style={{ marginBottom: 2 }}>
            <span style={{ color: "#60a5fa", display: "inline-block", minWidth: 180 }}>  {cmd}</span>
            <span className="term-dim2">{desc}</span>
          </p>
        ))}
      </div>
    ),
  }),

  skills: () => ({ type: "output", content: <TechStackOutput /> }),
  "show tech-stack --all": () => ({ type: "output", content: <TechStackOutput /> }),

  ls: () => {
    const projects = locations.work?.children ?? [];
    return {
      type: "output",
      content: (
        <div>
          <p className="term-output-line term-dim2" style={{ marginBottom: 6 }}>📁 ~/portfolio/projects/</p>
          {projects.map((p, i) => (
            <p key={p.id} className="term-output-line" style={{ marginBottom: 2 }}>
              <span style={{ color: "#60a5fa" }}>  📂 </span>
              <span style={{ color: "#e6edf3" }}>{p.name}</span>
            </p>
          ))}
          <p className="term-output-line term-dim2" style={{ marginTop: 6 }}>
            {projects.length} project{projects.length !== 1 ? "s" : ""} found
          </p>
        </div>
      ),
    };
  },

  "cat about.txt": () => ({
    type: "output",
    content: (
      <div>
        <p className="term-output-line term-green" style={{ marginBottom: 6 }}>📄 about.txt</p>
        <p className="term-output-line" style={{ marginBottom: 4 }}>Hey! I'm <span style={{ color: "#60a5fa", fontWeight: 600 }}>Sanidhya Gupta</span> 👋</p>
        <p className="term-output-line term-dim2" style={{ marginBottom: 4 }}>A Full-Stack Developer who loves building AI-powered apps,</p>
        <p className="term-output-line term-dim2" style={{ marginBottom: 4 }}>scalable backends, and beautiful web experiences.</p>
        <p className="term-output-line term-dim2" style={{ marginBottom: 4 }}>Currently exploring distributed systems, LLM integrations,</p>
        <p className="term-output-line term-dim2">and async job processing architectures.</p>
        <p className="term-output-line" style={{ marginTop: 8 }}>
          <span style={{ color: "#a78bfa" }}>⚡ Stack:</span> React · Next.js · Node.js · TypeScript · MongoDB · PostgreSQL
        </p>
        <p className="term-output-line">
          <span style={{ color: "#34d399" }}>☕ Fuel:</span> Coffee · Lo-fi · Late nights
        </p>
      </div>
    ),
  }),

  contact: () => {
    openWindow("contact");
    return { type: "output", content: <p className="term-output-line term-green">✔ Opening Contact window...</p> };
  },

  resume: () => {
    openWindow("resume");
    return { type: "output", content: <p className="term-output-line term-green">✔ Opening Resume...</p> };
  },

  whoami: () => ({
    type: "output",
    content: <p className="term-output-line" style={{ color: "#60a5fa" }}>sanidhya</p>,
  }),

  date: () => ({
    type: "output",
    content: <p className="term-output-line">{new Date().toString()}</p>,
  }),

  neofetch: () => ({
    type: "output",
    content: (
      <pre className="term-output-line" style={{ color: "#60a5fa", fontSize: "10px", lineHeight: 1.3 }}>
        {NEOFETCH}
      </pre>
    ),
  }),

  history: null, // handled specially in the component
  clear: null,   // handled specially in the component
});

// ── Main Component ─────────────────────────────────────────────────
const Terminal = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const commands = buildCommands(openWindow, setActiveLocation);

  // History = array of { type: 'input' | 'output', content: string|JSX }
  const [history, setHistory] = useState(() => [
    { type: "input", content: "show tech-stack --all" },
    { type: "output", content: <TechStackOutput /> },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]); // past typed commands
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  // Focus input on click anywhere in terminal body
  const handleBodyClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const executeCommand = useCallback((raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    // Add to command history
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    // Special: clear
    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    // Add input to visible history
    const newEntries = [{ type: "input", content: trimmed }];

    // Special: history command
    if (trimmed === "history") {
      newEntries.push({
        type: "output",
        content: (
          <div>
            {[...cmdHistory, trimmed].map((cmd, i) => (
              <p key={i} className="term-output-line">
                <span style={{ color: "#8b949e", display: "inline-block", minWidth: 30 }}>{i + 1}</span>
                <span>{cmd}</span>
              </p>
            ))}
          </div>
        ),
      });
      setHistory((prev) => [...prev, ...newEntries]);
      return;
    }

    // Handle "open <project>"
    if (trimmed.startsWith("open ")) {
      const query = trimmed.slice(5).trim().toLowerCase();
      const projects = locations.work?.children ?? [];
      const match = projects.find((p) => p.name.toLowerCase().includes(query));

      if (match) {
        setActiveLocation(match);
        openWindow("finder");
        newEntries.push({
          type: "output",
          content: <p className="term-output-line term-green">✔ Opening "{match.name}" in Finder...</p>,
        });
      } else {
        newEntries.push({
          type: "output",
          content: <p className="term-output-line" style={{ color: "#f87171" }}>✗ Project not found: "{query}". Try \`ls\` to see available projects.</p>,
        });
      }
      setHistory((prev) => [...prev, ...newEntries]);
      return;
    }

    // Handle "echo <text>"
    if (trimmed.startsWith("echo ")) {
      const text = trimmed.slice(5);
      newEntries.push({
        type: "output",
        content: <p className="term-output-line">{text}</p>,
      });
      setHistory((prev) => [...prev, ...newEntries]);
      return;
    }

    // Normalize aliases
    const normalized = trimmed === "ls projects" ? "ls" : trimmed;

    // Lookup command
    const handler = commands[normalized];
    if (handler) {
      const result = handler();
      newEntries.push(result);
    } else {
      newEntries.push({
        type: "output",
        content: (
          <p className="term-output-line" style={{ color: "#f87171" }}>
            zsh: command not found: {trimmed.split(" ")[0]}
            <br />
            <span className="term-dim2">Type \`help\` for available commands.</span>
          </p>
        ),
      });
    }

    setHistory((prev) => [...prev, ...newEntries]);
  }, [commands, cmdHistory, openWindow, setActiveLocation]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(inputValue);
      setInputValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const cmds = cmdHistory;
      if (cmds.length === 0) return;
      const newIndex = historyIndex === -1 ? cmds.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInputValue(cmds[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const cmds = cmdHistory;
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= cmds.length) {
        setHistoryIndex(-1);
        setInputValue("");
      } else {
        setHistoryIndex(newIndex);
        setInputValue(cmds[newIndex]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <>
      <div id="window-header" className="terminal-header" style={{ background: '#1c1c1e' }}>
        <WindowControls target="terminal" />
        <span className="terminal-title">sanidhya — zsh — interactive</span>
      </div>

      <div
        className="term-body"
        ref={bodyRef}
        style={{ background: '#0d1117' }}
        onClick={handleBodyClick}
      >
        {/* Rendered history */}
        {history.map((entry, i) =>
          entry.type === "input" ? (
            <Prompt key={i} cmd={entry.content} />
          ) : (
            <div key={i} className="term-output-block">{entry.content}</div>
          )
        )}

        {/* Active input line */}
        <div className="term-prompt term-input-line">
          <span className="term-user">sanidhya@macbook</span>
          <span className="term-sep">:</span>
          <span className="term-path">~/portfolio</span>
          <span className="term-dollar"> $ </span>
          <input
            ref={inputRef}
            type="text"
            className="term-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
