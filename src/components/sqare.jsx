import React from "react";
import "./square.css";

const Square = ({ id, value, boxClicked }) => {
  return (
    <div>
      <button className="individual-button" onClick={boxClicked}>
        {value}
      </button>
    </div>
  );
};

export default Square;
