import useWindowStore from "#store/window.js";
import { useLayoutEffect, useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const ref = useRef(null);
        const draggableRef = useRef(null);

        // Safe access to window data
        const win = windows[windowKey];

        if (!win) {
            if (import.meta.env.DEV) {
                console.error(
                    `WindowWrapper Error: "${windowKey}" is not defined in WINDOW_CONFIG`
                );
            }
            return null; // prevent render crash
        }

        const { isOpen, isMinimized, isMaximized, zIndex } = win;

        // Draggable setup
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const [instance] = Draggable.create(el, {
                trigger: el.querySelector("#window-header"),
                onPress: () => focusWindow(windowKey),
            });
            draggableRef.current = instance;

            return () => instance.kill();
        }, []);

        // Disable/enable dragging when maximized
        useLayoutEffect(() => {
            const instance = draggableRef.current;
            if (!instance) return;
            if (isMaximized) {
                instance.disable();
            } else {
                instance.enable();
            }
        }, [isMaximized]);

        // Open animation
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block";

            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
            );
        }, [isOpen]);

        // Minimize animation (genie effect to dock)
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            if (isMinimized) {
                gsap.to(el, {
                    scaleX: 0.15,
                    scaleY: 0.05,
                    y: window.innerHeight,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power3.in",
                    onComplete: () => {
                        el.style.display = "none";
                    },
                });
            } else {
                // Restore from minimize
                el.style.display = "block";
                gsap.to(el, {
                    scaleX: 1,
                    scaleY: 1,
                    y: 0,
                    opacity: 1,
                    duration: 0.35,
                    ease: "power3.out",
                });
            }
        }, [isMinimized]);

        // Maximize / un-maximize animation
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el || !isOpen || isMinimized) return;

            if (isMaximized) {
                // Save current position for restore
                const rect = el.getBoundingClientRect();
                el.dataset.prevTop = rect.top + "px";
                el.dataset.prevLeft = rect.left + "px";
                el.dataset.prevWidth = el.style.width || rect.width + "px";
                el.dataset.prevHeight = el.style.height || "";
                el.dataset.prevBorderRadius = getComputedStyle(el).borderRadius;

                gsap.to(el, {
                    position: "fixed",
                    top: 40, // below navbar
                    left: 0,
                    width: "100vw",
                    height: "calc(100vh - 40px)",
                    borderRadius: 0,
                    duration: 0.35,
                    ease: "power2.inOut",
                    clearProps: "transform",
                });
            } else {
                // Restore to previous position
                gsap.to(el, {
                    position: "absolute",
                    width: el.dataset.prevWidth || "",
                    height: el.dataset.prevHeight || "",
                    borderRadius: el.dataset.prevBorderRadius || "",
                    duration: 0.35,
                    ease: "power2.inOut",
                });
            }
        }, [isMaximized]);

        // Show / hide element based on isOpen
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            if (!isOpen) {
                el.style.display = "none";
            }
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex, display: isOpen ? "block" : "none" }}
                className={`absolute ${isMaximized ? "is-maximized" : ""}`}
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${
        Component.displayName || Component.name || "Component"
    })`;

    return Wrapped;
};

export default WindowWrapper;
