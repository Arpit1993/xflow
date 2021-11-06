import React, { useState } from "react";
import { getItem, setItem } from "../localStorage";
import { isInLastOptions } from "../Constants/constants";
import { IsInLastInput } from "./IsInTheLast.style";
const handleChange = (inputValue, selectedValue) => {
  let storedItem = getItem();
  storedItem["date"] = `${inputValue} ${isInLastOptions[selectedValue]}`;
  setItem(storedItem);
};

export const IsInTheLast = () => {
  let [inputVal, setInputVal] = useState("");
  let [selectVal, setSelectVal] = useState(0);
  return (
    <React.Fragment>
      <IsInLastInput
        type="number"
        onChange={(e) => {
          setInputVal(e.target.value);
          handleChange(e.target.value, selectVal);
        }}
        value={inputVal}
      ></IsInLastInput>
      <select
        onChange={(e) => {
          setSelectVal(e.target.value);
          handleChange(inputVal, e.target.value);
        }}
      >
        {isInLastOptions.map((item, index) => {
          return (
            <option value={index} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};
