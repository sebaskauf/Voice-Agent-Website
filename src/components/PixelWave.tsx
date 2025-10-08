'use client';

import { useEffect, useRef } from 'react';

export default function PixelWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let time = 0;

    const draw = () => {
      // Subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0B1020');
      gradient.addColorStop(1, '#0E1530');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle floating orbs
      for (let i = 0; i < 3; i++) {
        const x = canvas.width * (0.2 + i * 0.3) + Math.sin(time * 0.3 + i) * 100;
        const y = canvas.height * (0.3 + i * 0.2) + Math.cos(time * 0.2 + i) * 80;

        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, 300);
        orbGradient.addColorStop(0, 'rgba(56, 250, 255, 0.03)');
        orbGradient.addColorStop(1, 'rgba(56, 250, 255, 0)');

        ctx.fillStyle = orbGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (!prefersReducedMotion) {
        time += 0.01;
        animationFrameRef.current = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
