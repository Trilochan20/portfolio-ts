import React from "react";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import SectionHeader from "../layout/SectionHeader";

const ContactMe: React.FC = () => {
  return (
    <>
      <SectionHeader id="contact" pretitle="CONTACT ME" title="GET IN TOUCH">
        Senior Software Engineer with 8+ years of experience. Currently specializing 
        in data engineering and full-stack development. Open to consulting opportunities, 
        collaborations, and technical discussions.
      </SectionHeader>
      <div id="contact" className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="mailto:satapathytrilochan20@yahoo.com"
              className="p-3 dark:text-orange-300 text-orange-500 rounded-full bg-orange-100/80 dark:bg-gray-800 cursor-pointer hover:scale-110 transition-transform"
            >
              <MdEmail className="h-6 w-6" />
            </a>
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Email
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 font-jose">
              Send me an email
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="https://www.linkedin.com/in/trilochan-satapathy-3eyes/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 dark:text-orange-300 text-orange-500 rounded-full bg-orange-100/80 dark:bg-gray-800 hover:scale-110 transition-transform"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              LinkedIn
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 font-jose">
              Connect on LinkedIn
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="https://github.com/Trilochan20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 dark:text-orange-300 text-orange-500 rounded-full bg-orange-100/80 dark:bg-gray-800 hover:scale-110 transition-transform"
            >
              <FaGithub className="w-6 h-6" />
            </a>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              GitHub
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 font-jose">
              View my projects
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="https://twitter.com/_Three_Eyed_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 dark:text-orange-300 text-orange-500 rounded-full bg-orange-100/80 dark:bg-gray-800 hover:scale-110 transition-transform"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              X / Twitter
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 font-jose">
              Follow me on X
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
