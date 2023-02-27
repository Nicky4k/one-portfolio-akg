import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "<Hi, I am Ashwini Gupta />",
      ">Eat Sleep React Repeat />",
      "<BlackCoffee.jsx />",
      "<Front end Developer />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <h1 className="text-4xl">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB1A" />
      </h1>
    </div>
  );
};

export default Hero;
