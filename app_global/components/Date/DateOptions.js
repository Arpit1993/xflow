import React, { useState, useContext } from "react";
import {
  DateOptionsContainer,
  TimeZoneContainer,
  TimeZoneHeading,
  hideDate,
  displayDate,
  EmptyContainer,
} from "./DateOptions.style";
import { Radio } from "../Radio";
import { DatePickerInBetween } from "./DateInBetween";
import { IsInTheLast } from "./IsInTheLast";
import { IsEqual } from "./IsEqual";
import { dateOptions } from "../Constants/constants";
import { Context } from "../Store";

const onRadioChange = (e, dispatch) => {
  dispatch({ type: "timezone", payload: e.target.value });
};

const onSelectChange = (val, setQuery) => {
  setQuery(val);
};
export const DateOptions = (props) => {
  const { displayDateOptions } = props;
  let [query, setQuery] = useState("0");
  const [state, dispatch] = useContext(Context);
  return (
    <DateOptionsContainer
      className={displayDateOptions ? displayDate : hideDate}
    >
      <select
        onChange={(e) => {
          let val = e.target.value;
          onSelectChange(val, setQuery);
        }}
      >
        {dateOptions.map((query, index) => {
          return (
            <option value={index} key={index}>
              {query}
            </option>
          );
        })}
      </select>

      {query === "0" && (
        <EmptyContainer>
          <IsInTheLast></IsInTheLast>
        </EmptyContainer>
      )}
      {query === "1" && (
        <EmptyContainer>
          <IsEqual></IsEqual>
        </EmptyContainer>
      )}
      {query === "2" && (
        <EmptyContainer>
          <DatePickerInBetween></DatePickerInBetween>
        </EmptyContainer>
      )}
      <TimeZoneContainer>
        <TimeZoneHeading>Time Zone:</TimeZoneHeading>
        <EmptyContainer>
          <Radio
            name="timezone"
            title={"GMT +5:30"}
            handleOnChange={(e) => {
              onRadioChange(e, dispatch);
            }}
            defaultCheck={true}
          ></Radio>
        </EmptyContainer>
        <EmptyContainer>
          <Radio
            name="timezone"
            title={"UTC"}
            handleOnChange={(e) => {
              onRadioChange(e, dispatch);
            }}
          ></Radio>
        </EmptyContainer>
      </TimeZoneContainer>
    </DateOptionsContainer>
  );
};
