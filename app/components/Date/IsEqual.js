import React, { useState } from "react";
import { getItem, setItem } from "../localStorage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const handleChange = (customDate) => {
  let storedItem = getItem();
  storedItem["date"] = customDate;
  setItem(storedItem);
};

export const IsEqual = () => {
  let [customDate, setCustomDate] = useState(new Date());
  return (
    <React.Fragment>
      <DatePicker
        selected={customDate}
        onChange={(date) => {
          setCustomDate(date);
          handleChange(date);
        }}
      ></DatePicker>
    </React.Fragment>
  );
};
