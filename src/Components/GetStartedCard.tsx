import React from "react";
const GetStartedCard = () => {
  return (
    <section className="card-section flex justify-center pt-[70px]">
      <div className="card pt-16 text-4xl pl-20 pb-5 sm:py-6 sm:pl-4  mt-10 mb-10 bg-gray-900 rounded-lg shadow  w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12">
        <a href="#">
          <h2 className=" mb-4 text-white text-[48px] font-semibold ">
            Get Started
          </h2>
        </a>
        <p className="mb-3 text-white text-[28px] opacity-70 font-semibold md:pr-2  sm:text-[20px] pb-20 sm:pb-4 ">
          Join the vibrant Wasmer community. Create your first package, run it
          from the shell and deploy it to the Edge
        </p>
        <div className="flex justify-end pr-[32px] ">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-white rounded-full shadow w-[45px] h-[45px]"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0.44043V10.0577C12.5 10.48 12.3323 10.8849 12.0337 11.1835C11.0411 12.1761 9.34308 11.4918 9.31609 10.0883L9.24328 6.30252L3.64769 11.8981C2.92761 12.6182 1.76013 12.6182 1.04006 11.8981C0.320863 11.1789 0.319853 10.0132 1.0378 9.29274L6.68616 3.62477L2.86016 3.58822C1.46524 3.57489 0.775858 1.88782 1.76226 0.901423C2.05743 0.606254 2.45776 0.44043 2.8752 0.44043H12.5Z"
                fill="#0F0518"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCard;
