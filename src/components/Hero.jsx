import React, { useRef } from "react";
import my2 from "/src/images/435266867_2212125212485152_8945768942018293214_n.jpg";
import Type from "./Type";

const socialMediaLinks = [
  "https://www.instagram.com/_aaaryaan__/",
  "https://github.com/aryyan0701",
  "https://www.linkedin.com/in/aryan-kadam-568083204/",
  "https://twitter.com/aaryyan_",
];

const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const social_media = [
    "logo-instagram",
    "logo-github",
    "logo-linkedin",
    "logo-twitter",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center justify-center"
    >
      <div className="flex-1 flex flex-col items-center text-center md:text-left">
        <div className="relative flex flex-col items-center md:items-start">
          <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl block">
            <br />
              Hello!
              <br />
            </span>
            <span className="block"><Type /><br /></span>
          </h1>
          <div className="flex-1 flex items-center justify-center mt-6 md:mt-0 w-full">
            <img
              src={my2}
              alt=""
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-48 md:h-80 lg:h-80 object-cover rounded-full md:rounded-none"
            />
          </div>
          <div className="mt-8 text-3xl flex items-center justify-center gap-5">
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
