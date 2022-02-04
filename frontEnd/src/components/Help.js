import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { isMobile } from "react-device-detect";

import help from "../../src/pics/help.png";

const help_style = {
  position: "fixed",
  top: "5%",
  left: isMobile ? "5%" : "50%",
  // padding: "50px",
  zIndex: 1000,
};

const overlay_style = {
  position: "fixed",
  top: "0",
  bottom: "0",
  right: "0",
  left: "0",
  backgroundColor: "rgba(0,0,0,0.7)",
};

const Help = ({ isHelp, onClose }) => {
  if (!isHelp) return null;
  let draggableCancel = isMobile ? ".close-btn" : "";

  return ReactDOM.createPortal(
    <>
      <div style={overlay_style} />
      <Draggable cancel={draggableCancel}>
        <div className="help-window" style={help_style}>
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">About this game</div>
              <div className="title-bar-controls">
                <button
                  className="close-btn"
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="window-body">
              <div style={{ fontSize: "1rem" }}>
                Just click the box that has the color different from the others.
                <br />
                Remember you only have 5 seconds for each round.
                <br />
                <br />
                For example,
                <br />
                you need to click the green box to score.
                <br />
                <img id="help" src={help} alt="" />
                <div className="status-bar">
                  <p className="status-bar-field">©Jennie Huang 2022</p>
                  <p className="status-bar-field">v-1.0.0</p>
                  <p className="status-bar-field">CPU Usage: 1%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </>,
    document.getElementById("portal")
  );
};

export default Help;
