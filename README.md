# 🍎 macOS Portfolio | Sanidhya Gupta

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://sanidhy-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)

A premium, interactive macOS-inspired portfolio designed to showcase my work, skills, and personality in a familiar yet unique desktop environment. Built with **React 19**, **GSAP**, and **Tailwind CSS 4**.

---

## 🖥️ Experience the OS

Step into a fully functional desktop environment right in your browser. This portfolio isn't just a website; it's a digital workspace.

### ✨ Key Features

- **🔐 Welcome Screen**: Boot into the portfolio through an animated macOS-style login screen.
- **📂 Functional Finder**: Navigate through my projects and skills using a native-feeling file explorer.
- **🚀 Interactive Dock**: Quick access to all core applications with smooth magnification effects.
- **🪟 Draggable Windows**: Multitasking at its best. Open, close, and drag windows just like on a Mac.
- **📟 Terminal Experience**: Explore my technical stack through an interactive command-line interface.
- **🌍 Safari Integration**: Read my latest articles and explore web projects without leaving the desktop.
- **📸 Photo Gallery**: A beautiful space for visual projects and memories.
- **🖼️ Image Viewer**: Open and preview images in a native Preview-style window.
- **📝 Text Editor**: View project details and descriptions in a clean TextEdit-style window.
- **📄 Resume Viewer**: Integrated HTML resume viewer for quick professional reference.
- **📇 Contact Card**: Quickly access social links and contact info.
- **🎭 Smooth Motion**: Powered by GSAP for high-performance, fluid animations that mimic macOS perfectly.

---

## 🛠️ Tech Stack

### Core
- **Framework:** [React 19](https://react.dev/) & [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management:** [Zustand 5](https://github.com/pmndrs/zustand)
- **Animations:** [GSAP 3](https://greensock.com/gsap/) (GreenSock)

### Utilities
- **Icons:** [Lucide React](https://lucide.dev/)
- **PDF Rendering:** [React PDF](https://react-pdf.org/)
- **Time/Date:** [Day.js](https://day.js.org/)
- **Tooltips:** [React Tooltip](https://react-tooltip.com/)
- **Immutability:** [Immer](https://immerjs.github.io/immer/)
- **Class Names:** [clsx](https://github.com/lukeed/clsx)

---

## 📁 Project Structure

```bash
src/
├── components/          # Core UI — Dock, Navbar, Welcome screen, Window Controls
│   ├── Dock.jsx         # macOS-style dock with magnification
│   ├── Home.jsx         # Desktop home layout
│   ├── Navbar.jsx       # Top menu bar
│   ├── Welcome.jsx      # Boot / login screen
│   └── WindowControls.jsx  # Traffic-light close/minimize/maximize buttons
├── windows/             # Individual application windows
│   ├── Finder.jsx       # File explorer for projects & skills
│   ├── Terminal.jsx     # Interactive CLI
│   ├── Safari.jsx       # Web browser for articles & links
│   ├── Photos.jsx       # Photo gallery
│   ├── Image.jsx        # Single image viewer (Preview)
│   ├── Text.jsx         # Text/detail viewer (TextEdit)
│   ├── Resume.jsx       # HTML resume viewer
│   └── Contact.jsx      # Contact card with social links
├── store/               # Zustand state management
│   ├── window.js        # Window open/close/focus/drag state
│   └── location.js      # Finder navigation state
├── constants/           # Content data — projects, skills, social links, about info
├── hoc/                 # Higher-Order Components
│   └── WindowWrapper.jsx  # Shared window chrome, dragging & focus behavior
├── utils/               # Helper functions and animation logic
│   └── thing.js         # Utility helpers
└── index.css            # Global styles and Tailwind directives
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanidhyaGupta-10/Sanidhya_Portfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Sanidhya_Portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 👤 About Me

Hey, I'm **Sanidhya** 👋 — a developer who enjoys building clean, fast, and user-friendly applications that feel great to use. I specialize in the JavaScript ecosystem, focusing on turning complex ideas into smooth, real-world products.

- **GitHub:** [@SanidhyaGupta-10](https://github.com/SanidhyaGupta-10)
- **Instagram:** [@sanidhyagupta10](https://www.instagram.com/sanidhyagupta10/)
- **Portfolio:** [sanidhy-portfolio.vercel.app](https://sanidhy-portfolio.vercel.app/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/SanidhyaGupta-10">Sanidhya Gupta</a>
</p>
