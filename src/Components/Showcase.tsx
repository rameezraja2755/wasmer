import React from "react";
import ShowcaseImg from "../../public/images/ShowcaseImg.png";
import StarIcon from "../../public/svgicon/Star.svg";
import Diveder from "../../public/svgicon/Diveder.svg";
import GitHubIcon from "../../public/svgicon/Github.svg";
import ArrowUp from "../../public/svgicon/ArrowUp.svg";
import Frame from "../../public/svgicon/Frame .svg";
import TopArrow from "../../public/svgicon/TopArroe.svg";
import DeployIcon from "../../public/svgicon/Deploy.png";
import PublishIcon from "../../public/svgicon/Publish.png";

import CustomButton from "./CustomButton";

import Image from "next/image";

const Showcase = () => {
  return (
    <section className="py-[88px] sm:pb-[40px]">
      <div className=" flex justify-center ">
        <h1 className=" w-full max-w-[600px] text-[52px] sm:text-center sm:text-[44px] font-glory font-semibold leading-[120%] md:px-4 ">
          Run, Publish & Deploy  any code - anywhere
        </h1>
      </div>
      <div className="showcase-background w-full h-[84vh] xl:h-[70vh] lg:h-[60vh] md:h-[50vh] sm:h-[43vh]"></div>
      <div className=" flex flex-col items-center mt-[-20px] md:px-4 ">
        <p className="text-[22px] w-full max-w-[662px] text-center text-[#0E061A] opacity-50 font-medium  ">
          Serve sandboxed WebAssembly apps anywhere through a single 
          runtime and do in days what others do in months.
        </p>
        <div className="my-2">
          <h3 className="text-[22px] font-semibold  pt-12">
            Reach for the stars, we do too.
          </h3>
          <div className=" mx-auto border-solid border-[1px] rounded-[56px] max-w-[210px] border-[#0e061a26] flex items-center gap-2 py-3 px-5 mt-4 ">
            <div className="flex items-center gap-2 mr-2">
              <h1 className=" text-[22px] font-semibold mt-[6px] ">15,000</h1>
              <Image src={StarIcon} alt="StarIcon" />
            </div>

            <Image src={Diveder} alt="Diveder" className="mx-2" />
            <Image src={GitHubIcon} alt="Diveder" />
            <Image src={ArrowUp} alt="Diveder" />
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center flex flex-col mx-auto pt-[144px] sm:pt-[111px] md:px-4  ">
        <h3 className=" flex items-center gap-5 text-5xl sm:text-[36px] font-semibold sm:text-center sm:justify-center   flex-wrap">
          Create apps that
          <span>
            <CustomButton label={"Run"} iconLeft={Frame} arrowIcon={TopArrow} />
          </span>
          everywhere.
        </h3>
        <h3 className=" flex items-center gap-5 text-5xl py-5 flex-wrap font-semibold sm:text-[36px] sm:text-center sm:justify-center ">
          <span className=" flex-col">
            <CustomButton
              label={"Publish"}
              iconLeft={PublishIcon}
              arrowIcon={TopArrow}
            />
          </span>
          and share with the community
        </h3>
        <h3 className=" flex items-center  gap-5 text-5xl flex-wrap font-semibold sm:text-[36px] sm:text-center sm:justify-center ">
          <span className="text-5xl font-semibold sm:hidden ">and</span>
          <span>
            <CustomButton
              label={"Deploy"}
              iconLeft={DeployIcon}
              arrowIcon={TopArrow}
            />
          </span>
          to the edge, globally.
        </h3>
      </div>
    </section>
  );
};

export default Showcase;
