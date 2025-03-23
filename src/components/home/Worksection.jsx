import React from "react";
import Speed from '../../assets/speedOptimisation.svg';
import Seo from '../../assets/seo.svg';
import Marketing from '../../assets/marketing.svg';


const WorksSection = () => {
  return (
    <div className="bg-white py-16 max-w-[1110px] mx-auto">
    
      <div className="  text-center">
       
        <h2 className="text-[35px] font-medium text-[#333] mb-4">
          How does it work?
        </h2>

        {/* Paragraph */}
        <p className="text-[17px] text-gray-600 mb-8 mx-auto">
          One theme that serves as an easy-to-use operational toolkit <br/> that meets customer's needs.
        </p>
</div>
        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="bg-white p-8  flex flex-col items-start">
              <img
                         src={Speed} 
                         alt="Banner Image"
                        className="mb-4"
                       />
            <h3 className="text-[20px] font-semibold text-[#000] mb-4">Speed <br/> Optimisation</h3>
            <p className="text-gray-600 mb-4 ">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
            </p>
            <a
              href="/read-more"
              className="text-[#97A3BE] hover:text-[#FF0000] duration-300"
            >
              Read More
            </a>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-8  flex flex-col items-start">
          <img
                         src={Seo} 
                         alt="Banner Image"
                        className="mb-4"
                       />
            <h3 className="text-[20px] font-semibold text-[#000] mb-4">SEO and <br/> Backlinks</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
            </p>
            <a
              href="/read-more"
              className="text-[#97A3BE] hover:text-[#FF0000] duration-300"
            >
              Read More
            </a>
          </div>

          {/* Box 3 */}
          <div className="bg-white p-8  flex flex-col items-start">
          <img
                         src={Marketing} 
                         alt="Banner Image"
                         className="mb-4"
                       
                       />            <h3 className="text-[20px] font-semibold text-[#000] mb-4">Content <br/> Marketing</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
            </p>
            <a
              href="/read-more"
              className="text-[#97A3BE] hover:text-[#FF0000] duration-300"
            >
              Read More
            </a>
          </div>
        </div>
     
    </div>
  );
};

export default WorksSection;
