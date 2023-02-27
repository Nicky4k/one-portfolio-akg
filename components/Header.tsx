import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaFileDownload } from "react-icons/fa";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto">
      <figure className="flex flex-row items-center">
        <SocialIcon
          url="https://github.com/Nicky4k"
          fgColor="black"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/ashwini-gupta-29855296/"
          fgColor="black"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          network="download"
          fgColor="black"
          bgColor="transparent"
        />
        <div className="flex flex-row items-center cursor-pointer">
          <FaFileDownload style={{ color: "black", fontSize: "30px" }} />
          <p className="p-1 text-sm">Download CV</p>
        </div>
      </figure>
    </header>
  );
}

export default Header;
