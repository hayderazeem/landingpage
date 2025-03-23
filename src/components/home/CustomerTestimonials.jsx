import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../../App.css'
import Face1 from '../../assets/face1.jpg';
import Face2 from '../../assets/face2.jpg';
import Face3 from '../../assets/face3.jpg';
import Face4 from '../../assets/face4.jpg';
import Face5 from '../../assets/face5.jpg';
import Face6 from '../../assets/face6.jpg';
import Face7 from '../../assets/face1.jpg';
import Face8 from '../../assets/face2.jpg';
import Face9 from '../../assets/face3.jpg';

const CustomerTestimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        What our customers have to say
      </h1>

      {/* Paragraph */}
      <p className="text-lg text-gray-600 mb-10">
        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
        consectetuer turpis, suspendisse.
      </p>

      {/* Swiper */}
      <div className="flex justify-center">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* Customer Testimonial Slides */}
          {[...Array(9)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="w-[342px] h-[356px] p-5 bg-[#F3F7FB] rounded-md flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <img src={Face1} width="89" height="89" alt="Customer" className="rounded-full mb-4" />
                <p className="m-0 py-3 text-[15px]">
                  Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
                </p>
                <div className="mx-auto w-[73px] h-[3px] bg-red-600 my-3"></div>
                <h6 className="pt-3 text-[18px] font-semibold">Cody Lambert</h6>
                <h6 className="m-0 text-[17px]">Marketing Manager</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
 
  );
};

export default CustomerTestimonials;
