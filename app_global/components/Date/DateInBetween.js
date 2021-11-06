import React, { useState, useContext } from "react";
import { Context } from "../Store";
import {
  DateInBetweenContainer,
  AlignRight,
  AndCntr,
} from "./DateInBetween.style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const handleInBetween = (f_date, s_date, dispatch) => {
  dispatch({ type: "date", payload: { startDate: f_date, endDate: s_date } });
};

export const DatePickerInBetween = () => {
  let [firstDate, setFirstDate] = useState(new Date());
  let [secondDate, setSecondDate] = useState(new Date());
  const [state, dispatch] = useContext(Context);
  // console.log("Store logged in DateInBetween: ", state);

  return (
    <React.Fragment>
      <DateInBetweenContainer>
        <DatePicker
          selected={firstDate}
          onChange={(date) => {
            let f_date = date;
            setFirstDate(f_date);
            handleInBetween(f_date, secondDate, dispatch);
          }}
        ></DatePicker>
        <AndCntr>and</AndCntr>
        <AlignRight>
          <DatePicker
            selected={secondDate}
            onChange={(date) => {
              let s_date = date;
              setSecondDate(s_date);
              handleInBetween(firstDate, s_date, dispatch);
            }}
          ></DatePicker>
        </AlignRight>
      </DateInBetweenContainer>
    </React.Fragment>
  );
};
