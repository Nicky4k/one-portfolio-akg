import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import useDownloader from "react-use-downloader";
import Link from "next/link";
import { PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

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
        className="flex flex-row items-center"
      >
        {/* <div className="flex flex-col items-center justify-center">
          <SocialIcon
            style={{
              margin: "0.25rem 0.25rem -0.05rem 0.25rem",
              height: "3rem",
              width: "3rem",
            }}
            url="mailto:ashwinigupta0126@gmail.com"
            target="_blank"
            className="cursor-pointer"
            network="email"
            fgColor="grey"
            bgColor="transparent"
            id="email"
          />
          <a href="mailto:ashwinigupta0126@gmail.com">
            <label htmlFor="email" className="text-gray-200/40 text-xs">
              Email
            </label>
          </a>
        </div> */}
        <div className="flex flex-col items-center justify-center">
          <a id="call" href="tel:+919148669104">
            <PhoneIcon className="text-gray-200/40 h-14 w-12 px-3 inline-block" />
          </a>
          <label htmlFor="call" className="text-gray-200/40 text-xs">
            Call
          </label>
        </div>
        <div className="flex flex-col items-center justify-center">
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
            id="github"
          />
          <label htmlFor="github" className="text-gray-200/40 text-xs">
            GitHub
          </label>
        </div>
        <div className="flex flex-col items-center justify-center">
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
            id="linkedin"
          />
          <label htmlFor="linkedin" className="text-gray-200/40 text-xs">
            LinkedIn
          </label>
        </div>
        <div className="flex flex-col items-center justify-center ml-2">
          <a
            id="call"
            href="https://youtu.be/JvbRAq7QAnQ?si=Mj4Du_fMKLUGLTlS"
            target="_blank"
          >
            <VideoCameraIcon className="text-gray-200/40 h-14 w-12 px-3 inline-block" />
          </a>
          <label htmlFor="call" className="text-gray-200/40 text-xs">
            Video CV
          </label>
        </div>
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
        href="https://drive.google.com/file/d/1j76mmqRmQO8hG18Chzcia_VpSOdYeeeh/view"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 flex flex-row items-center cursor-pointer"
      >
        <div className="h-8 w-30 pr-2 flex flex-col justify-evenly align-top">
          <label className="text-xs text-gray-400">Download</label>
          <label className="text-xs text-right text-gray-400 ">CV</label>
        </div>
        <FaFileDownload style={{ color: "grey", fontSize: "2rem" }} />
      </motion.a>
    </header>
  );
}

export default Header;
