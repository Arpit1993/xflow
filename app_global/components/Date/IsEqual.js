import React, { useState, useContext } from "react";
import { Context } from "../Store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const handleChange = (customDate, dispatch) => {
  dispatch({ type: "date", payload: customDate });
};

export const IsEqual = () => {
  let [customDate, setCustomDate] = useState(new Date());
  const [state, dispatch] = useContext(Context);
  // console.log("Store logged in DateIsEqual: ", state);
  return (
    <React.Fragment>
      <DatePicker
        selected={customDate}
        onChange={(date) => {
          setCustomDate(date);
          handleChange(date, dispatch);
        }}
      ></DatePicker>
    </React.Fragment>
  );
};
