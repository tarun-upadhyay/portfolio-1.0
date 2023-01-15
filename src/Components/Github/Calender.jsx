import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./Calender.css"
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    // console.log(contributions)
    const currentYear = new Date().getFullYear();
// console.log(currentYear)
const currentMonth = new Date().getMonth();
// console.log(currentMonth)
    const shownMonths = 8;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  // selectLastHalfYear(new Array(375).fill(5))
  return (
    <div className="cal">
      
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="tarun-upadhyay"
        transformData={{}}
        // blockSize={29}
        fontSize={20}
       
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
    </div>
  );
};

export default Calender;
