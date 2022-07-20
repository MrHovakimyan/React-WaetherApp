import React from "react";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="weather-top">
        <div>
          <p className="weather-top-city">Belgrade</p>
          <p className="weather-top-description">Sunny</p>
        </div>

        <img alt="weather" className="weather-top-icon" src="icons/01d.png" />
      </div>
    </div>
  );
};

export default CurrentWeather;
