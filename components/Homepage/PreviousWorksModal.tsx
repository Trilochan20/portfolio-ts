"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface MyPreviousWorksModalProps {
  title: string;
}

const MyPreviousWorksModal: React.FC<MyPreviousWorksModalProps> = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <AlertDialog open={openModal} onOpenChange={setOpenModal}>
        <AlertDialogTrigger asChild>
          <button
            type="button"
            className="group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 
          focus:outline-none text-slate-50 bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl
           focus:ring-pink-200 dark:focus:ring-pink-800 border-0 rounded-lg focus:ring-2"
            style={{ cursor: "none" }}
          >
            <span
              className="items-stretch flex justify-center bg-slate-100 text-slate-900 transition-all 
            duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit 
                dark:bg-slate-900 dark:text-slate-100 w-full rounded-md text-sm px-4 py-2 border border-transparent"
            >
              <strong className="tracking-[0.20rem]">VIEW PROJECT</strong>
            </span>
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="h-[80svh] overflow-auto">
          <AlertDialogHeader className="flex justify-between flex-row ">
            <AlertDialogTitle className="text-2xl font-bold tracking-widest">
              {props.title}
            </AlertDialogTitle>
            <Button
              variant="ghost"
              className="w-8 h-8 p-0 absolute right-4 top-4"
              onClick={() => setOpenModal(false)}
            >
              <IoMdClose className="h-4 w-4" />
            </Button>
          </AlertDialogHeader>
          <div className="space-y-6">
            {props.title === "Zombieverse" && <Zombieverse />}
            {props.title === "Bandita's Healing Space" && (
              <BanditasHealingSpace />
            )}
            {props.title === "Circles" && <Circles />}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default MyPreviousWorksModal;

const Zombieverse: React.FC = () => {
  return (
    <div>
      <video
        className="mt-4 mb-8 w-full"
        src="/vid/_zombie.mp4"
        controls
      ></video>

      <p className="text-md leading-[1.75rem] mb-6 ">
        Zombieverse.gg is a unique and cutting-edge project that combines React,
        NFTs, and Web3 technology. This web application represents my venture
        into the world of blockchain and decentralized applications.
        Zombieverse.gg allows users to collect and trade ZOMBIE NFTs in a
        gamified environment. It leverages React for a responsive and
        interactive user interface, while Web3 integration ensures secure
        transactions and NFT ownership verification. This project reflects my
        adaptability and willingness to explore emerging technologies, making it
        a standout addition to my portfolio.
      </p>
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside ml-6 mb-6 ">
          <li className="mb-2 leading-[2rem]">
            <span className="font-semibold border-b-2">React and Next.js:</span>{" "}
            The backbone of Zombieverse.gg is built upon React and Next.js,
            ensuring a responsive and interactive user interface. This
            technology choice enables seamless user experiences, whether you're
            exploring the platform on a desktop or mobile device.
          </li>
          <br />
          <li className="mb-2 leading-[2rem]">
            <span className="font-semibold border-b-2">
              Engaging 3D Animations:
            </span>{" "}
            To bring the undead to life, I've integrated Lottiefiles to showcase
            mesmerizing 3D animated textures of zombies. These captivating
            visuals add an immersive layer to the user experience, making the
            act of collecting and trading NFTs even more thrilling.
          </li>
          <br />
          <li className="mb-2 leading-[2rem]">
            <span className="font-semibold border-b-2">
              Mobile Optimization:
            </span>{" "}
            Recognizing the importance of mobile accessibility, Zombieverse.gg
            is meticulously optimized for a variety of devices. This means users
            can dive into the world of NFTs and blockchain technology from the
            palm of their hand, ensuring a seamless and convenient experience on
            smartphones and tablets.
          </li>
          <br />
          <li className="mb-2 leading-[2rem]">
            <span className="font-semibold border-b-2">
              Metamask Integration:
            </span>{" "}
            To facilitate secure transactions and NFT ownership verification,
            Zombieverse.gg seamlessly integrates with Metamask, a widely used
            cryptocurrency wallet. This ensures that users can confidently
            participate in the NFT marketplace with trust and security.
          </li>
        </ul>
      </div>
    </div>
  );
};

const BanditasHealingSpace: React.FC = () => {
  return (
    <div>
      <Image
        src="/healing-space.png"
        width={1280}
        height={720}
        alt="Bandita's Healing Space"
      />
      <br />
      <p className="text-md leading-[1.75rem] mb-6 ">
        Banditas Healing Space is a WordPress website that serves as an online
        portfolio and platform for a healing practitioner. It showcases their
        services, allows clients to connect and submit forms, and provides a
        blog for sharing insights and updates. This project demonstrates my
        expertise in WordPress development, particularly in creating
        user-friendly websites tailored to specific business needs. I utilized
        custom post types, forms, and plugins to ensure a seamless experience
        for both the practitioner and their clients.
      </p>
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside ml-6 mb-6">
          <ul className="list-disc list-inside ml-6 ">
            <li>Portfolio and service showcase</li>
            <li>Client contact and form submissions</li>
            <li>WordPress-based platform</li>
            <li>Custom post types and plugins</li>
            <li>User-friendly interface</li>
          </ul>
          <br />
          <li className="mb-2 leading-[2rem]">
            <span className="font-semibold border-b-2">Status:</span> Completed
          </li>
        </ul>
      </div>
    </div>
  );
};

const Circles: React.FC = () => {
  return (
    <div>
      <Image src="/circles.png" width={1280} height={720} alt="Circles" />
      <br />
      <p className="text-md leading-[1.75rem] mb-6 ">
        Circles is an ongoing Flutter project that showcases my expertise in
        cross-platform mobile app development. This innovative app aims to
        create a decentralized marketplace experience by integrating Web3 and
        WalletConnect technologies. Users can connect their digital wallets,
        browse and purchase non-fungible tokens (NFTs), and participate in a
        thriving Web3 community.
        <br />
        <br />
        Additionally, Circles features a user dashboard created with Flutter,
        where registered users can manage their digital assets, create and sell
        their own NFTs, and engage with the Web3 ecosystem. The integration with
        Web3 and WalletConnect ensures secure and decentralized transactions,
        while the Flutter framework allows for a seamless user experience across
        Android and iOS devices. The user interface and design were meticulously
        crafted using Figma, ensuring a visually appealing and intuitive
        experience for the users. As the project is ongoing, I continue to
        enhance its features and user experience.
      </p>
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside ml-6 mb-6">
          <br />
          <ul className="list-disc list-inside ml-6 ">
            <li>Cross-platform Flutter app (Android and iOS)</li>
            <li>Web3 and WalletConnect integration</li>
            <li>NFT marketplace</li>
            <li>User dashboard for digital asset management</li>
            <li>Decentralized and secure transactions</li>
            <li>User interface designed with Figma</li>
          </ul>
          <br />
          <li className="mb-2 leading-[2rem]">
            <span className="font-semibold border-b-2">Status:</span> Ongoing
          </li>
        </ul>
      </div>
    </div>
  );
};
