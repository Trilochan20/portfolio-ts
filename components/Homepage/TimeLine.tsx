"use client";
import { highlightTechnologies } from "@/lib/highlightTechnologies";
import timelineData from "../../lib/timeline-data.json";
import SectionHeader from "../layout/SectionHeader";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItemProps {
  time: string;
  title: string;
  body: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ time, title, body }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
    >
      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
          {time}
        </h3>
      </div>
      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
          </div>
        </div>
        <div className="grow pt-0.5 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          {body.map((paragraph, index) => (
            <p
              key={index}
              className="mt-1 text-md text-gray-600 dark:text-neutral-400 text-pretty"
            >
              {highlightTechnologies(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section className="my-12 mx-auto">
      <SectionHeader
        id="journey"
        pretitle="The Journey"
        title="My Learning Experience"
      >
        Below is the timeline of my journey in coding
      </SectionHeader>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
