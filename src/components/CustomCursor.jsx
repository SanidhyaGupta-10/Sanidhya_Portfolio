import { useEffect, useRef } from "react";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let isPointer = false;
        let rafId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

            const el = document.elementFromPoint(mouseX, mouseY);
            const hovering = el?.closest(
                "a, button, [role='button'], input, textarea, select, label, [tabindex], .cursor-pointer, .dock-icon, .maximize, .minimize, .close, li"
            );

            if (hovering && !isPointer) {
                isPointer = true;
                dot.classList.add("cursor-dot--pointer");
                ring.classList.add("cursor-ring--pointer");
            } else if (!hovering && isPointer) {
                isPointer = false;
                dot.classList.remove("cursor-dot--pointer");
                ring.classList.remove("cursor-ring--pointer");
            }
        };

        const onMouseLeave = () => {
            dot.style.opacity = "0";
            ring.style.opacity = "0";
        };

        const onMouseEnter = () => {
            dot.style.opacity = "1";
            ring.style.opacity = "1";
        };

        const onMouseDown = () => {
            dot.classList.add("cursor-dot--click");
            ring.classList.add("cursor-ring--click");
        };

        const onMouseUp = () => {
            dot.classList.remove("cursor-dot--click");
            ring.classList.remove("cursor-ring--click");
        };

        const lerp = (a, b, t) => a + (b - a) * t;
        const animate = () => {
            ringX = lerp(ringX, mouseX, 0.12);
            ringY = lerp(ringY, mouseY, 0.12);
            ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
            rafId = requestAnimationFrame(animate);
        };

        animate();

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, []);

    return (
        <>
            {/* Inner precise dot */}
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
            {/* Outer trailing ring */}
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
        </>
    );
};

export default CustomCursor;
