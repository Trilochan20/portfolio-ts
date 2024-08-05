import React from "react";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import SectionHeader from "../layout/SectionHeader";

const ContactMe: React.FC = () => {
  return (
    <>
      <SectionHeader id="contact" pretitle="CONTACT ME" title="GET IN TOUCH">
        Feel free to reach out to me for any inquiries, collaboration
        opportunities, or just to say hello! I'm always excited to connect with
        fellow tech enthusiasts, potential clients, or anyone who shares a
        passion for innovation. You can also find me in upwork. Here is the{" "}
        <a
          className="text-orange-600 dark:text-orange-400"
          href="https://www.upwork.com/freelancers/~015e2a4f9e1b5f074f?mp_source=share"
        >
          link.
        </a>
      </SectionHeader>
      {/* <div id="contact" className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="mailto:satapathytrilochan20@yahoo.com"
              className="p-3 dark:text-orange-300 text-orange-500 rounded-full bg-orange-100/80 dark:bg-gray-800 cursor-pointer"
            >
              <MdEmail className="h-6 w-6" />
            </a>
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Email
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 font-jose">
              write me an email.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="https://twitter.com/_Three_Eyed_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 dark:text-orange-300 text-orange-500 rounded-full bg-orange-100/80 dark:bg-gray-800"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              X
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 font-jose">
              Follow me on X
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="https://www.linkedin.com/in/trilochan-satapathy-3eyes/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 dark:text-orange-300 text-orange-500 rounded-full bg-orange-100/80 dark:bg-gray-800"
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
        </div>
      </div> */}
    </>
  );
};

export default ContactMe;
