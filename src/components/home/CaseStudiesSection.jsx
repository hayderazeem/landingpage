import React from 'react';
import BoxImage1 from '../../assets/onlinemarketing.svg';  
import BoxImage2 from '../../assets/webdevelopment.svg';  
import BoxImage3 from '../../assets/webdesigning.svg';  
import BoxImage4 from '../../assets/softwaredevelopment.svg';  

const CaseStudiesSection = () => {
  // Array of case study data
  const caseStudies = [
    {
      image: BoxImage1,
      title: 'Case Study 1',
      category: 'Online Marketing',
      description: 'SEO, Marketing',
      bgColor: '#1a1c27',
      textColor: '#3b1da5'
    },
    {
      image: BoxImage2,
      title: 'Case Study 2',
      category: 'Web Development',
      description: 'Developing, Designing',
      bgColor: '#db7f28',
      textColor: '#3b1da5'
    },
    {
      image: BoxImage3,
      title: 'Case Study 3',
      category: 'Web Designing',
      description: 'Designing, Developing',
      bgColor: '#85d5ee',
      textColor: '#3b1da5'
    },
    {
      image: BoxImage4,
      title: 'Case Study 4',
      category: 'Software Development',
      description: 'Developing, Designing',
      bgColor: '#f05dae',
      textColor: '#3b1da5'
    }
  ];

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
        {caseStudies.map((study, index) => (
          <div key={index} className="w-[285px] h-[343px] flex flex-col justify-center items-center group">
            <div className="relative w-[255px] h-[256px] flex justify-center items-center" style={{ backgroundColor: study.bgColor }}>
              <img
                src={study.image}
                alt={`Case Study ${index + 1}`}
                className="object-cover rounded-lg"
              />
              {/* Overlay with text, this will show on hover */}
              <div className="absolute inset-0 bg-[#3b1da5] bg-opacity-90 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition duration-300">
                <div className="text-center flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                  <p className="text-sm mt-2">{study.description}</p>
                  <a
                    href="/contact"
                    className="bg-[#ffffff] text-black w-[94px] mt-4 h-[32px] text-[12px] flex justify-center items-center rounded-md hover:text-[#ffffff] hover:bg-[#ff3434] transition duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info Below the Image */}
            <div className="mt-4 text-center">
              <h4 className="font-semibold text-gray-800 group-hover:text-[#3b1da5]">
                {study.category}
              </h4>
              <p className="text-sm text-gray-600 group-hover:text-[#3b1da5]">
                {study.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
