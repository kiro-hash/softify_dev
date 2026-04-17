import React, { useEffect, useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      dotRef.current.style.left = `${mouse.current.x}px`;
      dotRef.current.style.top = `${mouse.current.y}px`;
    };

    window.addEventListener("mousemove", move);

    let animationId;

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;

      ringRef.current.style.left = `${ring.current.x}px`;
      ringRef.current.style.top = `${ring.current.y}px`;

      animationId = requestAnimationFrame(animateRing);
    };

    animateRing();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default Cursor;