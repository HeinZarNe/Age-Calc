import React, { useState } from "react";
import DateInput from "./DateInput";
import Logo from "./Logo";
import DateExp from "./DateExp";

const Container = () => {
  const [valid, setValid] = useState(true);
  const [data, setData] = useState({ year: 0, month: 0, day: 0 });
  const [tempList, setTempList] = useState({ year: 0, month: 0, day: 0 });

  const checkValid = (a) => {
    const currentDate = new Date();
    const feb =
      (currentDate.getFullYear() % 4 === 0 &&
        currentDate.getFullYear() % 100 !== 0) ||
      currentDate.getFullYear() % 400 === 0
        ? 29
        : 28;
    const dayInMonth = [31, feb, 31, 30, 31, 31, 30, 31, 31, 30, 31, 30, 31];

    if (
      a.year > currentDate.getFullYear() ||
      (a.year === currentDate.getFullYear() &&
        a.month > currentDate.getMonth() + 1) ||
      a.month === 0 ||
      a.day === 0 ||
      (a.month === currentDate.getMonth() + 1 &&
        a.day > currentDate.getDate()) ||
      a.day > dayInMonth[a.month]
    ) {
      setValid(false);
    } else {
      setData(tempList);
      setValid(true);
    }
  };

  const handleOnSubmit = () => {
    checkValid(tempList);
  };

  return (
    <div className=" bg-white px-4 py-5 main-card d-flex flex-column justify-content-start">
      <DateInput
        setValid={setValid}
        setTempList={setTempList}
        tempList={tempList}
        valid={valid}
      />
      <Logo handleFlag={handleOnSubmit} />
      <DateExp data={data} />
    </div>
  );
};

export default Container;
