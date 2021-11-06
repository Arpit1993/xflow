import React, { useState } from "react";
import {
  DateInBetweenContainer,
  AlignRight,
  AndCntr,
} from "./DateInBetween.style";
import { getItem, setItem } from "../localStorage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const handleInBetween = (f_date, s_date) => {
  let storedItem = getItem();
  storedItem["date"] = { startDate: f_date, endDate: s_date };
  setItem(storedItem);
};

export const DatePickerInBetween = () => {
  let [firstDate, setFirstDate] = useState(new Date());
  let [secondDate, setSecondDate] = useState(new Date());

  return (
    <React.Fragment>
      <DateInBetweenContainer>
        <DatePicker
          selected={firstDate}
          onChange={(date) => {
            let f_date = date;
            setFirstDate(f_date);
            handleInBetween(f_date, secondDate);
          }}
        ></DatePicker>
        <AndCntr>and</AndCntr>
        <AlignRight>
          <DatePicker
            selected={secondDate}
            onChange={(date) => {
              let s_date = date;
              setSecondDate(s_date);
              handleInBetween(firstDate, s_date);
            }}
          ></DatePicker>
        </AlignRight>
      </DateInBetweenContainer>
    </React.Fragment>
  );
};
