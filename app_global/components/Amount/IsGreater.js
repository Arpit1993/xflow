import React, { useState, useContext } from "react";
import { AmountIsGreaterContainer, AmountInput } from "./IsGreater.style";
import { Context } from "../Store";

const handleIsGreater = (amount, dispatch) => {
  dispatch({ type: "amount", payload: `> ${amount}` });
};

export const AmountIsGreater = () => {
  let [amount, setAmount] = useState(0);
  const [state, dispatch] = useContext(Context);
  // console.log("Store logged in AmountInBetween: ", state);
  return (
    <React.Fragment>
      <AmountIsGreaterContainer>
        <AmountInput
          type="number"
          value={amount}
          onChange={(e) => {
            let amount = e.target.value;
            setAmount(amount);
            handleIsGreater(amount, dispatch);
          }}
        ></AmountInput>
      </AmountIsGreaterContainer>
    </React.Fragment>
  );
};
