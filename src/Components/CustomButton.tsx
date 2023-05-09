import Image from "next/image";
import React from "react";

interface IProps {
  label: string;
  iconLeft?: any;
  arrowIcon?: any;
}

const CustomButton = ({ label, iconLeft, arrowIcon }: IProps) => {
  return (
    <div>
      <button className="py-[10px] pl-[24px] pr-[20px] rounded-[56px] bg-[#0F0518] text-white text-2xl font-semibold w-fit flex gap-2 items-center ">
        <Image src={iconLeft} alt="#" />
        {label}
        <Image src={arrowIcon} width={12} height={12} className="ml-2" alt="" />
      </button>
    </div>
  );
};

export default CustomButton;
