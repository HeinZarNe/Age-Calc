import React, { useState } from "react";
import "../assets/App.css";

const DateInput = ({ tempList, setTempList, valid }) => {
  const [input, setInputs] = useState({
    day: "",
    month: "",
    year: "",
  });
  const feb = tempList.year % 4 === 0 ? 29 : 28;
  const dayInMonth = [31, feb, 31, 30, 31, 31, 30, 31, 31, 30, 31, 30, 31];
  const List = [
    {
      name: "Year",
      id: "year",
      ph: "YYYY",
      min: 100,
      max: new Date().getFullYear(),
      maxLength: 4,
    },

    { name: "Month", id: "month", ph: "MM", min: 1, max: 12, maxLength: 2 },
    {
      name: "Day",
      id: "day",
      ph: "DD",
      min: 1,
      max: tempList.month ? dayInMonth[tempList.month] : 30,
      maxLength: 2,
    },
  ];

  function hundleOnchange(e) {
    if (e.target.value.length <= e.target.maxLength) {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }

    if (e.target.id === "year") {
      setTempList({
        day: tempList.day,
        month: tempList.month,
        year: Number(e.target.value),
      });
    } else if (e.target.id === "month") {
      e.target.value > 12 && (e.target.value = 12);
      setTempList({
        day: tempList.day,
        month: Number(e.target.value),
        year: tempList.year,
      });
    } else if (e.target.id === "day") {
      if (Number(e.target.value.toString().slice(0, 2)) > e.target.max) {
        e.target.value = e.target.max;
      }
      setTempList({
        day: Number(e.target.value),
        month: tempList.month,
        year: tempList.year,
      });
    }
  }
  return (
    <div>
      <div className=" d-flex justify-content-start align-items-center gap-3">
        {List.map((item) => (
          <div className="" id="date" key={item.id}>
            <label className="bold-t date-label" htmlFor={item.id}>
              {item.name.toUpperCase()}
            </label>
            <input
              placeholder={item.ph}
              onChange={(e) => {
                hundleOnchange(e);
              }}
              value={input[item.id]}
              name={item.id}
              min={item.min}
              max={item.max}
              maxLength={item.maxLength}
              className={
                valid
                  ? "form-control fs-5 bold-t input "
                  : "form-control fs-5 bold-t input is-invalid"
              }
              type="number"
              id={item.id}
            />
          </div>
        ))}
      </div>
      <div
        className={
          valid ? " d-none invalid-feedback" : "d-block invalid-feedback"
        }
      >
        Please enter a valid date
      </div>
    </div>
  );
};

export default DateInput;
