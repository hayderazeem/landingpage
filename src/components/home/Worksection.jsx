import React from "react";
import Speed from '../../assets/speedOptimisation.svg';
import Seo from '../../assets/seo.svg';
import Marketing from '../../assets/marketing.svg';





const WorksSection = () => {

  const data = [
    {
      image: Speed,
      title: "Speed Optimisation",
      description: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
      link: "/read-more"
    },
    {
      image: Seo,
      title: "SEO and Backlinks",
      description: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
      link: "/read-more"
    },
    {
      image: Marketing,
      title: "Content Marketing",
      description: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
      link: "/read-more"
    }
  ];



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
        {data.map((item, index) => (
          <div key={index} className="bg-white p-8 flex flex-col items-start">
            <img src={item.image} alt="Banner Image" className="mb-4" />
            <h3 className="text-[20px] font-semibold text-[#000] mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {item.description}
            </p>
            <a href={item.link} className="text-[#97A3BE] hover:text-[#FF0000] duration-300">
              Read More
            </a>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default WorksSection;
