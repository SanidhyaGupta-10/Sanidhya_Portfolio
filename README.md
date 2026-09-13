<div align="center">

# 🍎 macOS Portfolio

### A fully interactive macOS desktop — running in your browser.

<br/>

[![Live Demo](https://img.shields.io/badge/▶_LIVE_DEMO-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sanidhy-portfolio.vercel.app/)
&nbsp;&nbsp;
[![Stars](https://img.shields.io/github/stars/SanidhyaGupta-10/Sanidhya_Portfolio?style=for-the-badge&logo=github&color=f5c842)](https://github.com/SanidhyaGupta-10/Sanidhya_Portfolio)
&nbsp;&nbsp;
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<br/>

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Zustand 5](https://img.shields.io/badge/Zustand-5-764ABC?style=flat-square&logo=redux&logoColor=white)](https://github.com/pmndrs/zustand)

<br/>

> _"What if your portfolio was an operating system?"_

<br/>

</div>

---

## 🎬 What Is This?

This isn't a typical developer portfolio. It's a **pixel-perfect macOS desktop environment** rebuilt from scratch in the browser — complete with draggable windows, a functional dock, a file explorer, a terminal, and more. Every interaction feels native, every animation is buttery smooth, and every detail is crafted to impress.

**Boot it up. Explore the desktop. Open apps. Discover who I am.**

---

## ✨ Features at a Glance

| | Feature | Description |
|---|---|---|
| 🔐 | **Login Screen** | Animated macOS-style boot sequence with password authentication |
| 🪟 | **Window Management** | Drag, resize, focus, minimize, maximize — real multitasking |
| 🚀 | **Dock** | Smooth magnification on hover, quick-launch for all apps |
| 📂 | **Finder** | Navigate projects & skills in a native file explorer |
| 📟 | **Terminal** | Interactive CLI — type commands to explore my tech stack |
| 🌍 | **Safari** | Browse articles and web projects without leaving the OS |
| 📸 | **Photos** | Gallery view for visual projects and creative work |
| 🖼️ | **Preview** | Native image viewer for fullscreen media |
| 📝 | **TextEdit** | Clean document viewer for project details |
| 📄 | **Resume** | Integrated HTML resume — always accessible |
| 📇 | **Contacts** | One-click social links and contact info |
| 🎭 | **GSAP Animations** | 60fps fluid transitions that mirror real macOS behavior |

---

## 🏗️ Architecture

```
+-----------------------------------------------------+
|                    React 19 + Vite 7                |
+-----------------------------------------------------+
|                                                     |
|   +----------+  +----------+  +------------------+ |
|   | Welcome  |> | Desktop  |> | App Windows      | |
|   | Screen   |  | (Home)   |  | (Finder, Term,   | |
|   |          |  |          |  |  Safari, etc.)   | |
|   +----------+  +----------+  +------------------+ |
|        |              |               |             |
|        v              v               v             |
|   +---------------------------------------------+   |
|   |          WindowWrapper (HOC)                |   |
|   |   Dragging - Focus - Chrome - State Mgmt    |   |
|   +---------------------------------------------+   |
|        |              |               |             |
|        v              v               v             |
|   +----------+  +----------+  +--------------+      |
|   | Zustand  |  |   GSAP   |  | Tailwind 4   |     |
|   |  Stores  |  |  Motions |  |   Styling    |     |
|   +----------+  +----------+  +--------------+      |
|                                                     |
+-----------------------------------------------------+
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="150"><strong>Category</strong></td>
<td><strong>Technologies</strong></td>
</tr>
<tr>
<td align="center">⚛️ Framework</td>
<td><a href="https://react.dev/">React 19</a> — Latest with concurrent features</td>
</tr>
<tr>
<td align="center">⚡ Build Tool</td>
<td><a href="https://vitejs.dev/">Vite 7</a> — Blazing fast HMR & builds</td>
</tr>
<tr>
<td align="center">🎨 Styling</td>
<td><a href="https://tailwindcss.com/">Tailwind CSS 4</a> — Utility-first with v4 engine</td>
</tr>
<tr>
<td align="center">🎬 Animation</td>
<td><a href="https://greensock.com/gsap/">GSAP 3</a> — Professional-grade motion</td>
</tr>
<tr>
<td align="center">🧠 State</td>
<td><a href="https://github.com/pmndrs/zustand">Zustand 5</a> — Minimal, scalable state management</td>
</tr>
<tr>
<td align="center">🔧 Utilities</td>
<td><a href="https://lucide.dev/">Lucide</a> · <a href="https://day.js.org/">Day.js</a> · <a href="https://react-pdf.org/">React PDF</a> · <a href="https://react-tooltip.com/">React Tooltip</a> · <a href="https://immerjs.github.io/immer/">Immer</a> · <a href="https://github.com/lukeed/clsx">clsx</a></td>
</tr>
</table>

---

## 📁 Project Structure

```bash
src/
├── components/              # Core UI layer
│   ├── Dock.jsx             #   ↳ macOS dock with magnification physics
│   ├── Home.jsx             #   ↳ Desktop layout & wallpaper
│   ├── Navbar.jsx           #   ↳ Top menu bar (Apple menu, clock, controls)
│   ├── Welcome.jsx          #   ↳ Boot sequence & login screen
│   └── WindowControls.jsx   #   ↳ Traffic-light buttons (🔴🟡🟢)
│
├── windows/                 # Application windows
│   ├── Finder.jsx           #   ↳ File explorer — projects & skills
│   ├── Terminal.jsx          #   ↳ Interactive command-line interface
│   ├── Safari.jsx           #   ↳ Web browser — articles & links
│   ├── Photos.jsx           #   ↳ Photo gallery grid
│   ├── Image.jsx            #   ↳ Single image viewer (Preview)
│   ├── Text.jsx             #   ↳ Document viewer (TextEdit)
│   ├── Resume.jsx           #   ↳ HTML resume renderer
│   └── Contact.jsx          #   ↳ Contact card with social links
│
├── store/                   # State management (Zustand)
│   ├── window.js            #   ↳ Window lifecycle — open/close/focus/drag
│   └── location.js          #   ↳ Finder navigation & breadcrumbs
│
├── hoc/                     # Higher-Order Components
│   └── WindowWrapper.jsx    #   ↳ Shared window chrome & drag behavior
│
├── constants/               # Static content data
│                            #   ↳ Projects, skills, social links, bio
├── utils/                   # Helpers & animation utilities
│
└── index.css                # Global styles & Tailwind directives
```

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/SanidhyaGupta-10/Sanidhya_Portfolio.git

# 2. Enter the project
cd Sanidhya_Portfolio

# 3. Install dependencies
npm install

# 4. Launch the dev server
npm run dev
```

> The portfolio will be live at **`http://localhost:5173`** 🎉

#### Production Build

```bash
npm run build     # Optimized build → dist/
npm run preview   # Preview the production build locally
```

---

## 🧩 Key Design Decisions

| Decision | Why |
|---|---|
| **GSAP over CSS animations** | Frame-accurate control, timeline sequencing, and spring physics for native-feeling motion |
| **Zustand over Redux/Context** | Minimal boilerplate, excellent DX, and no provider hell for window state |
| **Tailwind CSS v4** | Lightning-fast new engine, CSS-first config, and zero-runtime overhead |
| **HOC pattern for windows** | Single source of truth for drag, focus, and chrome — DRY across 8+ window types |
| **Vite 7** | Sub-second HMR, optimized dependency pre-bundling, and native ESM support |

---

## 👤 About Me

<div align="center">

**Sanidhya Gupta** — Developer who builds things that feel great to use.

Specializing in the JavaScript ecosystem, turning complex ideas into smooth, real-world products.

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-SanidhyaGupta--10-181717?style=for-the-badge&logo=github)](https://github.com/SanidhyaGupta-10)
[![Instagram](https://img.shields.io/badge/Instagram-sanidhyagupta10-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/sanidhyagupta10/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sanidhy-portfolio.vercel.app/)

</div>

---

## 📄 License

This project is open source under the **[MIT License](LICENSE)**.

---

<div align="center">

<br/>

**If you like this project, consider giving it a ⭐**

<br/>

Built with ❤️ and way too much attention to detail by [Sanidhya Gupta](https://github.com/SanidhyaGupta-10)

<sub>© 2025 Sanidhya Gupta. All rights reserved.</sub>

</div>
