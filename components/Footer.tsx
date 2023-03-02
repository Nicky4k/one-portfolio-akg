import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen">
      <div className="w-full h-full relative top-5 flex flex-col justify-center items-center">
        <h5 className="uppercase tracking-[20px] text-gray-500 text-xl pb-10">
          Hobbies
        </h5>
        <div className=" top-20">
          <div className="flex items-center py-1">
            <img
              loading="lazy"
              className="object-contain w-12 h-12"
              src="https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png"
              alt="edm"
            />
            <h4 className="px-2  tracking-[5px] text-gray-500 text-sm">
              Electronic Music Producer
            </h4>
          </div>
          <div className="flex items-center py-1">
            <img
              loading="lazy"
              className="object-contain w-12 h-12"
              src="https://pngimg.com/uploads/vinyl/vinyl_PNG14.png"
              alt="dj"
            />
            <h4 className="px-2  tracking-[5px] text-gray-500 text-sm">DJ</h4>
          </div>
          <div className="flex items-center py-1">
            <img
              loading="lazy"
              className="object-contain w-12 h-12 p-0.5"
              src="https://www.freeiconspng.com/thumbs/basketball-png/black-basketball-png-12.png"
              alt="basketball"
            />
            <h4 className="px-2  tracking-[5px] text-gray-500 text-sm">
              Basketball
            </h4>
          </div>
          <div className="flex items-center py-1.5">
            <img
              loading="lazy"
              className="object-contain w-12 h-12 p-0.5"
              src="https://img.freepik.com/free-icon/file-formats_318-328827.jpg"
              alt="photoshop"
            />
            <h4 className="px-2  tracking-[5px] text-gray-500 text-sm">
              Photoshop
            </h4>
          </div>
        </div>
      </div>
      <Link className="pt-5 absolute bottom-20 pb-10" href="#hero">
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
        <Link href="#projects" scroll={false}>
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
