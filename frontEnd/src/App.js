import { useState } from "react";
import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import { Routes, Route } from "react-router-dom";
import devtools from "../node_modules/devtools-detect/index.js";
import { isMobile } from "react-device-detect";

function App() {
  const [isOpen, setIsOpen] = useState(devtools.isOpen);

  // // Check if it's open
  // console.log("Is DevTools open:", devtools.isOpen);

  // // Check it's orientation, `undefined` if not open
  // console.log("DevTools orientation:", devtools.orientation);

  // // Get notified when it's opened/closed or orientation changes
  window.addEventListener("devtoolschange", (event) => {
    setIsOpen(event.detail.isOpen);
    // console.log("Is DevTools open:", event.detail.isOpen);
    // console.log("DevTools orientation:", event.detail.orientation);
  });

  return (
    <div className="App">
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">welcome to color picker</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          {(!isOpen || isMobile) && (
            <div className="close">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashBoard />} />
              </Routes>
            </div>
          )}

          {isOpen && !isMobile && (
            <div className="open">
              <h3>You can't play with devtool open.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
