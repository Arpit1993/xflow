import React, { useState } from "react";
import { Checkbox } from "../Checkbox";
import { AmountContainer } from "./Amount.style";
import { AmountOptions } from "./AmountOptions";
import { getItem, setItem } from "../localStorage";

const handleCheckBoxClick = (e, setShowOptions) => {
  if (!e.target.checked) {
    let storedItem = getItem();
    storedItem["amount"] = "";
    setItem(storedItem);
  }
  setShowOptions((prevState) => {
    prevState = !prevState;
    return prevState;
  });
};

export const Amount = () => {
  let [showOptions, setShowOptions] = useState(false);
  return (
    <AmountContainer>
      <Checkbox
        title={"Amount"}
        handleOnChange={(e) => handleCheckBoxClick(e, setShowOptions)}
      ></Checkbox>
      <AmountOptions displayAmountOptions={showOptions}></AmountOptions>
    </AmountContainer>
  );
};