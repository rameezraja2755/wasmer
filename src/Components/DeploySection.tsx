import React from "react";
import Image from "next/image";
import WordPress from "../../public/images/wordpress.png";
import GetStarted from "../../public/images/getstarted.png";
import Django from "../../public/images/django.png";
import DjangoLogo from "../../public/images/djangoLogo.png";
import PublishIcon from "../../public/svgicon/Publish.png";
import Diveder from "../../public/images/DivederHero.png";
import CustomButton from "./CustomButton";
import VerceIcon from "../../public/svgicon/VerceIcon.svg";
import DeployMobileImg from "../../public/images/DeployMobileImg.png";
import Card from "./Card";

const Deploy = () => {
  const product = [
    "No servers to maintain",
    "Instant cold starts",
    "Infinite scalability",
  ];
  return (
    <section className="justify-center items-center ">
      <div className="flex flex-col items-center justify-center md:px-4">
        <Image src={Diveder} alt="" />
        <CustomButton label={"Deploy"} iconLeft={PublishIcon} />
        <h2 className=" text-5xl font-semibold pt-6 sm:text-[36px] ">
          Above the clouds
        </h2>
        <p className=" text-[22px] font-medium  leading-140 text-center opacity-50  pt-4 max-w-720">
          Get the scalability of serverless and the reusability of cloud. Deploy
          to the edge, save your users time and yourself money.{" "}
        </p>
      </div>
      <div className=" hidden md:flex md:justify-end">
        <Image src={DeployMobileImg} alt="" />
      </div>

      <section className="deploy-section bg-center bg-no-repeat mt-[64px]">
        <div className="flex justify-center items-center mt-4 gap-5 md:hidden">
          <div className="two-cards bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="">
              <Image
                className="twoCards-imgs"
                src={GetStarted}
                alt="My image"
              />
            </div>
            <hr className="getStarted-hr border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-full mt-0 mb-0" />
            <div className="flex justify-center items-center gap-3 py-[21px]">
              <Image src={WordPress} alt="My image" />
              <span className="font-semibold text-2xl text-black">
                Wordpress
              </span>
            </div>
          </div>

          <div className="two-cards bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="">
              <Image className="twoCards-imgs" src={Django} alt="My image" />
            </div>
            <div className="flex justify-center items-center gap-3 py-[21px]  ">
              <Image src={DjangoLogo} alt="My image" />
              <span className="font-semibold text-2xl text-black ">
                Django app
              </span>
            </div>
          </div>
        </div>
        <div className=" flex gap-6 justify-center mt-8 flex-wrap ">
          {product.map((e) => (
            <h3 className="text-[22px] font-semibold text-2xl text-white">
              {e}
            </h3>
          ))}
        </div>
        <div className="md:px-4">
          <Card text={"All languages ,fully containerized & colllaborative"} />
        </div>
        <div className=" flex flex-col opacity-50 py-8 gap-6 items-center justify-center ">
          <p className=" text-center text-[22px] font-medium  ">
            “This programming tool makes it easier for apps to <br /> work
            anywhere”
          </p>
          <Image src={VerceIcon} alt="" />
        </div>
      </section>
    </section>
  );
};

export default Deploy;
