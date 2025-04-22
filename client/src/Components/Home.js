import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import MarqueeText from "./MarqueeText";
import About from "./About";
import Contact from './Contact';
import FAQ from "./FAQ";



const Home = () => {

    return (
        <>
            <Navbar/>
            {/* 
                https://www.kmcgov.in/KMCPortal/jsp/KMCPortalHome1.jsp --> refer for design 
                https://jadavpuruniversity.in/          --> refer for design
                https://cgrs.uhbvn.org.in/              --> refer for design
            */}
            <Main/>
            <MarqueeText/>
            <div id="about" className="z-0">
                <About/>
            </div>
            <div id="faq">
                <FAQ/>
            </div>
            <hr/>
            <div id="contact">
                <Contact/>
            </div>
            <Footer/>
            
        </>
    );

}

export default Home;