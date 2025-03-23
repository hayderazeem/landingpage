import React from 'react';
import ServiceImage from '../../assets/servicessection.png';

const ServicesSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4 flex justify-between items-center gap-60">
      {/* Left Side (Image) */}
      <div className="w-full lg:w-1/2 flex justify-center ">  {/* Added margin-right */}
        <img
          src={ServiceImage} // New image
          alt="Services"
          className="w-[362px] h-[433px] object-cover"
        />
      </div>

      {/* Right Side (Text) */}
      <div className="w-full lg:w-1/2 text-left ">
        <h2 className="text-[30px] font-bold text-gray-800 mb-4">
          Leading Digital Agency <br/> for Business Solution.
        </h2>
        <p className="text-[15px] text-gray-600 mb-6">
        Power-packed with impressive <br/>features and well-optimized, this <br/>template is designed to provide the <br/> best performance in all circumstances.        </p>
        <p className="text-[15px] font-semibold text-gray-600 mb-6">
        Its smart features make it a powerful <br/> stand-alone website building tool.

</p>
{/* Contact Button */}
<a
          href="/Readmore"
          className="bg-[#1998FF] text-white w-[119.391px] h-[43px] flex justify-center items-center rounded-sm hover:text-[#1998FF] hover:bg-transparent hover:border-2 hover:border-[#1998FF] transition duration-300"        >
          Readmore
        </a>
      </div>
    </div>
  );
};

export default ServicesSection;
