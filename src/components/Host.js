import React from "react";
import "../styles/Host.css";
import negr2 from "../imag/negr2.svg";
import arrow from "../imag/arrow.png";

const Host = () => {
  return (
    <div className="host">
      <div className="host_text_container">
        <img src={arrow} className="arrow" />
        <div className="meet">Meet your host</div>
        <div className="title">Jacob Paulaner</div>
        <div className="text_block_one">
          Jacob has a background in audio engineering, and has been podcasting
          since the early days.
        </div>
        <div className="text_block_two">
          He’s here to help you level up your game by sharing everything he’s
          learned along the way.
        </div>
      </div>
      <img src={negr2} />
    </div>
  );
};

export default Host;
