import React from "react";

// components
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Home/Footer";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";
import Feedback from "../Components/Home/feedback.jsx";
import TemplatesSlider from "../Components/Home/TemplatesSlider.jsx";
import Sponsor from "../Components/Home/Sponsor.jsx";
import Faq from "../Components/Home/Faq.jsx";
import NewsBoard from "../Components/Home/NewsBoard.jsx";


const HomePage = () => {

    return (
        <>
            <NewsBoard/>
            <Navbar/>
            <div className='overflow-x-hidden'>
                <MobileNavbar/>
                <Hero/>
                <Feedback/>
                <TemplatesSlider/>
                <Faq/>
                <Sponsor/>
                <Footer/>
            </div>
        </>
    );
};

export default HomePage;
