import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * Portfolio animation config
 */
const FONT_WEIGHTS = {
    title: { min: 400, max: 900, default: 400 },
};

/**
 * Split text into spans
 */
const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={`span ${className}`}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

/**
 * Hover animation
 */
const setupTextHover = (container) => {
    if (!container) return;

    const letters = container.querySelectorAll(".span");
    const { min, max, default: base } = FONT_WEIGHTS.title;

    const animateLetter = (letter, weight, duration = 0.25) =>
        gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () =>
        letters.forEach((letter) =>
            animateLetter(letter, base, 0.3)
        );

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        setupTextHover(titleRef.current);
        setupTextHover(subtitleRef.current);
    }, []);

    return (
        <section id="welcome">
            {/* 🔥 FIX: same VARIABLE FONT as portfolio */}
            <p ref={titleRef} className="font-georama">
                {renderText(
                    "Hey, I'm Sanidhya! Welcome to my",
                    "text-3xl",
                    400
                )}
            </p>

            <h1 ref={subtitleRef} className="mt-7 font-georama italic">
                {renderText(
                    "portfolio",
                    "text-9xl",
                    400
                )}
            </h1>

            <div className="small-screen">
                <p>This Portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
};

export default Welcome;
