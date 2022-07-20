import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="weather-top">
        <div>
          <p className="weather-top-city">{data.city}</p>
          <p className="weather-top-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-top-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>

      <div className="weather-bottom">
        <p className="weather-bottom-temperature">{Math.round(data.main.temp)}°C</p>
        <div className="weather-bottom-details">
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Details</span>
          </div>
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Feels like</span>
            <span className="weather-bottom-details-param-row-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Wind</span>
            <span className="weather-bottom-details-param-row-value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Humidity</span>
            <span className="weather-bottom-details-param-row-value">{data.main.humidity} %</span>
          </div>
          <div className="weather-bottom-details-param-row">
            <span className="weather-bottom-details-param-row-label">Pressure</span>
            <span className="weather-bottom-details-param-row-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
