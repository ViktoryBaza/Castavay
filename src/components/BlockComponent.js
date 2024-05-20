import React from "react";
import "../styles/BlockComponent.css";

const BlockComponent = ({imageSrc, num, title, main}) => {
  return (
    <div className="blockComponent">
      <img src={imageSrc} />
      <div className="blockComponent-text">
        <div className="Gear">Gear</div>
        <div className='Episode_container'>
            <div className="Episode">Episode</div>
            <div className="num">{num}</div>
        </div>
        <div className="component_title">{title}</div>
        <div className="main_text">{main}</div>
        <button>View Episode Details</button>
      </div>
    </div>
  );
};

export default BlockComponent;
