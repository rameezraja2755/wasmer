import React, { useState } from "react";
import Button from "./Button";
import Logo from "../../public/svgicon/Logo.svg";
import Hamburger from "../../public/svgicon/Hamburger.svg";
import SearchIcon from "../../public/svgicon/SearchIcon.svg";
import Image from "next/image";
import DropDownCard from "./DropDownCard";
import DevelopersCard from "./DevelopersCard";

const Navbar = () => {
  const [products, setProducts] = useState(false);
  const [developers, setDevelopers] = useState(false);

  return (
    <section className=" flex justify-between  items-center py-5 px-8  md:px-4">
      <div className="flex items-center gap-8  w-full ">
        <div className="h-[32px]">
          <Image src={Logo} alt="logo" className="max-w-[unset]" />
        </div>
        <div className="relative w-full max-w-[379px] md:hidden py-[10px] ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none opacity-50">
            <Image src={SearchIcon} alt="" />
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-[#0f051814] border outline-none border-gray-300 text-gray-900 text-[16px] font-semibold text-base  rounded-lg block w-full pl-8 py-1  dark:placeholder-gray-400"
            placeholder="Search for packages"
            required
          />
        </div>
      </div>
      <div className="flex items-center gap-[32px] relative">
        <div className=" flex gap-5 md:hidden ">
          <h3
            className="text-base font-semibold opacity-50 hover:underline"
            onClick={() => {
              setProducts(!products);
              setDevelopers(false);
            }}
          >
            Products
          </h3>
          <h3
            className="text-base font-semibold opacity-50 hover:underline"
            onClick={() => {
              setDevelopers(!developers);
              setProducts(false);
            }}
          >
            Developers
          </h3>
          <h3 className="text-base font-semibold opacity-50 hover:underline">
            Packages
          </h3>
          <h3 className="text-base font-semibold opacity-50 hover:underline">
            Blog
          </h3>
        </div>
        <div className="flex items-center gap-6">
        {/* className="w-[111px] text-basic" */}
          <Button label={"Sign  Up"}  />
          <Image src={Hamburger} className="hidden md:block" alt="" />
        </div>
      </div>
      {products && (
        <div className=" absolute right-[20%] top-16 ">
          <DropDownCard />
        </div>
      )}
      {developers && (
        <div className=" absolute top-16 right-[10%]">
          <DevelopersCard />
        </div>
      )}
    </section>
  );
};

export default Navbar;
