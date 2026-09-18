import useWindowStore from "#store/window.js";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const ref = useRef(null);
        const draggableRef = useRef(null);
        const prevPosRef = useRef(null);

        const win = windows[windowKey];

        if (!win) {
            if (import.meta.env.DEV) {
                console.error(
                    `WindowWrapper Error: "${windowKey}" is not defined in WINDOW_CONFIG`
                );
            }
            return null;
        }

        const { isOpen, isMinimized, isMaximized, zIndex } = win;

        // Draggable setup — bound to header only
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

        // Toggle draggable when maximized
        useLayoutEffect(() => {
            const d = draggableRef.current;
            if (!d) return;
            isMaximized ? d.disable() : d.enable();
        }, [isMaximized]);

        // ─── Open animation ───
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block";
            gsap.fromTo(el,
                { scale: 0.85, opacity: 0, y: 30, transformOrigin: "center center" },
                {
                    scale: 1, opacity: 1, y: 0,
                    duration: 0.4,
                    ease: "back.out(1.4)",
                }
            );
        }, [isOpen]);

        // ─── Minimize (genie to dock) ───
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            if (isMinimized) {
                // Get dock position for genie target
                const dockRect = document.getElementById("dock")?.getBoundingClientRect();
                const dockCenterX = dockRect ? dockRect.left + dockRect.width / 2 : window.innerWidth / 2;
                const dockY = dockRect ? dockRect.top : window.innerHeight - 60;
                const elRect = el.getBoundingClientRect();

                const tl = gsap.timeline({
                    onComplete: () => { el.style.display = "none"; },
                });

                tl.to(el, {
                    scaleX: 0.12,
                    scaleY: 0.04,
                    x: dockCenterX - elRect.left - elRect.width / 2,
                    y: dockY - elRect.top,
                    opacity: 0,
                    borderRadius: "8px",
                    duration: 0.45,
                    ease: "power4.in",
                    transformOrigin: "bottom center",
                });
            } else {
                // Restore from minimize
                el.style.display = "block";
                gsap.fromTo(el,
                    { scaleX: 0.12, scaleY: 0.04, opacity: 0, transformOrigin: "bottom center" },
                    {
                        scaleX: 1, scaleY: 1,
                        x: 0, y: 0,
                        opacity: 1,
                        duration: 0.4,
                        ease: "back.out(1.2)",
                        clearProps: "transform",
                    }
                );
            }
        }, [isMinimized]);

        // ─── Maximize / Restore ───
        useLayoutEffect(() => {
            const el = ref.current;
            const d = draggableRef.current;
            if (!el || !isOpen || isMinimized) return;

            if (isMaximized) {
                // Store current bounds for restore
                const cs = getComputedStyle(el);
                prevPosRef.current = {
                    top: cs.top,
                    left: cs.left,
                    width: cs.width,
                    height: cs.height || "auto",
                    borderRadius: cs.borderRadius,
                    translate: cs.translate,
                    // Save Draggable's current x/y so we can put it back
                    dragX: d ? d.x : 0,
                    dragY: d ? d.y : 0,
                };

                // Override CSS centering transforms (e.g. -translate-x-1/2)
                el.style.translate = "none";

                gsap.to(el, {
                    position: "fixed",
                    top: 40,
                    left: 0,
                    width: "100vw",
                    height: "calc(100vh - 40px)",
                    borderRadius: 0,
                    x: 0,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.inOut",
                });
            } else if (prevPosRef.current) {
                const prev = prevPosRef.current;

                // Restore original CSS translate
                el.style.translate = prev.translate || "";

                gsap.to(el, {
                    position: "absolute",
                    top: prev.top,
                    left: prev.left,
                    width: prev.width,
                    height: prev.height,
                    borderRadius: prev.borderRadius,
                    x: prev.dragX,
                    y: prev.dragY,
                    duration: 0.4,
                    ease: "power2.inOut",
                    onComplete: () => {
                        // Re-sync Draggable with the restored position
                        if (d) d.update();
                    },
                });
                prevPosRef.current = null;
            }
        }, [isMaximized]);

        // Hide when closed
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            if (!isOpen) {
                gsap.to(el, {
                    scale: 0.85, opacity: 0, y: 20,
                    duration: 0.25,
                    ease: "power2.in",
                    onComplete: () => { el.style.display = "none"; },
                });
            }
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex, display: isOpen ? "block" : "none" }}
                className={`absolute will-change-transform ${isMaximized ? "is-maximized" : ""}`}
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
