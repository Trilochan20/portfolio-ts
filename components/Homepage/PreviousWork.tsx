import SectionHeader from "../layout/SectionHeader";
import Spotlight, { SpotlightCard } from "../layout/SpotlightSection";

const PreviousWorkSection: React.FC = () => {
  return (
    <section className="my-12 mx-auto">
      <SectionHeader
        id="work"
        pretitle="Explore My Portfolio"
        title="My Previous Work"
      >
        In my journey as a full-stack developer and cloud architect, I've had
        the privilege of collaborating with a diverse range of clients and
        projects. Here's a glimpse of some remarkable work I've been a part of:
      </SectionHeader>

      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <Spotlight className="lg:col-span-2 xl:col-auto">
          <SpotlightCard
            className="flex flex-col justify-between w-full h-full 
          bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-800/25 "
          >
            <h3 className="text-2xl font-bold tracking-widest mb-6">
              Zombieverse.gg
              <sup className="text-xs dark:text-orange-400 text-orange-700">
                {" "}
                [ongoing]
              </sup>
            </h3>
            <p className="text-lg leading-normal font-jose">
              Developed <Mark>Zombieverse.gg</Mark>, a React-based NFT trading
              platform with Web3 integration. A unique project exploring
              cutting-edge technologies.
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Tech Stack</h4>
              <ul className="list-disc list-inside mt-2">
                <li>React, NextJS</li>
                <li>Web3</li>
                <li>NFT</li>
              </ul>
            </div>
            <br /> <br />
            <MyPreviousWorksModal title="Zombieverse" />
          </SpotlightCard>
        </Spotlight>

        <Spotlight>
          <SpotlightCard
            className="flex flex-col justify-between w-full h-full 
          bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-800/25  "
          >
            <h3 className="text-2xl font-bold tracking-widest mb-6">
              Bandita's Healing Space
              <sup className="text-xs dark:text-orange-400 text-orange-700">
                {" "}
                [finished]
              </sup>
            </h3>
            <p className="text-lg leading-normal font-jose">
              Developed <Mark>Bandita's Healing Space</Mark>, a portfolio and
              appointment booking site for a psychologist using WordPress.
              Integrated forms like contact form 7.
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Tech Stack</h4>
              <ul className="list-disc list-inside mt-2">
                <li>WordPress</li>
                <li>Elementor</li>
              </ul>
            </div>
            <br /> <br />
            <MyPreviousWorksModal title="Bandita's Healing Space" />
          </SpotlightCard>
        </Spotlight>

        <Spotlight>
          <SpotlightCard
            className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14
           dark:bg-gray-800/25 "
          >
            <h3 className="text-2xl font-bold tracking-widest mb-6">
              Circles
              <sup className="text-xs dark:text-orange-400 text-orange-700">
                [ongoing]
              </sup>
            </h3>
            <p className="text-lg leading-normal font-jose">
              Developed <Mark>Circles</Mark>, an ongoing project on Flutter for
              both Android and iOS. Includes Web3 integration, WalletConnect
              integration, and a Web3 marketplace.
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Tech Stack</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Flutter</li>
                <li>Android</li>
                <li>iOS</li>
                <li>Web3</li>
                <li>WalletConnect</li>
              </ul>
            </div>
            <br /> <br />
            <MyPreviousWorksModal title="Circles" />
          </SpotlightCard>
        </Spotlight>
      </div>
    </section>
  );
};

import React from "react";
import MyPreviousWorksModal from "./PreviousWorksModal";

interface MarkProps {
  children: React.ReactNode;
}

const Mark: React.FC<MarkProps> = (props) => {
  return (
    <>
      <mark
        className="text-indigo-800 bg-indigo-100 rounded-md font-semibold
      ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200"
      >
        {props.children}
      </mark>
    </>
  );
};

export default PreviousWorkSection;
