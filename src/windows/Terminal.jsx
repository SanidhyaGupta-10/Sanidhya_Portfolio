import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { techStack } from "#constants/index.js";
import WindowControls from "#components/WindowControls.jsx";

// Devicon class map — key must match item string exactly
const ICON_MAP = {
  // Languages
  "C":                    "devicon-c-plain",
  "Go":                   "devicon-go-plain",
  "SQL":                  "devicon-azuresqldatabase-plain",
  // Frontend
  "React.js":             "devicon-react-original",
  "Next.js":              "devicon-nextjs-plain",
  "TypeScript":           "devicon-typescript-plain",
  // Animations (no devicon — use emoji fallback via data)
  "GSAP":                 null,
  "React-Three-Fiber(R3F)": "devicon-threejs-original",
  "Motion":               null,
  // Mobile
  "React Native":         "devicon-react-original",
  "Expo":                 null,
  // Styling
  "Tailwind CSS":         "devicon-tailwindcss-plain",
  "CSS":                  "devicon-css3-plain",
  // Backend
  "Node.js":              "devicon-nodejs-plain",
  "Express":              "devicon-express-original",
  "Bun":                  null,
  // Database
  "MongoDB":              "devicon-mongodb-plain",
  "PostgreSQL":           "devicon-postgresql-plain",
  // Dev Tools
  "Git":                  "devicon-git-plain",
  "GitHub":               "devicon-github-original",
  "Vercel":               null,
  "Docker":               "devicon-docker-plain",
  // AI
  "OpenAI":               null,
  "LLMs":                 null,
};

// Emoji fallbacks for items without a devicon
const EMOJI_MAP = {
  "GSAP":                 "✦",
  "Motion":               "〜",
  "Expo":                 "📱",
  "Bun":                  "🥟",
  "Vercel":               "▲",
  "OpenAI":               "◎",
  "LLMs":                 "🤖",
  "React-Three-Fiber(R3F)": "🔷",
};

const CATEGORY_COLORS = [
  { text: "#60a5fa", bg: "rgba(96,165,250,0.12)",  border: "rgba(96,165,250,0.25)",  glow: "rgba(96,165,250,0.35)"  },
  { text: "#a78bfa", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.25)", glow: "rgba(167,139,250,0.35)" },
  { text: "#34d399", bg: "rgba(52,211,153,0.12)",  border: "rgba(52,211,153,0.25)",  glow: "rgba(52,211,153,0.35)"  },
  { text: "#f9a8d4", bg: "rgba(249,168,212,0.12)", border: "rgba(249,168,212,0.25)", glow: "rgba(249,168,212,0.35)" },
  { text: "#fbbf24", bg: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.25)",  glow: "rgba(251,191,36,0.35)"  },
  { text: "#f87171", bg: "rgba(248,113,113,0.12)", border: "rgba(248,113,113,0.25)", glow: "rgba(248,113,113,0.35)" },
  { text: "#38bdf8", bg: "rgba(56,189,248,0.12)",  border: "rgba(56,189,248,0.25)",  glow: "rgba(56,189,248,0.35)"  },
  { text: "#4ade80", bg: "rgba(74,222,128,0.12)",  border: "rgba(74,222,128,0.25)",  glow: "rgba(74,222,128,0.35)"  },
];

const Terminal = () => {
  const totalItems = techStack.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <>
      <div id="window-header" className="terminal-header">
        <WindowControls target="terminal" />
        <span className="terminal-title">sanidhya — tech-stack — zsh</span>
      </div>

      <div className="term-body">
        {/* Prompt line */}
        <p className="term-prompt">
          <span className="term-user">sanidhya@macbook</span>
          <span className="term-sep">:</span>
          <span className="term-path">~/portfolio</span>
          <span className="term-dollar"> $ </span>
          <span className="term-cmd">show tech-stack --all</span>
        </p>

        {/* Output header */}
        <p className="term-output-line term-dim">
          ╔══════════════════════════════════════════════════╗
        </p>
        <p className="term-output-line term-dim">
          ║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SANIDHYA GUPTA · TECH STACK v2.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║
        </p>
        <p className="term-output-line term-dim">
          ╚══════════════════════════════════════════════════╝
        </p>

        {/* Stack rows */}
        <div className="term-stack-list">
          {techStack.map(({ category, items }, i) => {
            const color = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
            return (
              <div key={category} className="term-stack-row">
                <span className="term-category" style={{ color: color.text }}>
                  ▶ {category.padEnd(12)}
                </span>
                <div className="term-badges">
                  {items.map((item) => {
                    const iconClass = ICON_MAP[item];
                    const emoji = EMOJI_MAP[item];
                    return (
                      <span
                        key={item}
                        className="term-badge"
                        style={{
                          color: color.text,
                          background: color.bg,
                          border: `1px solid ${color.border}`,
                          "--glow": color.glow,
                        }}
                      >
                        {iconClass ? (
                          <i className={`${iconClass} colored term-badge-icon`} />
                        ) : emoji ? (
                          <span className="term-badge-emoji">{emoji}</span>
                        ) : null}
                        <span className="term-badge-name">{item}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <hr className="term-separator" />
        <p className="term-output-line term-green term-mt">
          ✔ {techStack.length} categories · {totalItems} technologies loaded
        </p>
        <p className="term-output-line term-dim2">
          ⚡ render time: 4ms · exit code: 0
        </p>

        {/* Blinking cursor */}
        <p className="term-prompt term-cursor-line">
          <span className="term-user">sanidhya@macbook</span>
          <span className="term-sep">:</span>
          <span className="term-path">~/portfolio</span>
          <span className="term-dollar"> $ </span>
          <span className="term-cursor" />
        </p>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;


