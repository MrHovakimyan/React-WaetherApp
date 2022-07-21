import React from "react";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
  // getting next 7 days of the week starting from search day
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="daily-item-icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="daily-item-day">{forecastDays[index]}</label>
                  <label className="daily-item-description">{item.weather[0].description}</label>
                  <label className="daily-item-min-max">
                    {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
