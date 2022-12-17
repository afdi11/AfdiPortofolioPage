import React from 'react';
import Typewriter from "typewriter-effect";

function Type() {
    return (
      <Typewriter
        options={{
          strings: [
            "Back-End Engineer",
            "Graduate Student",
            "Full Time Learner",
            "Software Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 60,
        }}
      />
    );
  }
  
  export default Type;