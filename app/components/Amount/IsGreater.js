import React, { useState } from "react";
import { AmountIsGreaterContainer, AmountInput } from "./IsGreater.style";
import { getItem, setItem } from "../localStorage";

const handleIsGreater = (amount) => {
  let storedItem = getItem();
  storedItem["amount"] = `> ${amount}`;
  setItem(storedItem);
};

export const AmountIsGreater = () => {
  let [amount, setAmount] = useState(0);
  return (
    <React.Fragment>
      <AmountIsGreaterContainer>
        <AmountInput
          type="number"
          value={amount}
          onChange={(e) => {
            let amount = e.target.value;
            setAmount(amount);
            handleIsGreater(amount);
          }}
        ></AmountInput>
      </AmountIsGreaterContainer>
    </React.Fragment>
  );
};
