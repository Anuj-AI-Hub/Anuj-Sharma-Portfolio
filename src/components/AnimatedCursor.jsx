import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    return window.matchMedia('(pointer: coarse)').matches;
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringTarget, setIsHoveringTarget] = useState(false);

  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springTrailX = useSpring(trailX, { stiffness: 220, damping: 28, mass: 0.7 });
  const springTrailY = useSpring(trailY, { stiffness: 220, damping: 28, mass: 0.7 });

  useEffect(() => {
    if (prefersReducedMotion || isTouchDevice) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      trailX.set(event.clientX);
      trailY.set(event.clientY);
      setIsVisible(true);
    };

    const handlePointerLeave = () => {
      pointerX.set(-100);
      pointerY.set(-100);
      trailX.set(-100);
      trailY.set(-100);
      setIsVisible(false);
    };

    const handlePointerOver = (event) => {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        target.closest('a, button, input, textarea, select, .skill-tag, .project-card, .filter-button')
      ) {
        setIsHoveringTarget(true);
      }
    };

    const handlePointerOut = (event) => {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        target.closest('a, button, input, textarea, select, .skill-tag, .project-card, .filter-button')
      ) {
        setIsHoveringTarget(false);
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
      document.body.style.cursor = '';
    };
  }, [isTouchDevice, prefersReducedMotion, pointerX, pointerY, trailX, trailY]);

  if (prefersReducedMotion || isTouchDevice) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{ x: springTrailX, y: springTrailY }}
        animate={{
          scale: isHoveringTarget ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: isHoveringTarget ? 'rgba(139, 92, 246, 0.9)' : 'rgba(0, 229, 255, 0.78)',
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.7 }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x: pointerX, y: pointerY }}
        animate={{
          scale: isHoveringTarget ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.35 }}
      />
    </>
  );
}
