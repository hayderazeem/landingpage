import React from 'react'
import Navbar from '../../components/home/Navbar';
import Banner from '../../components/home/Banner';
import WorksSection from '../../components/home/Worksection';
import DigitalMarketingSection from '../../components/home/DigitalMarketing';
import ServicesSection from '../../components/home/ServicesSection';
import CaseStudiesSection from '../../components/home/CaseStudiesSection';
import CustomerTestimonials from '../../components/home/CustomerTestimonials';
import ContactUs from '../../components/home/ContactUs';
import Footer from '../../components/home/Footer';

 function Home() {
  return (


    <>
    <div>
        <Navbar/>
        <Banner/>
        <WorksSection/>
        <DigitalMarketingSection/>
        <ServicesSection/>
        <CaseStudiesSection/>
        <CustomerTestimonials/>
        <ContactUs/>
        <Footer/>
    </div>
    
    </>
  
)
}

export default Home;