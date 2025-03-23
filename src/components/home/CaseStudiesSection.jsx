import React from 'react';
import BoxImage1 from '../../assets/onlinemarketing.svg';  
import BoxImage2 from '../../assets/webdevelopment.svg';  
import BoxImage3 from '../../assets/webdesigning.svg';  
import BoxImage4 from '../../assets/softwaredevelopment.svg';  

const CaseStudiesSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      {/* Heading and Paragraph */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Case Studies
        </h2>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
          consectetuer turpis, suspendisse.
        </p>
      </div>

      {/* Case Studies Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Box 1 */}
        <div className="w-[285px] h-[343px] flex flex-col justify-center items-center group">
          <div className="relative w-[255px] h-[256px] flex justify-center items-center bg-[#1a1c27]">
            <img
              src={BoxImage1}
              alt="Case Study 1"
              className="object-cover rounded-lg"
            />
            {/* Overlay with text, this will show on hover */}
            <div className="absolute inset-0 bg-[#3b1da5] bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition duration-300">
              <div className="text-center flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold">Case Study 1</h3>
                <p className="text-sm mt-2 ">
                  Lorem ipsum dolor sit amet, tincidunt vestibulum.
                </p>
               
        <a
          href="/contact"
          className="bg-[#ffffff] text-black w-[94px] mt-4 h-[32px] text-[12px] flex justify-center items-center rounded-md hover:text-[#ffffff] hover:bg-[#ff3434]  transition duration-300"        >
          Contact
        </a>
              </div>
              
            </div>
          </div>

          {/* Additional Info Below the Image */}
          <div className="mt-4 text-center ">
            <h4 className="font-semibold text-gray-800 group-hover:text-[#3b1da5] ">
              Online Marketing
            </h4>
            <p className="text-sm text-gray-600 group-hover:text-[#3b1da5]">
              SEO, Marketing
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-[285px] h-[343px] flex flex-col justify-center items-center group">
          <div className="relative w-[255px] h-[256px] flex justify-center items-center bg-[#db7f28]">
            <img
              src={BoxImage2}
              alt="Case Study 1"
              className="object-cover rounded-lg"
            />
            {/* Overlay with text, this will show on hover */}
            <div className="absolute inset-0 bg-[#3b1da5] bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition duration-300">
              <div className="text-center flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold">Case Study 1</h3>
                <p className="text-sm mt-2">
                  Lorem ipsum dolor sit amet, tincidunt vestibulum.
                </p>
                <a
          href="/contact"
          className="bg-[#ffffff] text-black w-[94px] mt-4 h-[32px] text-[12px] flex justify-center items-center rounded-md hover:text-[#ffffff] hover:bg-[#ff3434]  transition duration-300"        >
          Contact
        </a>
              </div>
            </div>
          </div>

          {/* Additional Info Below the Image */}
          <div className="mt-4 text-center ">
            <h4 className="font-semibold text-gray-800 group-hover:text-[#3b1da5] ">
            Web Development
            </h4>
            <p className="text-sm text-gray-600 group-hover:text-[#3b1da5]">
            Developing, Designing
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-[285px] h-[343px] flex flex-col justify-center items-center group">
          <div className="relative w-[255px] h-[256px] flex justify-center items-center bg-[#85d5ee]">
            <img
              src={BoxImage3}
              alt="Case Study 1"
              className="object-cover rounded-lg"
            />
            {/* Overlay with text, this will show on hover */}
            <div className="absolute inset-0 bg-[#3b1da5] bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition duration-300">
              <div className="text-center flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold">Case Study 1</h3>
                <p className="text-sm mt-2">
                  Lorem ipsum dolor sit amet, tincidunt vestibulum.
                </p>
                <a
          href="/contact"
          className="bg-[#ffffff] text-black w-[94px] mt-4 h-[32px] text-[12px] flex justify-center items-center rounded-md hover:text-[#ffffff] hover:bg-[#ff3434]  transition duration-300"        >
          Contact
        </a>
                
              </div>
            </div>
          </div>

          {/* Additional Info Below the Image */}
          <div className="mt-4 text-center ">
            <h4 className="font-semibold text-gray-800 group-hover:text-[#3b1da5] ">
            Web Designing
            </h4>
            <p className="text-sm text-gray-600 group-hover:text-[#3b1da5]">
            Designing, Developing
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="w-[285px] h-[343px] flex flex-col justify-center items-center group">
          <div className="relative w-[255px] h-[256px] flex justify-center items-center bg-[#f05dae]">
            <img
              src={BoxImage4}
              alt="Case Study 1"
              className="object-cover rounded-lg"
            />
            {/* Overlay with text, this will show on hover */}
            <div className="absolute inset-0 bg-[#3b1da5] bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition duration-300">
              <div className="text-center flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold">Case Study 1</h3>
                <p className="text-sm mt-2">
                  Lorem ipsum dolor sit amet, tincidunt vestibulum.
                </p>
                <a
          href="/contact"
          className="bg-[#ffffff] text-black w-[94px] mt-4 h-[32px] text-[12px] flex justify-center items-center rounded-md hover:text-[#ffffff] hover:bg-[#ff3434]  transition duration-300"        >
          Contact
        </a>
              </div>
            </div>
          </div>

          {/* Additional Info Below the Image */}
          <div className="mt-4 text-center ">
            <h4 className="font-semibold text-gray-800 group-hover:text-[#3b1da5] ">
            Software Development
            </h4>
            <p className="text-sm text-gray-600 group-hover:text-[#3b1da5]">
            Developing, Designing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default CaseStudiesSection;
