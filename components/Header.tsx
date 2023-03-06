import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import useDownloader from "react-use-downloader";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";

type Props = {};

function Header({}: Props) {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "../files/Ashwini_Gupta_CV.pdf";
  const filename = "Ashwini_Gupta_CV.pdf";
  return (
    <header className="sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center h-18 pl-2 pr-2">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="fle flex-row items-center"
      >
        <SocialIcon
          style={{
            margin: "0.15rem 0.25rem",
            height: "3.25rem",
            width: "3.25rem",
          }}
          url="mailto:ashwinigupta0126@gmail.com"
          target="_blank"
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <a href="tel:+919148669104">
          <PhoneIcon className="text-gray-200/40 h-8 w-12 px-3 inline-block" />
        </a>
        <SocialIcon
          style={{
            margin: "0.15rem 0.25rem",
            height: "3.25rem",
            width: "3.25rem",
          }}
          target="_blank"
          url="https://github.com/Nicky4k"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          style={{
            margin: "0.15rem 0.25rem",
            height: "3.25rem",
            width: "3.25rem",
          }}
          target="_blank"
          url="https://linkedin.com/in/ashwini-gupta-29855296/"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <motion.a
        onClick={() => download(fileUrl, filename)}
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        download={true}
        href="https://drive.google.com/u/0/uc?id=1wBzyV8grDUQFbDYRnCF7RkBQdl4bidie&export=download"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 flex flex-row items-center cursor-pointer"
      >
        <div className="h-8 w-30 pr-2 flex flex-col justify-evenly align-top">
          <p className="text-sm text-gray-400">Download</p>
          <p className="text-sm text-right text-gray-400 ">CV</p>
        </div>
        <FaFileDownload style={{ color: "grey", fontSize: "2rem" }} />
      </motion.a>
    </header>
  );
}

export default Header;
