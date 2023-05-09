import React from "react";
import Image from "next/image";
import Book from "../../public/images/book.png";
import ArrowUp from "../../public/svgicon/ArrowUp.svg";

const DevelopersCard = () => {
  const data = [
    {
      title: "Get started",
      items: [{ text: "Runtime" }, { text: "Registery" }, { text: "Deploy" }],
    },
    {
      title: "Guides",
      items: [
        { text: "Run a pakage" },
        { text: "Publish a pakage" },
        { text: "Deploy your website" },
      ],
    },
  ];
  const sdkRow = ["Python", "Rust", "Go", "C", "Rust", "Docker"];

  return (
    <div className="developers-card max-w-[385px] max-h-[491px] rounded-[12px] flex flex-col flex-starts  bg-[#FDFDFE] items-center">
      <div className=" p-[24px]">
        <span className="font-semibold not-italic text-[16px] text-[#0E061A]">
          CLI
        </span>
        <hr className="w-[329px] opacity-10 border border-solid border-1 border-black mx-auto" />
        <div className="flex items-center justify-start gap-12 mt-4 mb-4">
          <Image src={Book} alt="" />
          <div className="flex gap-[10px]  ">
            <p className="font-semibold not-italic text-base">Documentation</p>
            <Image src={ArrowUp} width={9} height={9} className="" alt="" />
          </div>
        </div>
        <div className="flex flex-row gap-24">
          {data.map((column, index) => (
            <div key={index} className="flex flex-col">
              <div className="font-semibold not-italic  text-base text-[#0E061A] opacity-50 mb-3">
                {column.title}
              </div>
              {column.items.map((item, index) => (
                <div key={index} className="flex flex-row justify-between mb-2">
                  <div className="text-[16px] not-italic font-semibold text-[#0E061A] mb-2">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <hr className="w-[329px] opacity-10 border border-solid border-1 border-black mx-auto" />
        <div className=" pt-4">
          <h3 className="font-semibold opacity-50 not-italic text-[#0E061A] text-base pb-4">
            Tools
          </h3>
          <span className="font-semibold">Visual Studio Code Extension </span>
        </div>
      </div>
      <div className="footer-card bg-[#0E061A] rounded-[12px] w-[377px] h-[102px] mb-1 p-5">
        <h3 className="font-normal text-[16px] text-[#FFFFFF] opacity-50 mb-4">
          SDK'S
        </h3>
        <div className="flex flex-row gap-5">
          {sdkRow.map((e) => (
            <h3 className="font-semibold text-[16px] text-[#FFFFFF]">{e}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopersCard;
