import React from "react";
import { RiHomeGearFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-violet-950 p-4 sm:p-6">
      <div className="max-w-full sm:max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="relative border-l border-gray-200">
          <div className="mb-8 ml-6 flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
              <RiHomeGearFill size={30} color="white" />
            </div>
            <div className="ml-4">
              <time className="block text-sm text-gray-500">2024 - atual</time>
              <h3 className="text-lg font-semibold text-blue-600">
                THMAX Ferramentas
              </h3>
              <h4 className="text-md text-gray-500">São Paulo, BR</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="mb-8 ml-6 flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
              <FaTools size={20} color="white" />
            </div>
            <div className="ml-4">
              <time className="block text-sm text-gray-500">1950 - 2008</time>
              <h3 className="text-lg font-semibold text-blue-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <h4 className="text-md text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="mb-8 ml-6 flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
              <IoBusiness size={20} color="white" />
            </div>
            <div className="ml-4">
              <time className="block text-sm text-gray-500">2008 - 2024</time>
              <h3 className="text-lg font-semibold text-blue-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <h4 className="text-md text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="ml-6 flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
              <MdOutlineAttachMoney size={25} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;