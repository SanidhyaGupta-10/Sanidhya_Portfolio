 import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// ── Floating particle system ──
const PARTICLE_COUNT = 35;

const Particle = ({ delay }) => {
    const ref = useRef(null);

    useGSAP(() => {
        const el = ref.current;
        if (!el) return;

        const startX = Math.random() * 100;
        const duration = 3 + Math.random() * 4;
        const size = 1 + Math.random() * 3;

        gsap.set(el, {
            x: `${startX}vw`,
            y: "110vh",
            width: size,
            height: size,
            opacity: 0,
        });

        gsap.to(el, {
            y: "-10vh",
            x: `+=${(Math.random() - 0.5) * 200}`,
            opacity: 0.15 + Math.random() * 0.5,
            duration,
            delay: delay,
            ease: "none",
            repeat: -1,
            repeatDelay: Math.random() * 2,
            onRepeat: () => {
                gsap.set(el, { x: `${Math.random() * 100}vw`, y: "110vh" });
            },
        });
    }, []);

    return (
        <div
            ref={ref}
            className="boot-particle"
        />
    );
};

const BootScreen = ({ onComplete }) => {
    const containerRef = useRef(null);
    const crestRef = useRef(null);
    const glowRef = useRef(null);
    const ringRef = useRef(null);
    const barTrackRef = useRef(null);
    const barFillRef = useRef(null);
    const nameRef = useRef(null);
    const subtitleRef = useRef(null);
    const lineLeftRef = useRef(null);
    const lineRightRef = useRef(null);

    const [phase, setPhase] = useState("boot");

    useGSAP(() => {
        const tl = gsap.timeline();

        // ── Phase 1: Glow pulse first, then crest reveals ──
        tl.fromTo(
            glowRef.current,
            { opacity: 0, scale: 0.3 },
            { opacity: 0.6, scale: 1.2, duration: 1, ease: "power2.out" }
        );

        tl.fromTo(
            crestRef.current,
            { opacity: 0, scale: 0.5, filter: "brightness(0)" },
            {
                opacity: 1,
                scale: 1,
                filter: "brightness(1)",
                duration: 1.2,
                ease: "back.out(1.3)",
            },
            "-=0.7"
        );

        // ── Phase 2: Ring spins in ──
        tl.fromTo(
            ringRef.current,
            { opacity: 0, scale: 0.6, rotation: -180 },
            {
                opacity: 0.4,
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "power2.out",
            },
            "-=0.8"
        );

        // ── Phase 3: Glow pulses ──
        tl.to(glowRef.current, {
            scale: 1.4,
            opacity: 0.8,
            duration: 0.5,
            ease: "power2.in",
            yoyo: true,
            repeat: 1,
        });

        // ── Phase 4: Loading bar ──
        tl.fromTo(
            barTrackRef.current,
            { opacity: 0, scaleX: 0.5 },
            { opacity: 1, scaleX: 1, duration: 0.4, ease: "power2.out" },
            "-=0.3"
        );

        tl.fromTo(
            barFillRef.current,
            { scaleX: 0 },
            {
                scaleX: 1,
                duration: 1.8,
                ease: "power1.inOut",
                transformOrigin: "left center",
            }
        );

        // ── Phase 5: Everything fades, name appears ──
        tl.to(
            [crestRef.current, glowRef.current, ringRef.current, barTrackRef.current],
            {
                opacity: 0,
                scale: 0.9,
                duration: 0.6,
                ease: "power2.in",
                stagger: 0.05,
                onComplete: () => setPhase("name"),
            }
        );

        // ── Phase 6: Name reveal with decorative lines ──
        tl.fromTo(
            nameRef.current,
            { opacity: 0, y: 30, letterSpacing: "20px" },
            {
                opacity: 1,
                y: 0,
                letterSpacing: "8px",
                duration: 1,
                ease: "power3.out",
            }
        );

        tl.fromTo(
            [lineLeftRef.current, lineRightRef.current],
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 0.4, duration: 0.6, ease: "power2.out", stagger: 0.1 },
            "-=0.6"
        );

        tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 10 },
            { opacity: 0.5, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.3"
        );

        // ── Phase 7: Hold ──
        tl.to(nameRef.current, { duration: 1 });

        // ── Phase 8: Final fade out ──
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
            onComplete: () => {
                setPhase("done");
                onComplete?.();
            },
        });
    }, []);

    if (phase === "done") return null;

    return (
        <div ref={containerRef} id="boot-screen">
            {/* Floating particles */}
            <div className="boot-particles">
                {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
                    <Particle key={i} delay={i * 0.15} />
                ))}
            </div>

            {/* Ambient glow */}
            <div ref={glowRef} className="boot-glow" style={{ opacity: 0 }} />

            {/* Rotating ring */}
            <div ref={ringRef} className="boot-ring" style={{ opacity: 0 }} />

            {/* SG Crest logo */}
            <img
                ref={crestRef}
                src="/images/sg-crest.jpg"
                alt="SG"
                className="boot-crest"
                style={{ opacity: 0 }}
                draggable={false}
            />

            {/* Loading Bar */}
            <div ref={barTrackRef} className="boot-bar-track" style={{ opacity: 0 }}>
                <div ref={barFillRef} className="boot-bar-fill" />
            </div>

            {/* Name reveal */}
            <div className="boot-name-container">
                <div ref={lineLeftRef} className="boot-line boot-line-left" style={{ opacity: 0 }} />
                <h1 ref={nameRef} className="boot-name" style={{ opacity: 0 }}>
                    SANIDHYA GUPTA
                </h1>
                <div ref={lineRightRef} className="boot-line boot-line-right" style={{ opacity: 0 }} />
            </div>
            <p ref={subtitleRef} className="boot-subtitle" style={{ opacity: 0 }}>
                Full Stack Developer
            </p>
        </div>
    );
};

export default BootScreen;
