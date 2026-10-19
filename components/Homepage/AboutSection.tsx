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
        title="Senior Software Engineer & Data Engineer"
      >
        I specialize in building scalable web applications, backend systems, and 
        data-intensive platforms. Expert in Next.js, React, Node.js, PostgreSQL, 
        Python, FastAPI, and Neo4j. Experienced in designing APIs, optimizing 
        databases, building data ingestion pipelines, and deploying production 
        systems with Docker and cloud platforms.
      </SectionHeader>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            <SkillCard
              icon={<FaList />}
              title="Full-Stack Development"
              description="Expert in building scalable web applications using Next.js, React, Node.js, TypeScript, and modern JavaScript frameworks with a focus on performance and user experience."
            />

            <SkillCard
              icon={<FaDatabase />}
              title="Data Engineering"
              description="Architect and maintain data engineering platforms using Python, FastAPI, PostgreSQL, and Neo4j. Build ingestion pipelines and enforce data quality with Pandera/Pydantic validation."
            />

            <SkillCard
              icon={<FaCloud />}
              title="Cloud & DevOps"
              description="Deploy and maintain production systems on AWS (EC2, Lambda, S3, CloudFront, Route53) using Docker, Railway, Vercel, and GitHub Actions for CI/CD automation."
            />

            <SkillCard
              icon={<FaLaptopCode />}
              title="Backend Systems"
              description="Design and optimize RESTful APIs using Node.js, Express, FastAPI, and PostgreSQL. Expert in database query optimization and system architecture."
            />

            <SkillCard
              icon={<FaWordpress />}
              title="AI & API Integration"
              description="Integrate AI capabilities with OpenAI API and build web scraping solutions using httpx, BeautifulSoup, and lxml for data acquisition workflows."
            />

            <SkillCard
              icon={<FaGamepad />}
              title="Beyond Code"
              description="Passionate about gaming, manga, and anime. Enjoy staying active through workouts, exploring new places, and keeping up with the latest tech trends."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
