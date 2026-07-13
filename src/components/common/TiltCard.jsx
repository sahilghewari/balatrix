import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * TiltCard — reusable 3D perspective tilt wrapper.
 *
 * Usage:
 *   <TiltCard className="glass-card p-8 rounded-2xl">
 *     …content…
 *   </TiltCard>
 *
 * The `className` is applied to the INNER motion div (the card surface),
 * so you can style the card normally. The outer wrapper is purely a
 * perspective container with no visual styles.
 */
const TiltCard = ({ children, className = '', wrapperClassName = '', ...props }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 22, stiffness: 180, mass: 0.6 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Map 0→1 mouse ratio to ±8° tilt
  const rotateX = useTransform(ySpring, [0, 1], [8, -8]);
  const rotateY = useTransform(xSpring, [0, 1], [-8, 8]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      className={`h-full w-full ${wrapperClassName}`}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        className={`w-full h-full ${className}`}
        {...props}
      >
        {/* Inner layer floats above with translateZ for parallax depth */}
        <div
          style={{ transform: 'translateZ(16px)', transformStyle: 'preserve-3d' }}
          className="w-full h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
