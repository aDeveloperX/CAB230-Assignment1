import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      maxDate={new Date()}
      dateFormat="yyyy/MM/dd"
      onChange={(date) => setDate(date)}
    ></DatePicker>
  );
};

export default DateSelector;
