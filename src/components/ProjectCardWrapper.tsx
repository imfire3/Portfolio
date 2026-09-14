import { FC, useState, useRef, MouseEvent, ReactNode } from 'react';
import { Project } from '../types';

interface ProjectCardWrapperProps {
  project: Project;
  index: number;
  children: ReactNode;
}

export const ProjectCardWrapper: FC<ProjectCardWrapperProps> = ({
  project,
  index,
  children,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const pxX = e.clientX - rect.left;
    const pxY = e.clientY - rect.top;
    const x = Math.max(0, Math.min(100, (pxX / rect.width) * 100));
    const y = Math.max(0, Math.min(100, (pxY / rect.height) * 100));
    setMousePos({ x, y });

    const normX = (pxX / rect.width - 0.5) * 2;
    const normY = (pxY / rect.height - 0.5) * 2;
    const rotateY = normX * 4;
    const rotateX = -normY * 4;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setMousePos({ x: 50, y: 50 });
  };

  const accentPrimary = 'var(--accent)';
  const accentSecondary = 'var(--accent)';
  const accentGlow = 'var(--accent-glow)';

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="group relative rounded-3xl p-[1.5px] transition-all duration-200 ease-out shadow-2xl will-change-transform"
        style={{
          background: isHovered
            ? `radial-gradient(550px circle at ${mousePos.x}% ${mousePos.y}%, ${accentPrimary} 0%, ${accentSecondary} 35%, rgba(255, 255, 255, 0.1) 65%, var(--border) 85%, transparent 100%)`
            : 'var(--border)',
          transform: isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.008, 1.008, 1.008)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className={`pointer-events-none absolute -inset-1.5 rounded-3xl transition-opacity duration-300 blur-xl ${
            isHovered ? 'opacity-50' : 'opacity-0'
          }`}
          style={{
            background: `radial-gradient(420px circle at ${mousePos.x}% ${mousePos.y}%, ${accentGlow}, transparent 70%)`,
          }}
        />

        <div className="relative w-full h-full bg-[var(--bg-elevated)] rounded-[22px] overflow-hidden">
          <div
            className={`pointer-events-none absolute inset-0 transition-opacity duration-300 z-10 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, var(--accent-soft), transparent 60%)`,
            }}
          />
          {children}
        </div>
      </div>
    </div>
  );
};