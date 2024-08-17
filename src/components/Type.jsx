import React from "react";
import Typewriter from "typewriter-effect";

function Type({ language }) {
  const strings = {
    en: ["I'm Rungchukiat Klangkeaw"],
    th: ["ผม รุ่งชูเกียรติ คลังแก้ว"]
  };

  return (
    <Typewriter
      options={{
        strings: strings[language], 
        autoStart: true,
        loop: false, 
        delay: 50,
        deleteSpeed: Infinity,
      }}
    />
  );
}

export default Type;
