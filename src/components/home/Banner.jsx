import BannerImage from '../../assets/banner.svg'


const Banner = () => {
    return (
      <div className="bg-[#F7F8FA] py-5">
        <div className="max-w-[1110px] mx-auto text-center">
        
          <h2 className="text-[50px] font-bold text-[#333] mb-4">
            Search Engine Optimisation & <br/> Marketing
          </h2>
  
         
          <p className="text-[17px] text-gray-600 mb-8 mx-auto">
            Simple is a simple template with a creative design that solves all your marketing and SEO queries.
          </p>
  
          {/* Buttons */}
          <div className="flex space-x-4 mb-8 justify-center">
            <a
              href="/get-started"
              className="bg-[#FEC4AF] text-[#FC7341] px-6 py-3 rounded-md hover:text-[#FC7341] hover:bg-transparent hover:border-2 hover:border-[#FC7341] transition duration-300"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="bg-[#B7EDDD] text-[#5ED6B3] px-6 py-3 rounded-md hover:text-[#5ED6B3] hover:bg-transparent hover:border-2 hover:border-[#5ED6B3] transition duration-300"
            >
              Learn More
            </a>
          </div>
  
          {/* Image */}
          <div className="w-full flex justify-center">
            <img
              src={BannerImage} 
              alt="Banner Image"
            
            />
          </div>
        </div>
      </div>
    );
  };

  export default Banner;