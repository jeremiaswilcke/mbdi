"use client";

import { useEffect, useRef } from "react";

export function MouseTrail() {
    const trailRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const rafId = useRef<number>(0);

    useEffect(() => {
        // Only activate on devices with a fine pointer (desktop)
        const hasPointer = window.matchMedia("(pointer: fine)").matches;
        if (!hasPointer) return;

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            const trail = trailRef.current;
            if (!trail) return;

            // Smooth follow with easing
            const ease = 0.08;
            currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
            currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

            trail.style.transform = `translate(${currentPos.current.x - 100}px, ${currentPos.current.y - 100}px)`;
            trail.style.opacity = "1";

            rafId.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove);
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div
            ref={trailRef}
            className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-500 hidden md:block"
            style={{
                background: "radial-gradient(circle, rgba(109,192,210,0.12) 0%, rgba(109,192,210,0.04) 40%, transparent 70%)",
                willChange: "transform",
            }}
        />
    );
}
