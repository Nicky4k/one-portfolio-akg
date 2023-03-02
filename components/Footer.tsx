import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen">
      <div className="w-full relative top-10 flex flex-col justify-center items-center">
        <h5 className="uppercase tracking-[20px] text-gray-700 text-xl">
          Hobbies
        </h5>
        <div className="relative top-20">
          <div className="flex items-center py-1">
            <img
              className="object-contain w-12 h-12"
              src="https://the-motherlode.com/wp-content/uploads/2019/09/fav-icons.png"
              alt="edm"
            />
            <h4 className="px-2  tracking-[5px] text-gray-700 text-sm">
              Electronic Music Producer
            </h4>
          </div>
          <div className="flex items-center py-1">
            <img
              className="object-contain w-12 h-12"
              src="https://pngimg.com/uploads/vinyl/vinyl_PNG14.png"
              alt="dj"
            />
            <h4 className="px-2  tracking-[5px] text-gray-700 text-sm">DJ</h4>
          </div>
          <div className="flex items-center py-1">
            <img
              className="object-contain w-12 h-12 p-0.5"
              src="https://www.pngplay.com/wp-content/uploads/6/Basketball-Logo-Background-PNG-Image.png"
              alt="basketball"
            />
            <h4 className="px-2  tracking-[5px] text-gray-700 text-sm">
              Basketball
            </h4>
          </div>
          <div className="flex items-center py-1.5">
            <img
              className="object-contain w-12 h-12 p-1"
              src="https://seeklogo.com/images/A/adobe-photoshop-cc-circle-logo-3BE8AF841D-seeklogo.com.png"
              alt="photoshop"
            />
            <h4 className="px-2  tracking-[5px] text-gray-700 text-sm">
              Photoshop
            </h4>
          </div>
        </div>
      </div>
      <Link href="#hero">
        <button className="heroButton">Back To Top ↑</button>
      </Link>
      <div className="pt-5 absolute bottom-10">
        <Link href="#about">
          <button className="heroButton">About</button>
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
    </footer>
  );
};

export default Footer;
