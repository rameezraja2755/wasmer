import React from "react";
import Logo from "../../public/svgicon/Logo.svg";
import TwitterIcon from "../../public/svgicon/Twitter.svg";
import FacebookIcon from "../../public/svgicon/Facebook.svg";
import YoutubeIcon from "../../public/svgicon/Youtube.svg";
import LinkedinIcon from "../../public/svgicon/linkedin.svg";

import Image from "next/image";

const Footer = () => {
  const icons = [LinkedinIcon, TwitterIcon, FacebookIcon, YoutubeIcon];
  const FooterList = [
    { heading: "Explore", list: ["Packages", "Blog"] },
    {
      heading: "Products",
      list: ["Run", "Publish", "Deploy"],
    },
    {
      heading: "Developers",
      list: ["Documentation", "Runtime", "Registry", "Deploy"],
    },
  ];
  const footerLinks = ["Imprint", "Privacy", "Terms"];
  return (
    <footer className=" pt-4">
      <div className="py-6 pb-0  sm:pt-0">
        <div className="flex justify-between pb-16 pl-20 sm:pl-[25px]  items-center sm:flex-col w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 p-5  ">
          <div className=" mt-[-30px] md:mb-0 sm:hidden ">
            <div className="flex items-center">
              <Image src={Logo} alt="" />
            </div>
            <ul className=" font-medium text-base pt-6 opacity-70">
              <li className="mb-1">
                <span>Making software</span>
              </li>
              <li>
                <span>universally accessable</span>
              </li>
            </ul>
            <div className="flex items-center opacity-50 mt-4 space-x-4 sm:justify-center sm:mt-0">
              {icons.map((e) => (
                <Image src={e} alt="" />
              ))}
            </div>
          </div>
          <div></div>
          <div className="flex w-full max-w-[600px]  sm:flex-col justify-between ">
            {FooterList.map((data) => {
              return (
                <div className="flex-col">
                  <h2 className="mb-6 text-base font-semibold">
                    {data.heading}
                  </h2>
                  {data?.list.map((e) => {
                    return (
                      <ul className="text-base font-semibold opacity-50">
                        <li className="mb-4">{e}</li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
            <div className="hidden md:block pt-[50px]  ">
              <div className="flex items-center">
                <Image src={Logo} alt="" />
              </div>
              <ul className=" font-medium text-base py-6 opacity-70">
                <li className="mb-1">Making software universally accessable</li>
              </ul>
              <div className="flex items-center opacity-50 mt-4 space-x-4  sm:mt-0">
                {icons.map((e) => (
                  <Image src={e} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-full" />

        <div className="flex mt-4 space-x-6 sm:justify-left pl-20 sm:pl-[25px] w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12  ">
          {footerLinks.map((e) => (
            <ul className=" font-medium text-base opacity-50">
              <li className="mb-4 flex-1 hover:underline">{e}</li>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
