import React from "react";

const colorBox = ({ firstBoxStyle, classes, clickFunction }) => {
  return (
    <div
      style={firstBoxStyle}
      className={classes}
      onClick={clickFunction}
    ></div>
  );
};

export default colorBox;
