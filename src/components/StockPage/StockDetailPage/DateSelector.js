import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = (props) => {
  //a simply reuseable component
  return (
    <DatePicker
      selected={props.date}
      maxDate={new Date()}
      dateFormat="yyyy/MM/dd"
      onChange={(date) => props.setdate(date)}
    ></DatePicker>
  );
};

export default DateSelector;
