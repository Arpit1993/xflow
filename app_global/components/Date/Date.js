import React, { useState, useContext } from "react";
import { Checkbox } from "../Checkbox";
import { DateContainer } from "./Date.style";
import { DateOptions } from "./DateOptions";
import { Context } from "../Store";

const handleCheckBoxClick = (e, setShowOptions, dispatch) => {
  if (!e.target.checked) {
    dispatch({ type: "date", payload: "" });
  }
  setShowOptions((prevState) => {
    prevState = !prevState;
    return prevState;
  });
};

export const Date = () => {
  let [showOptions, setShowOptions] = useState(false);
  const [state, dispatch] = useContext(Context);

  return (
    <DateContainer>
      <Checkbox
        title={"Date"}
        handleOnChange={(e) => handleCheckBoxClick(e, setShowOptions, dispatch)}
      ></Checkbox>
      <DateOptions displayDateOptions={showOptions}></DateOptions>
    </DateContainer>
  );
};
