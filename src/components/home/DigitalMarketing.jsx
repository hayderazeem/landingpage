import React from 'react';
import Image from '../../assets/digitalmarketing.png';

const DigitalMarketingSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4 flex justify-between items-center">
      
      {/* Left Side (Text) */}
      <div className="w-full lg:w-1/2 text-left">
        <h2 className="text-[30px] font-medium text-gray-800 mb-4">
          We Offer a Full Range of <br/> Digital Marketing Services!
        </h2>
        <p className="text-[15px] text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, tincidunt <br/>
          vestibulum. Fusce egeabus consectetuer <br/> turpis, suspendisse.
        </p>
        <p className="text-[15px] font-semibold text-gray-600">
          Lorem ipsum dolor sit amet, tincidunt <br/> vestibulum. Fusce egeabus consectetuer
        </p>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
        <img
          src={Image}
          alt="Digital Marketing"
          className="w-[406px] h-[436px] object-cover "
        />
      </div>

    </div>
  );
};

export default DigitalMarketingSection;
