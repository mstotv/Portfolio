import React, { useEffect, useState } from 'react';

interface NeonBox {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

const NeonGlowBoxes: React.FC = () => {
  const [boxes, setBoxes] = useState<NeonBox[]>([]);

  useEffect(() => {
    // إنشاء 18 مربع بمواقع وتأخيرات عشوائية
    const newBoxes: NeonBox[] = [];
    for (let i = 0; i < 18; i++) {
      newBoxes.push({
        id: i,
        top: Math.random() * 100, // 0-100%
        left: Math.random() * 100, // 0-100%
        size: 30 + Math.random() * 30, // 30-60px
        delay: Math.random() * 5, // 0-5s تأخير عشوائي
        duration: 3 + Math.random() * 2, // 3-5s مدة الحركة
      });
    }
    setBoxes(newBoxes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="absolute neon-glow-box"
          style={{
            top: `${box.top}%`,
            left: `${box.left}%`,
            width: `${box.size}px`,
            height: `${box.size}px`,
            animationDelay: `${box.delay}s`,
            animationDuration: `${box.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default NeonGlowBoxes;
