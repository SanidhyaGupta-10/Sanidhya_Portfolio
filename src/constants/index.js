const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Animations",
        items: ["GSAP", "React-Three-Fiber(R3F)", "Motion"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Bun"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Vercel", "Docker"],
    },
    {
        category: "AI",
        items: ["OpenAI", "LLMs"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/SanidhyaGupta-10",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "/",
    },
    {
        id: 3,
        text: "Instagram",
        icon: "/icons/instagram.svg",
        bg: "#ff866b",
        link: "https://www.instagram.com/sanidhyagupta10/",
    },
    // {
    //     id: 4,
    //     text: "LinkedIn",
    //     icon: "/icons/linkedin.svg",
    //     bg: "#05b6f6",
    //     link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
    // },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/blog1.png",
    },
    {
        id: 2,
        img: "/images/blog2.png",
    },
    {
        id: 3,
        img: "/images/blog3.png",
    },
    // {
    //     id: 4,
    //     img: "/images/gal4.png",
    // },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Animated Macbook Landing Page",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Macbook-Landing.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-10",
                    description: [
                        "The Macbook-Landing Page website is a sleek and modern platform designed with the help of Three.JS, R3F and GSAP.",
                        "Instead of a simple landing-page, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
                        "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
                        "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
                    ],
                },
                {
                    id: 2,
                    name: "macbook-landing.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://macbook-landing-page-eta.vercel.app/",
                    position: "top-20 right-20",
                },
                {
                    id: 4,
                    name: "apple.png",
                    icon: "/images/apple.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/apple.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
        // ▶ Project 2
        {
            id: 6,
            name: "SyntaxPrime Roadmap + Notes",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-50 left-5",
            windowPosition: "top-[22vh] left-7",
            children: [
                {
                    id: 1,
                    name: "SyntaxPrime Roadmap + Notes Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "SyntaxPrime Roadmap + Notes is a smart tool that helps you perfect your roadmap with professional notes.",
                        "Instead of guessing what to learn, you get structured roadmap and professional notes.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing at job.",
                        "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
                    ],
                },
                {
                    id: 2,
                    name: "syntaxprime.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://syntax-prime.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "SyntaxPrime",
                    icon: "/images/project-2.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },
        // Project 3
        {
            id: 8,
            name: "iNSpix - HD Photo Gallery",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-95",
            windowPosition: "top-[40vh] left-7",
            children: [
                {
                    id: 1,
                    name: "iNSpix - HD Photo Gallery Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                      "iNSpix - HD Free Photos, Videos and GIFs",
                    ],

                },
                {
                    id: 2,
                    name: "iNSpix.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://inspixx.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "iNSpix.png",
                    icon: "/images/project-4.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-4.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
        // Project 4
        {
            id: 9,
            name: "Nexa Cart - PERN Stack Project",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-50",
            windowPosition: "top-[5vh] left-[30vh]",
            children: [
                {
                    id: 1,
                    name: "Nexa Cart - PERN Stack Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                      "🛒 Full-Stack E-Commerce: End-to-end shopping functionality.",
                      "⚡ Next.js Power: Server-Side Rendering (SSR) and API routes for optimal SEO and performance.",
                      "🧬 Type-Safe ORM: Database management via Drizzle ORM for end-to-end type safety.",
                      "📦 Relational Modeling: Robust PostgreSQL schema design.",
                      "🎨 Modern UI: Styled with Tailwind CSS for a responsive, sleek design.",
                      "🟦 TypeScript Native: Written entirely in TypeScript for better maintainability.",
                      "🚀 Production-Ready: Architected with scalability and deployment in mind.",
                    ],

                },
                {
                    id: 2,
                    name: "nexa-cart-pern.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://nexa-cart-pern.vercel.app",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "Nexa Cart - PERN Stack Project.png",
                    icon: "/images/project-5.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-5.png",
                },
                {
                    id: 5,
                    name: "Nexa Cart - PERN Stack Project.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://nexa-cart-pern.vercel.app",
                    position: "top-60 right-20",
                },
            ],
        },
        // Project 5
        {
            id: 10,
            name: "NovaTalk - AI Voice Chat",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-50 left-50",
            windowPosition: "top-[22vh] left-[30vh]",
            children: [
                {
                    id: 1,
                    name: "NovaTalk - AI Voice Chat.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "🎙️ Interactive AI Voice Conversations: Talk to your favorite books using advanced AI.",
                        "⚡ Smart Processing: Analyze and discuss documents with minimal latency.",
                        "🧬 PDF to Voice: Seamlessly convert PDF content into natural sounding AI voices.",
                        "📦 Library Management: Organize and access all your books in one place.",
                        "🎨 Modern UI: Simple and clean interface built with Next.js and Tailwind CSS.",
                        "🟦 Type-Safe Codebase: Built with TypeScript for maximum stability and speed.",
                        "🚀 Ready for Learning: Designed for active learners to consume content by talking.",
                    ],

                },
                {
                    id: 2,
                    name: "nova-talk-ai-voice-agent.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://nova-talk-ai-voice-agent.vercel.app",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "NovaTalk - AI Voice Chat.png",
                    icon: "/images/project-6.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-6.png",
                },
                {
                    id: 5,
                    name: "NovaTalk - AI Voice Chat.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://nova-talk-ai-voice-agent.vercel.app",
                    position: "top-60 right-20",
                },
            ],
        },
        // Project 6
        {
            id: 11,
            name: "Zest - AI Task Processing",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-50 left-95",
            windowPosition: "top-[40vh] left-[30vh]",
            children: [
                {
                    id: 1,
                    name: "Zest.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Zest is a high-performance, AI-powered application designed for lightning-fast task processing.",
                        "Built with a robust decentralized architecture, Zest handles intensive AI operations asynchronously to ensure a seamless, non-blocking user experience.",
                    ],

                },
                {
                    id: 2,
                    name: "zest-ai.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://zest-delta.vercel.app",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "Zest.png",
                    icon: "/images/project-7.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-7.png",
                },
                {
                    id: 5,
                    name: "Zest.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/SanidhyaGupta-10",
                    position: "top-60 right-20",
                },
            ],
        },
        // Project 7
        {
            id: 12,
            name: "AIhire - AI-Powered Interview Preparation Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-90 left-5",
            windowPosition: "top-[5vh] left-[55vh]",
            children: [
                {
                    id: 1,
                    name: "AIhire.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "🚀 AIhire is a sophisticated, AI-powered platform designed to revolutionize the recruitment process.",
                        "By leveraging Large Language Models (LLMs), the platform analyzes resumes, generates tailored interview questions, and provides comprehensive performance reports.",
                        "🧠 Resume Parsing: Automatically extracts skills, experience, and projects from uploaded PDF resumes using pdf-parse.",
                        "🧠 Dynamic Question Generation: Generates context-aware interview questions specific to the candidate's background using OpenAI's GPT models.",
                        "🧠 Automated Scoring: Evaluates responses and provides a detailed breakdown of strengths and areas for improvement.",
                        "⚡ Tech Stack: Next.js, React, Tailwind CSS, Express, MongoDB, OpenAI, and Bun.",
                    ],
                },
                {
                    id: 2,
                    name: "interview-report-ai.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://interview-report-ai.vercel.app",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "AIhire.png",
                    icon: "/images/project-8.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-8.png",
                },
                {
                    id: 5,
                    name: "AIhire.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/SanidhyaGupta-10",
                    position: "top-60 right-20",
                },
            ],
        },

    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/sanidhya.png",
        },
        {
            id: 2,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/sanidhya.png",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/sanidhya.png",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/sanidhya.png",
            description: [
                "Hey, I’m Sanidhya 👋 — a developer who enjoys building clean, fast, and user-friendly applications that feel great to use.",
                "I work mainly with JavaScript, React, Next.js, and React Native 🚀, focusing on turning ideas into smooth, real-world products.",
                "I care a lot about clean UI ✨, thoughtful UX 🧠, and writing code that’s easy to understand, maintain, and scale.",
                "When I’m not coding, you’ll usually find me refining layouts late at night 🌙, exploring new tools, or improving things just for that extra bit of polish 😄",
                "Connect with me on GitHub 🧑‍💻: https://github.com/SanidhyaGupta-10 and Instagram 📸: https://www.instagram.com/sanidhyagupta10/"
            ],

        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            href: "/files/SanidhyaResume.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };