import React, { useState } from "react";
import {
  AmountInBetweenContainer,
  AndCntr,
  AmountInput,
} from "./IsBetween.style";
import { getItem, setItem } from "../localStorage";

const handleInBetween = (f_amount, s_amount) => {
  let storedItem = getItem();
  storedItem["amount"] = `${f_amount} and ${s_amount}`;
  setItem(storedItem);
};

export const AmountInBetween = () => {
  let [firstAmount, setFirstAmount] = useState(0);
  let [secondAmount, setSecondAmount] = useState(0);

  return (
    <React.Fragment>
      <AmountInBetweenContainer>
        <AmountInput
          type="number"
          value={firstAmount}
          onChange={(e) => {
            let f_amount = e.target.value;
            setFirstAmount(f_amount);
            handleInBetween(f_amount, secondAmount);
          }}
        ></AmountInput>
        <AndCntr>and</AndCntr>

        <AmountInput
          type="number"
          value={secondAmount}
          onChange={(e) => {
            let s_amount = e.target.value;
            setSecondAmount(s_amount);
            handleInBetween(firstAmount, s_amount);
          }}
        ></AmountInput>
      </AmountInBetweenContainer>
    </React.Fragment>
  );
};
