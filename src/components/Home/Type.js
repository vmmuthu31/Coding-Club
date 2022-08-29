import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Python...",
          "Javascript...",
          "AI/ML...",
          "Blockchain...",
          "DataScience...",
          "Mern Stack...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
