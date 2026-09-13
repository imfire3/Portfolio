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
  // Coordonnées relatives en pourcentage (0% à 100%)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  // Rotation 3D (tilt)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const pxX = e.clientX - rect.left;
    const pxY = e.clientY - rect.top;
    const x = Math.max(0, Math.min(100, (pxX / rect.width) * 100));
    const y = Math.max(0, Math.min(100, (pxY / rect.height) * 100));
    setMousePos({ x, y });

    // Calcul de l'inclinaison 3D subtile (max ~4.5 degrés pour rester élégant et naturel)
    const normX = (pxX / rect.width - 0.5) * 2; // -1 à +1
    const normY = (pxY / rect.height - 0.5) * 2; // -1 à +1
    const rotateY = normX * 4; // inclinaison horizontale
    const rotateX = -normY * 4; // inclinaison verticale
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Retour doux à la position neutre
    setTilt({ rotateX: 0, rotateY: 0 });
    setMousePos({ x: 50, y: 50 });
  };

  // Couleur signature Orange de base (#ff4b16) pour tous les projets
  const orangePrimary = '#ff4b16';
  const orangeSecondary = '#ff7338';
  const orangeGlow = 'rgba(255, 75, 22, 0.4)';

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full"
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="group relative rounded-3xl p-[1.5px] transition-all duration-200 ease-out shadow-2xl will-change-transform"
        style={{
          // Stroke orange interactif qui suit précisément le mouvement de la souris (haut, bas, gauche, droite)
          background: isHovered
            ? `radial-gradient(550px circle at ${mousePos.x}% ${mousePos.y}%, ${orangePrimary} 0%, ${orangeSecondary} 35%, rgba(255, 75, 22, 0.3) 65%, rgba(255, 255, 255, 0.08) 85%, transparent 100%)`
            : 'rgba(255, 255, 255, 0.1)',
          // Mouvement 3D dynamique (tilt subtil + micro-élévation z)
          transform: isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.008, 1.008, 1.008)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Halo ambiant orange externe qui suit le mouvement */}
        <div
          className={`pointer-events-none absolute -inset-1.5 rounded-3xl transition-opacity duration-300 blur-xl ${
            isHovered ? 'opacity-50' : 'opacity-0'
          }`}
          style={{
            background: `radial-gradient(420px circle at ${mousePos.x}% ${mousePos.y}%, ${orangeGlow}, transparent 70%)`,
          }}
        />

        {/* Intérieur de la carte avec fond sombre contrasté */}
        <div className="relative w-full h-full bg-[#131418] rounded-[22px] overflow-hidden">
          {/* Reflet de lumière rasante orange qui bouge avec la souris */}
          <div
            className={`pointer-events-none absolute inset-0 transition-opacity duration-300 z-10 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 75, 22, 0.05), transparent 60%)`,
            }}
          />

          {/* Contenu complet de la carte */}
          {children}
        </div>
      </div>
    </div>
  );
};
