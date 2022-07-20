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

      <div className="weather-bottom">
        <p className="weather-bottom-temperature">18°C</p>
        <div className="weather-bottom-details">
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Details</span>
          </div>
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Feels like</span>
            <span className="weather-bottom-details-param-row-value">22°C</span>
          </div>
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Wind</span>
            <span className="weather-bottom-details-param-row-value">2 m/s</span>
          </div>
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Humidity</span>
            <span className="weather-bottom-details-param-row-value">15%</span>
          </div>
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Pressure</span>
            <span className="weather-bottom-details-param-row-value">10 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
