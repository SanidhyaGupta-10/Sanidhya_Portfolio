import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Copy, PanelLeft, Search, ShieldHalf, Plus, Share } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    tag: "AI Systems",
    tagColor: "#a78bfa",
    tagBg: "rgba(167,139,250,0.13)",
    title: "Integrating LLMs into Production Backends",
    desc: "How I wired GPT-4o into an async job queue with TypeScript — lessons on streaming, token budgets, and graceful fallbacks.",
    date: "Jul 10, 2025",
    read: "8 min read",
    dot: "#a78bfa",
  },
  {
    tag: "Backend",
    tagColor: "#34d399",
    tagBg: "rgba(52,211,153,0.13)",
    title: "Distributed Job Processing with BullMQ & Redis",
    desc: "Why I moved from in-process async to a proper queue — and how it changed everything about reliability and horizontal scale.",
    date: "Jun 28, 2025",
    read: "6 min read",
    dot: "#34d399",
  },
  {
    tag: "TypeScript",
    tagColor: "#60a5fa",
    tagBg: "rgba(96,165,250,0.13)",
    title: "Advanced TypeScript Patterns I Actually Use",
    desc: "Branded types, infer magic, conditional types and discriminated unions — real patterns from real codebases, not toy examples.",
    date: "Jun 14, 2025",
    read: "10 min read",
    dot: "#60a5fa",
  },
  {
    tag: "Next.js",
    tagColor: "#f9a8d4",
    tagBg: "rgba(249,168,212,0.13)",
    title: "Server Components vs Client Components — The Real Trade-offs",
    desc: "A practical breakdown after shipping three Next.js 14 apps. When to reach for 'use client' and when it's a mistake.",
    date: "May 30, 2025",
    read: "7 min read",
    dot: "#f9a8d4",
  },
  {
    tag: "Architecture",
    tagColor: "#fbbf24",
    tagBg: "rgba(251,191,36,0.13)",
    title: "Designing for Failure: Idempotency & Retry Logic",
    desc: "Networks lie, services crash, users double-click. Here's how I make distributed writes safe to repeat without side-effects.",
    date: "May 12, 2025",
    read: "9 min read",
    dot: "#fbbf24",
  },
  {
    tag: "Animations",
    tagColor: "#f87171",
    tagBg: "rgba(248,113,113,0.13)",
    title: "GSAP vs Framer Motion — When to Use Which",
    desc: "Both are great. But they solve different problems. My decision matrix after using both on production projects.",
    date: "Apr 25, 2025",
    read: "5 min read",
    dot: "#f87171",
  },
];

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-6">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              className="flex-1"
              type="text"
              defaultValue="sanidhya.dev/blog"
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      {/* Blog Content */}
      <div className="dev-blog">
        {/* Hero Banner */}
        <div className="blog-hero">
          <div className="blog-hero-left">
            <div className="blog-avatar">SG</div>
            <div>
              <h1 className="blog-name">Sanidhya Gupta</h1>
              <p className="blog-role">Full-Stack Developer · AI Systems Enthusiast</p>
              <p className="blog-tagline">
                Building AI-powered apps, backend systems &amp; scalable web
                experiences with{" "}
                <span className="ts-pill">TypeScript</span>
              </p>
            </div>
          </div>
          <div className="blog-stats">
            <div className="stat-item">
              <span className="stat-num">24+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">6+</span>
              <span className="stat-label">Posts</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">∞</span>
              <span className="stat-label">Coffee</span>
            </div>
          </div>
        </div>

        {/* Exploring Chips */}
        <div className="blog-exploring">
          <span className="exploring-label">Currently exploring →</span>
          {[
            "Distributed Architecture",
            "Async Job Processing",
            "LLM Integrations",
            "Modern Backend",
          ].map((t) => (
            <span key={t} className="explore-chip">
              {t}
            </span>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="blog-posts-grid">
          {posts.map((post, i) => (
            <article key={i} className="blog-card">
              <div className="card-top">
                <span
                  className="card-tag"
                  style={{ color: post.tagColor, background: post.tagBg }}
                >
                  {post.tag}
                </span>
                <span className="card-meta">
                  {post.date} · {post.read}
                </span>
              </div>
              <h2 className="card-title">{post.title}</h2>
              <p className="card-desc">{post.desc}</p>
              <div className="card-footer">
                <span
                  className="card-dot"
                  style={{ background: post.dot }}
                />
                <span className="read-more">Read article →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
