import React from 'react';
import ContactUsImage from '../../assets/contactus.jpg';

const ContactUs = () => {
  return (
    <div className="relative w-[1280px] h-[292px] mx-auto mb-10">
      {/* Banner Image */}
      <img 
        src={ContactUsImage}
        alt="Banner Image" 
        className="w-full h-full object-cover" 
      />
      
      {/* Text and Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-sm" >
        <div className="text-center text-white">
          <h2 className="text-[25px] font-bold mb-4">Do you have any projects? <br/>Contact Us</h2>
          <a href="#contact" className="bg-white text-[14px]  text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white  py-2 px-6 rounded-full transition duration-300">
            Contact Us
          </a>
   
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
