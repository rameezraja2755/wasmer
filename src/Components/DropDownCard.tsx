import React from "react";
import Frame from "../../public/svgicon/Frame .svg";
import TopArrow from "../../public/svgicon/TopArroe.svg";
import DeployIcon from "../../public/svgicon/Deploy.png";
import PublishIcon from "../../public/svgicon/Publish.png";
import Image from "next/image";

const DropDownCard = () => {
  const products = [
    { icon: Frame, name: "Run", content: "Run any code anywhere" },
    {
      icon: PublishIcon,
      name: "Publish",
      content: "Create, publish, collaborate",
    },
    { icon: DeployIcon, name: "Deploy", content: "Deploy above the clouds" },
  ];
  return (
    <section className="dropdown-card w-full max-w-[347px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flow-root">
        <ul role="list" className=" divide-gray-200 dark:divide-gray-700">
          <li>
            {products.map((data) => {
              return (
                <div className="flex items-center space-x-4 py-3 ">
                  <div className="flex-shrink-0 bg-black rounded-full w-[54px] h-[54px] flex items-center justify-center">
                    <Image src={data.icon} className="w-[34px] h-[34px] " alt=""/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold">{data.name}</p>
                    <p className="text-base font-medium opacity-50">
                      {data.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DropDownCard;
