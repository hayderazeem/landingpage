import React from 'react';
import Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <footer className="bg-white text-[#6E6E6E] py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Contact Information */}
        <div className="col-span-1">
          <img src={Logo} alt="Logo" className="pb-2 mx-auto md:mx-0" />
          <div className="pt-2 text-[15px]">
            <p className=" m-0">mikayla_beer@feil.name</p>
            <p className="m-0">906-179-8309</p>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="col-span-1">
          <h5 className="text-[20px] font-semibold text-black pb-2">Get in Touch</h5>
          <p className="text-[15px]">Don’t miss any updates of our <br/>new templates and extensions!</p>
          <form>
            <input
              type="text"
              className="w-[255px] h-[35px] text-[14px] mt-2 p-2 rounded-md border border-gray-300"
              id="Email"
              placeholder="Email id"
            />
          </form>
          <div className="pt-3">
            <button className="bg-[#221e1e] text-[14px] text-white py-2 px-6 rounded-md hover:bg-transparent hover:text-[#221e1e] hover:border-2 hover:border-[#221e1e] transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Our Guidelines */}
        <div className="col-span-1">
          <h5 className="text-[20px] font-semibold text-black pb-2">Our Guidelines</h5>
          <a href="#" className="block m-0 pb-2 text-[15px]">Terms</a>
          <a href="#" className="block m-0 pt-1 pb-2 text-[15px]">Privacy policy</a>
          <a href="#" className="block m-0 pt-1 pb-2 text-[15px]">Cookie Policy</a>
          <a href="#" className="block m-0 pt-1 text-[15px]">Discover</a>
        </div>

        {/* Our Address */}
        <div className="col-span-1">
          <h5 className="text-[20px] font-semibold text-black pb-2">Our Address</h5>
          <p className="text-[15px]">518 Schmeler Neck<br />Bartlett, Illinois</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="#" className="text-muted"><span className="mdi mdi-facebook"></span></a>
            <a href="#" className="text-muted"><span className="mdi mdi-twitter"></span></a>
            <a href="#" className="text-muted"><span className="mdi mdi-instagram"></span></a>
            <a href="#" className="text-muted"><span className="mdi mdi-linkedin"></span></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center pt-12 pb-2">
      <div className="mx-auto w-[1280px] h-[1px] bg-gray-400 my-3"></div>
        <p className="text-[15px] text-gray-400">
        Copyright © 2019 Bootstrapdash. All rights reserved. Distributed by ThemeWagon.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
