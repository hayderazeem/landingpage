import React from "react";
import Logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className="w-full bg-[#F7F8FA] py-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        
        <div className="text-xl font-bold text-blue-600 mr-[486.6px]">
          <img
                        src={Logo} 
                        alt="Logo Image"
                      
                      />
        </div>

        {/* Menu Bar */}
        <nav className="flex space-x-8">
  {/* Navigation Links as Buttons */}
  <button
    
    className="bg-transparent text-gray-700 font-semibold py-2   hover:text-red-600  transition duration-300"
  >
    Home
  </button>
  <button
  
    className="bg-transparent text-gray-700 font-semibold py-2   hover:text-red-600 transition duration-300"
  >
    About
  </button>
  <button
   
    className="bg-transparent text-gray-700 font-semibold py-2  hover:text-red-600 transition duration-300"
  >
    Blog
  </button>
  <button
    
    className="bg-transparent text-gray-700 font-semibold py-2 hover:text-red-600 transition duration-300"
  >
    Testimonials
  </button>
</nav>

{/* Contact Button */}
<button
  
  className="bg-[#1998FF] text-white w-[119.391px] h-[43px] flex justify-center items-center rounded-md hover:text-[#1998FF] hover:bg-transparent hover:border-2 hover:border-[#1998FF] transition duration-300"
>
  Contact
</button>

      </div>
    </div>
  );
};


export default Navbar;
