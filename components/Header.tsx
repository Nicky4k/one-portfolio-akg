import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
          style={{ margin: "0.15rem 0.25rem", height: "4rem", width: "4rem" }}
          url="https://github.com/Nicky4k"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          style={{ margin: "0.15rem 0.25rem", height: "4rem", width: "4rem" }}
          url="https://linkedin.com/in/ashwini-gupta-29855296/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          style={{ margin: "0.15rem 0.25rem", height: "4rem", width: "4rem" }}
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
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
        className="p-4 flex flex-row items-center cursor-pointer"
      >
        <FaFileDownload style={{ color: "grey", fontSize: "2.25rem" }} />
        <p className="p-1 text-sm text-gray-400">Download CV</p>
      </motion.div>
    </header>
  );
}

export default Header;
