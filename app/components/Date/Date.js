import React, { useState, useContext } from "react";
import { Checkbox } from "../Checkbox";
import { DateContainer } from "./Date.style";
import { DateOptions } from "./DateOptions";
import { getItem, setItem } from "../localStorage";

const handleCheckBoxClick = (e, setShowOptions) => {
  if (!e.target.checked) {
    let storedItem = getItem();
    storedItem["date"] = "";
    setItem(storedItem);
  }
  setShowOptions((prevState) => {
    prevState = !prevState;
    return prevState;
  });
};

export const Date = () => {
  let [showOptions, setShowOptions] = useState(false);

  return (
    <DateContainer>
      <Checkbox
        title={"Date"}
        handleOnChange={(e) => handleCheckBoxClick(e, setShowOptions)}
      ></Checkbox>
      <DateOptions displayDateOptions={showOptions}></DateOptions>
    </DateContainer>
  );
};
