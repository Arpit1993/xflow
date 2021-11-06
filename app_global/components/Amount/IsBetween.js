import React, { useState, useContext } from "react";
import {
  AmountInBetweenContainer,
  AndCntr,
  AmountInput,
} from "./IsBetween.style";
import { Context } from "../Store";

const handleInBetween = (f_amount, s_amount, dispatch) => {
  let stories = `${f_amount} and ${s_amount}`;
  dispatch({ type: "amount", payload: stories });
};

export const AmountInBetween = () => {
  let [firstAmount, setFirstAmount] = useState(0);
  let [secondAmount, setSecondAmount] = useState(0);
  const [state, dispatch] = useContext(Context);
  // console.log("Store logged in AmountInBetween: ", state);
  return (
    <React.Fragment>
      <AmountInBetweenContainer>
        <AmountInput
          type="number"
          value={firstAmount}
          onChange={(e) => {
            let f_amount = e.target.value;
            setFirstAmount(f_amount);
            handleInBetween(f_amount, secondAmount, dispatch);
          }}
        ></AmountInput>
        <AndCntr>and</AndCntr>

        <AmountInput
          type="number"
          value={secondAmount}
          onChange={(e) => {
            let s_amount = e.target.value;
            setSecondAmount(s_amount);
            handleInBetween(firstAmount, s_amount, dispatch);
          }}
        ></AmountInput>
      </AmountInBetweenContainer>
    </React.Fragment>
  );
};
