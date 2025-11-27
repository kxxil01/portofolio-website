'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const card = ref.current;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((e.clientX - cardCenterX) / (rect.width / 2)) * 5; // Max 5 degrees
    const rotateX = -((e.clientY - cardCenterY) / (rect.height / 2)) * 5; // Max 5 degrees

    setRotateX(rotateX);
    setRotateY(rotateY);
    setScale(1.02); // Subtle zoom effect
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <motion.div
      ref={ref}
      className={`${className || ''} transition-transform will-change-transform`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transformStyle: 'preserve-3d',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
