import React, { useState, useContext } from "react";
import { Context } from "../Store";
import { isInLastOptions } from "../Constants/constants";
import { IsInLastInput } from "./IsInTheLast.style";

const handleChange = (inputValue, selectedValue, dispatch) => {
  dispatch({
    type: "date",
    payload: `${inputValue} ${isInLastOptions[selectedValue]}`,
  });
};

export const IsInTheLast = () => {
  let [inputVal, setInputVal] = useState("");
  let [selectVal, setSelectVal] = useState(0);
  const [state, dispatch] = useContext(Context);
  // console.log("Store logged in DateIsLast: ", state);
  return (
    <React.Fragment>
      <IsInLastInput
        type="number"
        onChange={(e) => {
          setInputVal(e.target.value);
          handleChange(e.target.value, selectVal, dispatch);
        }}
        value={inputVal}
      ></IsInLastInput>
      <select
        onChange={(e) => {
          setSelectVal(e.target.value);
          handleChange(inputVal, e.target.value, dispatch);
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
