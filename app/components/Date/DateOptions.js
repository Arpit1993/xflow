import React, { useState } from "react";
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
import { dateOptions, isInLastOptions } from "../Constants/constants";
import { getItem, setItem } from "../localStorage";
const onRadioChange = (e) => {
  let Items = getItem();
  Items["timezone"] = e.target.value;
  setItem(Items);
};

const onSelectChange = (val, setQuery) => {
  setQuery(val);
};
export const DateOptions = (props) => {
  const { displayDateOptions } = props;
  let [query, setQuery] = useState("0");
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
            handleOnChange={onRadioChange}
            defaultCheck={true}
          ></Radio>
        </EmptyContainer>
        <EmptyContainer>
          <Radio
            name="timezone"
            title={"UTC"}
            handleOnChange={onRadioChange}
          ></Radio>
        </EmptyContainer>
      </TimeZoneContainer>
    </DateOptionsContainer>
  );
};
