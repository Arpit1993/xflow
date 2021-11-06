import React, { useState, useContext } from "react";
import { Checkbox } from "../Checkbox";
import { AmountContainer } from "./Amount.style";
import { AmountOptions } from "./AmountOptions";
import { Context } from "../Store";

const handleCheckBoxClick = (e, setShowOptions, dispatch) => {
  if (!e.target.checked) {
    dispatch({ type: "amount", payload: "" });
  }
  setShowOptions((prevState) => {
    prevState = !prevState;
    return prevState;
  });
};

export const Amount = () => {
  let [showOptions, setShowOptions] = useState(false);
  const [state, dispatch] = useContext(Context);
  // console.log("Store logged in Amount: ", state);
  return (
    <AmountContainer>
      <Checkbox
        title={"Amount"}
        handleOnChange={(e) => handleCheckBoxClick(e, setShowOptions, dispatch)}
      ></Checkbox>
      <AmountOptions displayAmountOptions={showOptions}></AmountOptions>
    </AmountContainer>
  );
};
