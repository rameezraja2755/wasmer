import React from "react";
import CustomButton from "./CustomButton";
import PublishIcon from "../../public/svgicon/Publish.png";
import Diveder from "../../public/images/DivederHero.png";
import Image from "next/image";
import Slider from "react-slick";
import LineIcon from "../../public/svgicon/Line.svg";
import VerceIcon from "../../public/svgicon/VerceIcon.svg";
import CardUpIcon from "../../public/svgicon/CardIcon.svg";
import LikeIcon from "../../public/svgicon/LikeIcon.png";
import Diveders from "../../public/svgicon/Diveder.svg";
import DownloadIcon from "../../public/svgicon/Dowload.svg";
import SurusIcon from "../../public/svgicon/Syrus.png";
import SqliteIcon from "../../public/svgicon/SqliteIcon.png";
import CardIcon from "../../public/svgicon/CardIcons.svg";
import Card from "./Card";

const PublishSection = () => {
  const settings = {
    infinite: true,
    centerPadding: "2px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1054,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1520,
        settings: { slidesToShow: 3 },
      },
    ],
  };
  const data = [
    {
      content:
        "SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects.",
      heading: "spidermonkey",
      logo: PublishIcon,
      likes: "500",
      download: "1.2k",
    },
    {
      content:
        "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine",
      heading: "sqlite ",
      span: "sqlite",
      logo: SqliteIcon,
      likes: "500",
      download: "3.2k",
    },
    {
      content:
        "cowsay is a program that generates ASCII pictures of a cow with a message",
      heading: "syrusakbary",
      logo: SurusIcon,
      span: "r2",
      likes: "500",
      download: "1.3k",
    },
    {
      content:
        "SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects.",
      heading: "spidermonkey",
      logo: PublishIcon,
      likes: "500",
      download: "1.2k",
    },
    {
      content:
        "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine",
      heading: "sqlite ",
      span: "sqlite",
      logo: SqliteIcon,
      likes: "500",
      download: "3.2k",
    },
    {
      content:
        "cowsay is a program that generates ASCII pictures of a cow with a message",
      heading: "syrusakbary",
      logo: SurusIcon,
      span: "r2",
      likes: "500",
      download: "1.3k",
    },
  ];
  return (
    <section className=" py-12  ">
      <div className=" flex items-center justify-center flex-col md:px-4">
        <Image src={Diveder} alt="" />
        <CustomButton label={"Publish"} iconLeft={PublishIcon} />
        <h2 className=" text-5xl font-semibold py-6 sm:text-[36px] ">
          Better together
        </h2>
        <p className=" text-[24px] font-medium pt-1 text-center opacity-50 sm:text-xl max-w-[720px]">
          Using a binary for each platform and chip is the past. Rise above with
          lightweight containerized apps that simply run everywhere.
        </p>
      </div>
      <div className="public-section">
        <div className=" pt-16 react-silk-bg w-full md:px-4  ">
          <Slider {...settings}>
            {data.map((e, index) => {
              return (
                <div className="w-full max-w-[496px] bg-white h-[236px] items-center py-8 pl-8 pr-4 silk text-center mb-3 z-10 relative">
                  <div className="flex items-center  pb-4">
                    <Image src={e.logo} alt="" />
                    <div className="flex items-center gap-1 ">
                      <h3 className="text-[22px] font-semibold ">
                        {e.heading}
                      </h3>
                      <Image src={LineIcon} alt="" />
                      <span className="text-[22px] font-semibold">
                        {" "}
                        {e.span}
                      </span>
                    </div>
                  </div>
                  <p className=" text-base text-last-start font-medium opacity-50 text-start ">
                    {e.content}
                  </p>
                  <div className="flex gap-6 items-center  opacity-50 pt-6 absolute bottom-[25px] ">
                    <Image src={CardIcon} alt="" />
                    <Image src={Diveders} alt="" />
                    <div className="flex items-center gap-2">
                      <Image src={LikeIcon} alt="" />
                      <p className=" text-base font-medium  ">{e.likes}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={DownloadIcon} alt="" />
                      <p className=" text-base font-medium ">{e.download}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="md:px-4">
            <Card
              text={"All languages ,fully containerized & colllaborative"}
            />
          </div>
        </div>
        <div className=" flex flex-col opacity-50 py-8 gap-6 items-center justify-center md:px-4">
          <p className=" text-center text-[22px] font-medium max-w-[526px]  ">
            "This programming tool makes it easier for apps to <br /> work
            anywhere"
          </p>
          <Image src={VerceIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PublishSection;
