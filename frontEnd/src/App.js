import { useState } from "react";
import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import Help from "./components/Help";
import devtools from "../node_modules/devtools-detect/index.js";
import Draggable from "react-draggable";
import { isMobile } from "react-device-detect";

function App() {
  const [isOpen, setIsOpen] = useState(devtools.isOpen);

  // // // Check if it's open
  // // console.log("Is DevTools open:", devtools.isOpen);

  // // // Check it's orientation, `undefined` if not open
  // // console.log("DevTools orientation:", devtools.orientation);

  // Get notified when it's opened/closed or orientation changes
  window.addEventListener("devtoolschange", (event) => {
    setIsOpen(event.detail.isOpen);
    // console.log("Is DevTools open:", event.detail.isOpen);
    // console.log("DevTools orientation:", event.detail.orientation);
  });

  //------------------------------------------------------------------------------
  const [isHelp, setIsHelp] = useState(false);

  const [windowBodyDisplay, setWindowBodyDisplay] = useState("flex");
  const minimize = () => {
    if (windowBodyDisplay === "flex") {
      setWindowBodyDisplay("none");
    } else {
      setWindowBodyDisplay("flex");
    }
  };

  const [windowWidth, setWindowWidth] = useState("430px");
  const [label, setLabel] = useState("Maximize");
  const maximize = () => {
    if (windowWidth === "430px") {
      setWindowWidth("600px");
      setLabel("Restore");
    } else {
      setLabel("Maximize");
      setWindowWidth("430px");
    }
  };

  const [started, setStarted] = useState(false);

  return (
    <div>
      {!isMobile && (
        <>
          <Help
            isHelp={isHelp}
            onClose={() => {
              setIsHelp(false);
            }}
          ></Help>
          <Draggable cancel=".window-body">
            <div className="App">
              <div className="window" style={{ width: `${windowWidth}` }}>
                <div className="title-bar">
                  <div className="title-bar-text">welcome to color picker</div>
                  <div className="title-bar-controls">
                    <button
                      onClick={() => {
                        setIsHelp(true);
                      }}
                      aria-label="Help"
                    ></button>
                    <button onClick={minimize} aria-label="Minimize"></button>
                    <button onClick={maximize} aria-label={label}></button>
                    <button
                      onClick={() => {
                        setStarted(false);
                      }}
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div
                  className="window-body"
                  style={{ display: `${windowBodyDisplay}` }}
                >
                  {(!isOpen || isMobile) && (
                    <div className="close">
                      {!started && <HomePage setStarted={setStarted} />}
                      {started && <DashBoard setStarted={setStarted} />}
                    </div>
                  )}

                  {isOpen && !isMobile && (
                    <div className="open">
                      <h3>You can't play with devtool open.</h3>
                      <h3>你是不是想做弊^U^?</h3>
                    </div>
                  )}
                  <div className="status-bar">
                    <p className="status-bar-field">©Jennie Huang 2022</p>
                    <p className="status-bar-field">v-1.0.0</p>
                    <p className="status-bar-field">CPU Usage: 1%</p>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
        </>
      )}
      {isMobile && (
        <>
          <Help
            isHelp={isHelp}
            onClose={() => {
              setIsHelp(false);
            }}
          ></Help>
          <div className="App">
            <div className="window">
              <div className="title-bar">
                <div className="title-bar-text">welcome to color picker</div>
                <div className="title-bar-controls">
                  <button
                    onClick={() => {
                      setIsHelp(true);
                    }}
                    aria-label="Help"
                  ></button>
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div
                className="window-body"
                style={{ display: `${windowBodyDisplay}` }}
              >
                {(!isOpen || isMobile) && (
                  <div className="close">
                    {!started && <HomePage setStarted={setStarted} />}
                    {started && <DashBoard setStarted={setStarted} />}
                  </div>
                )}

                {isOpen && !isMobile && (
                  <div className="open">
                    <h3>You can't play with devtool open.</h3>
                    <p>你是不是想做弊^U^?</p>
                  </div>
                )}
                <div className="status-bar">
                  <p className="status-bar-field">©Jennie Huang 2022</p>
                  <p className="status-bar-field">v-1.0.0</p>
                  <p className="status-bar-field">CPU Usage: 1%</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
