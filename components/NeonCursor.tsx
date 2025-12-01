
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const NeonCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 15);
      cursorY.set(e.clientY - 15);
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.style.cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Outer Glow */}
        <div className={`
          absolute inset-0 rounded-full
          ${isPointer ? 'bg-neon-red' : 'bg-white'}
          ${isClicking ? 'scale-50' : 'scale-100'}
          transition-all duration-150
          ${isPointer ? 'opacity-80' : 'opacity-40'}
        `}></div>
        
        {/* Inner Core */}
        <div className={`
          absolute inset-2 rounded-full
          ${isPointer ? 'bg-neon-red' : 'bg-white'}
          ${isClicking ? 'scale-125' : 'scale-100'}
          transition-all duration-150
        `}></div>
        
        {/* Pulse Animation */}
        <div className={`
          absolute inset-0 rounded-full
          ${isPointer ? 'bg-neon-red' : 'bg-white'}
          animate-ping opacity-20
        `}></div>
        
        {/* Ring */}
        <div className={`
          absolute inset-[-4px] rounded-full border-2
          ${isPointer ? 'border-neon-red' : 'border-white'}
          ${isClicking ? 'scale-75 opacity-50' : 'scale-100 opacity-30'}
          transition-all duration-300
        `}></div>
      </motion.div>

      {/* Custom CSS for cursor hiding */}
      <style>{`
        * {
          cursor: none !important;
        }
        
        /* Keep default cursor for inputs and textareas for better UX */
        input, textarea, select, [contenteditable="true"] {
          cursor: auto !important;
        }
        
        /* Hide cursor on touch devices */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default NeonCursor;
