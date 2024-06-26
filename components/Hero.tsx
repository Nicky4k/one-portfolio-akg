import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I am Ashwini Gupta", "Eat Sleep <React/> Repeat"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col space-y-10 pt-20 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        loading="lazy"
        className="relative mx-auto rounded-full h-32 w-32 object-cover"
        src="/my-pic-dp-square.JPG"
        alt="display picture"
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[10px]">
          Front end Developer
        </h2>
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.05,
            delay: 2,
          }}
          className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10"
        >
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#8576FF" />
        </motion.h1>
        <div className="pt-5">
          <Link href="#contactme">
            <button className="heroButton">Contact</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
