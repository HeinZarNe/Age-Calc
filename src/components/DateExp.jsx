import React, { useState } from "react";

const DateExp = ({ data }) => {
  const List = [
    { name: "day", id: 0 },
    { name: "month", id: 1 },
    { name: "year", id: 2 },
  ];

  const newList = data;

  const pastDate = new Date(`${newList.year},${newList.month},${newList.day}`);
  const pastYear = pastDate.getFullYear();
  const feb = pastYear % 4 === 0 ? 29 : 28;
  const dayInMonth = [31, feb, 31, 30, 31, 31, 30, 31, 31, 30, 31, 30, 31];
  const todayDate = new Date();
  let year = todayDate.getFullYear() - pastDate.getFullYear();

  let month = todayDate.getMonth() - pastDate.getMonth();
  if (month < 0) {
    year--;
    month += 12;
  }
  let day = todayDate.getDate() - pastDate.getDate();
  if (day < 0) {
    month--;
    if (month < 0) {
      month += 12;
      year--;
    }
    day += dayInMonth[pastDate.getMonth()];
  }

  let finalList = isNaN(day) ? [] : [day, month, year];
  return (
    <div className="">
      {List.map((item, i) => (
        <div key={i} className="boldx-t display">
          <span className="num pe-1">
            {finalList.length == 0 ? "--" : finalList[i]}
          </span>
          <span>{item.name}s</span>
        </div>
      ))}
    </div>
  );
};

export default DateExp;
