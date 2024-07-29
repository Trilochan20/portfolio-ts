import React from "react";
import { FaMobileAlt, FaLaptopCode, FaServer } from "react-icons/fa";
import SkillBar from "../layout/SkillBar";

interface BulletItem {
  title: string;
  desc: string;
  icon: React.ReactElement;
}

interface BenefitProps {
  title: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

interface Skill {
  name: string;
  percentage: number;
  gradient: string;
}

const MySkills: React.FC = () => {
  const data = {
    title: "Offer more benefits here",
    desc: "I bring a diverse skill set to the table, allowing me to tackle a wide range of challenges in the tech world.",
    bullets: [
      {
        title: "Web Application Development",
        desc: "Crafting responsive web applications with a focus on user experience.",
        icon: (
          <FaLaptopCode className="h-6 w-6 text-gray-900 dark:text-gray-500" />
        ),
      },
      {
        title: "Mobile Application Development",
        desc: "Building powerful mobile apps using the latest technologies and tools.",
        icon: (
          <FaMobileAlt className="h-6 w-6 text-gray-800 dark:text-gray-500" />
        ),
      },
      {
        title: "Cloud Architecture Design",
        desc: "Creating efficient and scalable cloud architectures for your projects.",
        icon: <FaServer className="h-6 w-6 text-gray-800 dark:text-gray-500" />,
      },
    ] as BulletItem[],
  };

  const skills: Skill[] = [
    {
      name: "HTML & CSS",
      percentage: 85,
      gradient: "from-cyan-500 via-violet-600 to-blue-500",
    },
    {
      name: "JavaScript",
      percentage: 75,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "React & NextJS",
      percentage: 80,
      gradient: "from-cyan-500 to-blue-500",
    },
    { name: "NodeJS", percentage: 60, gradient: "from-indigo-500 to-blue-500" },
    {
      name: "Python",
      percentage: 70,
      gradient: "from-indigo-500 via-violet-600 to-blue-500",
    },
    {
      name: "Flask",
      percentage: 60,
      gradient: "from-fuchsia-500 via-violet-600 to-pink-500",
    },
    {
      name: "FastAPI",
      percentage: 50,
      gradient: "from-fuchsia-500 to-cyan-500",
    },
    {
      name: "Flutter",
      percentage: 50,
      gradient: "from-blue-600 to-violet-600",
    },
    {
      name: "React-Native",
      percentage: 40,
      gradient: "from-fuchsia-600 to-pink-600",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full mx-auto max-w-screen-2xl px-4 md:px-8">
      <div id="skill" className="w-full md:w-1/2 py-4">
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              My Skills
            </h3>

            <p className="max-w-2xl py-4 pr-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 ">
              {data.desc}
            </p>
          </div>

          <div className="w-full mt-5">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 py-4">
        <div className="flex flex-col ">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              percentage={skill.percentage}
              gradient={skill.gradient}
              animate={true} // You can set this to false if you don't want animation
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Benefit: React.FC<BenefitProps> = ({ title, icon, children }) => {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 shadow-xl bg-orange-400 dark:bg-orange-300 rounded-md w-11 h-11">
        {React.cloneElement(icon, {
          className: "w-7 dark:text-gray-800",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400 ">{children}</p>
      </div>
    </div>
  );
};

export default MySkills;
