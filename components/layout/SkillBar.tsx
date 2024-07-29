"use client";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  gradient: string;
  animate?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage,
  gradient,
  animate = true,
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5, // Trigger when 50% of the element is in view
  });

  React.useEffect(() => {
    if (isInView && animate) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      controls.start({
        width: "0%",
        transition: { duration: 0.5, ease: "easeIn" },
      });
    }
  }, [controls, isInView, percentage, animate]);

  return (
    <div className="flex flex-col w-full mb-4">
      <div className="mb-1 text-base font-medium dark:text-white">{name}</div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <motion.div
          ref={ref}
          initial={{ width: "0%" }}
          animate={controls}
          className={`bg-gradient-to-r ${gradient} text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        >
          <span className="opacity-0 sm:opacity-100">{percentage}%</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
