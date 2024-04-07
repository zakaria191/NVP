import React from "react";
import { Link } from "react-router-dom";

export const IndustryExpertise = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10">
      <div className="w-full text-center">
        <h2 className="my-8 text-4xl font-bold md:text-4xl">
          Industry Expertise
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <Link to="/agriculture">
            <div class="relative">
              <img className="w-full h-[240px]" src="./agriculture.webp" />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Agriculture
              </div>
            </div>
            <div className="px-6 py-4 mb-auto">
              <span className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                Agriculture
              </span>
              <p className="text-gray-500 text-sm mb-5">
                Step into the fertile fields of Moroccan agriculture with New
                Venture Partners!
              </p>
            </div>
          </Link>
          <Link to="/agriculture">
            <div className="px-6 py-3 flex justify-center bg-gray-100 text-blue-500 font-bold hover:text-blue-700">
              <span>Learn more</span>
            </div>
          </Link>
        </div>

        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <Link to="/water-management">
            <div class="relative">
              <img className="w-full h-[240px]" src="./water-management.webp" />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                Water management
              </div>
            </div>
            <div className="px-6 py-4 mb-auto">
              <span className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                Water management
              </span>
              <p className="text-gray-500 text-sm">
                Dive into the waves of opportunity with New Venture Partners as
                we navigate Morocco's water management landscape.
              </p>
            </div>
          </Link>
          <Link to="/water-management">
            <div className="px-6 py-3 flex justify-center bg-gray-100 text-blue-500 font-bold hover:text-blue-700">
              <span>Learn more</span>
            </div>
          </Link>
        </div>

        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <Link to="/energy-transition">
            <div class="relative">
              <img
                className="w-full h-[240px]"
                src="./energy-transition.webp"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                energy transition & decarbonization
              </div>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                Energy transition & Decarbonization
              </a>
              <p className="text-gray-500 text-sm">
                Shine a light on the future of energy with New Venture Partners
                as we lead the charge towards Morocco's renewable revolution.
              </p>
            </div>
          </Link>
          <Link to="/energy-transition">
            <div className="px-6 py-3 flex justify-center bg-gray-100 text-blue-500 font-bold hover:text-blue-700">
              <span>Learn more</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
