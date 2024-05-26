import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  const landingDate = new Date().getFullYear();
  return (
    <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        loading="lazy"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        alt="profile picture"
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 xl:w-56 xl:h-56 mt-5 rounded-full object-cover"
        src="https://avatars.githubusercontent.com/u/87268446?v=4"
      />
      <motion.div
        initial={{
          y: 100,
          scale: 0.95,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
      >
        <h4 className="text-2xl font-semibold md:px-5 xl:px-20 pb-4 xl:text-4xl md:text-3xl">
          I welcome you to read a{" "}
          <span className="underline decoration-blue-400 text-gray-500">
            little
          </span>{" "}
          bio
        </h4>
        <p className="text-sm xl:text-base md:text-base xl:py-1 md:px-5 xl:px-20 text-gray-400">
          <span className=" text-blue-300">
            My goal is to create web app that reaches and impacts over a BILLION
            users. If you believe my expertise aligns with your needs and can
            support me in starting this ambitious journey, I’d love to {` `}
            <span className="underline font-semibold">
              <Link href="#contactme">connect!</Link>
            </span>
          </span>
          <br />
          <br />I have been coding since 4th grade and have {landingDate -
            2019}{" "}
          years of experience in the IT industry, including {landingDate - 2021}{" "}
          years of experience in JavaScript, React ecosystem{" "}
          <span className=" text-gray-500">
            (designing and developing complex business workflows, writing
            high-quality code, mentoring peers, collaborating
            cross-functionally, performance optimization, writing documentation,
            and delivering timely results in a fast-paced startup).
          </span>
          <br />
        </p>
      </motion.div>
    </div>
  );
};

export default About;
