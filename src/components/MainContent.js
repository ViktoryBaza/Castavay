import React from "react";
import "../styles/MainContent.css";
import negr from "../imag/negr.svg";
import next from "../imag/next.png";
import icon1 from "../imag/icon1.png";
import icon2 from "../imag/icon2.png";
import icon3 from "../imag/icon3.png";
import icon4 from "../imag/icon4.png";
import icon5 from "../imag/icon5.png";

const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="mainContent-img">
        <img src={negr} width={650} height={873} />
      </div>
      <div className="mainContent-text">
        <div className="mainContent-text_title">Take your podcast to the</div>
        <div className="mainContent-container">
          <div className="maimContent-next">
            <div className="mainContent-next_text">next</div>
            <img src={next} />
          </div>
          <div className="maimContent-level">level</div>
        </div>
        <div className="mainContent-text-conteiner">
          <div className="mainContent-text_listen">Listen on</div>
          <div className="mainContent-text_link">
            <img src={icon1} />
            <img src={icon2} />
            <img src={icon3} />
            <img src={icon4} />
            <img src={icon5} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
