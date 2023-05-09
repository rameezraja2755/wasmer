import React from "react";

interface IProps {
  label: string;
  icon?: any;
}

const Button = ({ label, icon}: IProps) => {
  return (
    <>
    <button className="rounded-[72px]  bg-black text-white  pt-1 pb-1 px-3 font-semibold text-base w-[111px] ">
      {label}
      {icon}
    </button>
    </>
  );
};

export default Button;
