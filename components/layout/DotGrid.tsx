"use client";
import { motion } from "framer-motion";

interface DotGridProps {
  spacing?: number;
  dotSize?: number;
  dotClass?: string;
  direction?: "up" | "down" | "left" | "right";
  speed?: number;
}

const DotGrid: React.FC<DotGridProps> = ({
  spacing = 20,
  dotSize = 1,
  dotClass = "text-zinc-200 dark:text-zinc-800",
  direction = "up",
  speed = 20,
}) => {
  const directionToTranslate = {
    up: `translate3d(0, -${spacing}px, 0)`,
    down: `translate3d(0, ${spacing}px, 0)`,
    left: `translate3d(${spacing}px, 0, 0)`,
    right: `translate3d(-${spacing}px, 0, 0)`,
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className={`absolute inset-0 ${dotClass}`}
        style={{
          backgroundImage: `radial-gradient(circle, currentColor ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${spacing}px ${spacing}px`,
        }}
        animate={{
          transform: ["translate3d(0, 0, 0)", directionToTranslate[direction]],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: speed,
        }}
      />
    </div>
  );
};

export default DotGrid;
