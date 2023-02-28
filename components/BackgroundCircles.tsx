import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "20%", "80%", "20%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#404040] rounded-full h-[200px] w-[200px] mt-52 animate-ping-slow" />
      <div className="absolute border border-[#4D4D4D] rounded-full h-[300px] w-[300px] mt-52 animate-ping-slow" />
      <div className="absolute border border-[#595959] rounded-full h-[500px] w-[500px] mt-52 animate-ping-slow" />
      <div className="absolute border border-[#F7AB1A] rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#737373] rounded-full h-[800px] w-[800px] mt-52 animate-ping-slow" />
    </motion.div>
  );
};

export default BackgroundCircles;
