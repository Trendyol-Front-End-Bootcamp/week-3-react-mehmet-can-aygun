import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="gun-container">
        <img src="/assets/portal-gun.svg" alt="Portal Gun" />
      </div>
      <div className="beam-container">
        <div className="beam"></div>
      </div>
    </div>
  );
};

export default Loading;
