import React, { useRef } from "react";
import my2 from "/src/images/profile.jpg";
import Type from "./Type";

const Hero = ({ language }) => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="flex py-2 md:py-5 md:flex-row flex-col items-center justify-center"
      style={{ paddingTop: '80px' }} // Adjust padding here
    >
      <div className="flex-1 flex flex-col items-center text-center md:text-left">
        <div className="relative flex flex-col items-center md:items-start">
          <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold pt-[60px] md:pt-0">
            <span className="text-cyan-600 md:text-6xl text-5xl block">
              {language === 'en' ? 'Hello!' : 'สวัสดีครับ!'}
              <br />
            </span>
            <span className="block"><Type language={language} /><br /></span>
          </h1>

          <div className="w-full flex items-center justify-center mt-4 md:mt-0">
            <div className="flex items-center justify-center w-full">
              <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] flex-shrink-0">
                <img
                  src={my2}
                  alt=""
                  className="object-cover w-full h-full rounded-full md:rounded-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
