import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BootScreen = ({ onComplete }) => {
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const barTrackRef = useRef(null);
    const barFillRef = useRef(null);
    const nameRef = useRef(null);

    const [phase, setPhase] = useState("boot"); // boot | name | done

    useGSAP(() => {
        const tl = gsap.timeline();

        // ── Phase 1: Apple logo fade in ──
        tl.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
        );

        // ── Phase 2: Loading bar appears ──
        tl.fromTo(
            barTrackRef.current,
            { opacity: 0, scaleX: 0.8 },
            { opacity: 1, scaleX: 1, duration: 0.4, ease: "power2.out" },
            "-=0.2"
        );

        // ── Phase 3: Loading bar fills ──
        tl.fromTo(
            barFillRef.current,
            { scaleX: 0 },
            {
                scaleX: 1,
                duration: 2.2,
                ease: "power1.inOut",
                transformOrigin: "left center",
            }
        );

        // ── Phase 4: Fade out logo & bar ──
        tl.to([logoRef.current, barTrackRef.current], {
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => setPhase("name"),
        });

        // ── Phase 5: Show name ──
        tl.fromTo(
            nameRef.current,
            { opacity: 0, y: 20, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.2)",
            }
        );

        // ── Phase 6: Hold name briefly ──
        tl.to(nameRef.current, { duration: 0.8 });

        // ── Phase 7: Fade out everything ──
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
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
            {/* Apple Logo */}
            <div ref={logoRef} className="boot-logo" style={{ opacity: 0 }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 814 1000"
                    width="80"
                    height="98"
                    fill="white"
                >
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81-105.3-207.7-105.3-329.1C0 441.6 63.5 281.7 181 181c82.2-70.3 170.7-105.6 252.3-105.6 67.7 0 124 44.5 166.4 44.5 40.5 0 103.7-47.1 180.2-47.1 29.1 0 133.8 2.6 203 99.1zm-155.4-91.7c31.3-37 52.9-88.5 52.9-140 0-7.1-.6-14.3-1.9-20.1-50.4 1.9-110.2 33.5-146.3 75.2-26 29.7-53.5 81-53.5 133.4 0 7.8.6 15.6 1.3 18.2 2.6.6 6.4 1.3 10.2 1.3 45.2.1 101.6-30.1 137.3-68z" />
                </svg>
            </div>

            {/* Loading Bar */}
            <div ref={barTrackRef} className="boot-bar-track" style={{ opacity: 0 }}>
                <div ref={barFillRef} className="boot-bar-fill" />
            </div>

            {/* Name reveal */}
            <h1 ref={nameRef} className="boot-name" style={{ opacity: 0 }}>
                Sanidhya-Gupta
            </h1>
        </div>
    );
};

export default BootScreen;
