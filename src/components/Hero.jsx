import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-12 lg:py-12">
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between gap-6 lg:gap-12 max-sm:flex-col">
          <div className="w-full max-w-xl flex flex-col justify-center space-y-4 lg:w-2/3 lg:order-first">
            <div className="space-y-2">
              <h2 className="text-4xl text-[#00df9a] font-extrabold max-sm:text-center md:text-3xl max-md:text-2xl  max-sm:text-2xl min-[600px]:whitespace-nowrap">
                Welcome to Our Platform
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are dedicated to providing you with the best experience
                possible. Let's explore new possibilities together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[630px]:flex-row">
              <a href="#services">
                <button className="w-full inline-flex h-10 items-center justify-center rounded-md bg-[#00df9a] px-8 text-sm font-medium text-black-50 shadow transition-colors hover:bg-blue-900 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Get Started
                </button>
              </a>
            </div>
          </div>
          <div className="w-full ">
            <img
              alt="Welcome Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center max-sm:w-full"
              height="310"
              src="/back-1.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
