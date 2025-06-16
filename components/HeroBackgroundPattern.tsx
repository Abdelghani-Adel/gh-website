import React from "react";

const HeroBackgroundPattern = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-cyan-400 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-cyan-300 animate-ping"></div>
    </div>
  );
};

export default HeroBackgroundPattern;
