import React, { useState, useEffect } from "react";
import "../css/LoadingSpinner.css";

const ProgressBar = ({text}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 2;
        } else {
          // Set to 100 before the next interval to hide the reset
          setTimeout(() => setProgress(0), 100);
          return 100;
        }
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="blurred-background">
      {/* <div className="progress-overlay"> */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          <div className="progress-text">{text}</div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProgressBar;
