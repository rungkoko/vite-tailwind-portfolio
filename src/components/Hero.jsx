import React, { useRef } from "react";
import my2 from "/src/images/profile.jpg";
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
        <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold pt-[60px] md:pt-0">
          <span className="text-cyan-600 md:text-6xl text-5xl block">
            Hello!
            <br />
          </span>
          <span className="block"><Type /><br /></span>
        </h1>

          <div className="w-full flex items-center justify-center mt-6 md:mt-0">
          <div className="flex items-center justify-center w-full">
  <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] flex-shrink-0">
    <img
      src={my2}
      alt=""
      className="object-cover w-full h-full rounded-full md:rounded-none"
    />
  </div>
</div>

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
