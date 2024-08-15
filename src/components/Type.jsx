import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["I'm Rungchukiat Klangkeaw"],
        autoStart: true,
        loop: false,  // Disable looping
        delay: 50,    // Speed of typing
        deleteSpeed: Infinity, // Prevent deletion by setting deleteSpeed to Infinity
      }}
    />
  );
}

export default Type;
