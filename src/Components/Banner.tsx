import React from "react";
import Diveder from "../../public/images/DivederHero.png";
import CustomButton from "./CustomButton";
import Frame from "../../public/svgicon/Frame .svg";
import DockerIcon from "../../public/images/Docker.svg";
import GoLogoIcon from "../../public/images/GoLogo.png";
import JavascriptIcon from "../../public/images/Javascript.png";
import ReactIcon from "../../public/images/React.png";
import PythonIcon from "../../public/images/python.png";
import Cplus from "../../public/images/Cplus.png";
import VerceIcon from "../../public/svgicon/VerceIcon.svg";
import CardUpIcon from "../../public/svgicon/CardIcon.svg";

import Image from "next/image";
import Card from "./Card";

const Banner = () => {
  return (
    <section>
      <div className=" w-full max-w-[826px] mx-auto sm:px-4 ">
        <div className=" flex flex-col items-center">
          <Image src={Diveder} alt="divder" />
          <CustomButton label={"Run"} iconLeft={Frame} />
          <h3 className="text-5xl font-semibold pt-6 pb-4 sm:text-[36px]">
            Run the world{" "}
          </h3>
          <p className="text-[22px] font-medium opacity-50 text-center sm:text-xl ">
            Using a binary for each platform and chip is the past. Rise above
            with lightweight containerized apps that simply run everywhere.
          </p>
        </div>
      </div>
      <div className="banner sm:bg-auto">
        <div className=" w-full max-w-[826px] mx-auto sm:px-4  ">
          <div className="flex items-center flex-wrap gap-[18px] justify-center pt-[64px]">
            <Image src={DockerIcon} alt="" />
            <Image src={ReactIcon} alt="" />
            <Image src={JavascriptIcon} alt="" />
            <Image src={Cplus} alt="" />
            <Image src={PythonIcon} alt="" />
            <Image src={GoLogoIcon} alt="" />
          </div>
          <p className="text-[22px] font-medium text-[#FAFBFD] py-4 text-center">
            Supports almost every programming language
          </p>
          <Card text={"Truly universal, runs everywhere & fast as native"} />
        </div>
      </div>
      <div className=" flex flex-col opacity-50 pt-[61px] gap-6 items-center  justify-center sm:px-4">
        <p className=" text-center font-semibold text-xl ">
          This programming tool makes it easier for apps to work anywhere
        </p>
        <Image src={VerceIcon} alt="" />
      </div>
    </section>
  );
};

export default Banner;
