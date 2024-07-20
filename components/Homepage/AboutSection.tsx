import React from "react";
import SectionHeader from "../layout/SectionHeader";
import {
  FaList,
  FaCloud,
  FaWordpress,
  FaDatabase,
  FaGamepad,
  FaLaptopCode,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface SkillCardProps {
  icon: React.ReactElement<IconType>;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <div className="flex gap-4 md:gap-6">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-400 dark:bg-orange-300 text-gray-900 dark:text-gray-800 shadow-lg md:h-14 md:w-14 md:rounded-xl">
      {icon}
    </div>

    <div>
      <h3 className="mb-2 text-lg font-semibold md:text-xl">{title}</h3>
      <p className="mb-2 text-gray-500 dark:text-gray-300 font-jose">
        {description}
      </p>
    </div>
  </div>
);

const AboutMeSection: React.FC = () => {
  return (
    <>
      <SectionHeader
        id="about"
        pretitle="Meet the Developer"
        title="Full-Stack Developer & Cloud Architect"
      >
        I specialize in creating innovative front-end applications using HTML,
        CSS, JavaScript and frameworks like React, Next.js, NodeJs, Python and
        Flask. A WordPress expert, I also work with databases like MongoDB,
        Supabase and Firebase.
      </SectionHeader>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            <SkillCard
              icon={<FaList />}
              title="Full-Stack Development"
              description="I specialize in creating innovative web applications with expertise in HTML, CSS, JavaScript, Python, and frameworks like React, Next.js, and Flask."
            />

            <SkillCard
              icon={<FaCloud />}
              title="Cloud Architecture"
              description="I have experience with AWS technologies such as S3, Lambda, EC2 Instances, Lightsail, and Elastic Beanstalk to design and deploy scalable and secure cloud solutions."
            />

            <SkillCard
              icon={<FaWordpress />}
              title="WordPress Expertise"
              description="I have developed a mastery of WordPress, harnessing the power of this content management system to create feature-rich websites."
            />

            <SkillCard
              icon={<FaDatabase />}
              title="Database Management"
              description="I work with databases like Supabase and Firebase to ensure data is stored and accessed efficiently in my applications."
            />

            <SkillCard
              icon={<FaGamepad />}
              title="Gaming and Manga Enthusiast"
              description="Beyond work, I'm passionate about gaming, manga, and anime. I also enjoy staying active through workouts, exploring new places, and keeping up with the latest tech trends."
            />

            <SkillCard
              icon={<FaLaptopCode />}
              title="Tech Enthusiast"
              description="I'm always eager to learn and stay up to date on the latest trends in the tech world, bringing a positive attitude and collaborative mindset to every project."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
