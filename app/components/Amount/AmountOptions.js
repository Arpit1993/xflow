import React, { useState } from "react";
import {
  AmountOptionsContainer,
  hideAmount,
  displayAmount,
  EmptyContainer,
} from "./AmountOptions.style";
import { AmountInBetween } from "./IsBetween";
import { AmountIsGreater } from "./IsGreater";
import { amountOptions } from "../Constants/constants";

const onSelectChange = (val, setQuery) => {
  setQuery(val);
};
export const AmountOptions = (props) => {
  const { displayAmountOptions } = props;
  let [query, setQuery] = useState("0");
  return (
    <AmountOptionsContainer
      className={displayAmountOptions ? displayAmount : hideAmount}
    >
      <select
        onChange={(e) => {
          let val = e.target.value;
          onSelectChange(val, setQuery);
        }}
      >
        {amountOptions.map((query, index) => {
          return (
            <option value={index} key={index}>
              {query}
            </option>
          );
        })}
      </select>
      {query === "0" && (
        <EmptyContainer>
          <AmountIsGreater></AmountIsGreater>
        </EmptyContainer>
      )}

      {query === "1" && (
        <EmptyContainer>
          <AmountInBetween></AmountInBetween>
        </EmptyContainer>
      )}
    </AmountOptionsContainer>
  );
};
