import React, { useState, useEffect } from "react";

import {
  MainContainer,
  FilterContainer,
  FilterHeaderCntr,
  FilterHeading,
  ClearButton,
  DoneButton,
  FilterBodyCntr,
} from "./Filter.style";
import { Date } from "./Date/Date";
import { Amount } from "./Amount/Amount";
import { getItem, setItem } from "./localStorage";

const onClearHandler = () => {
  setItem();
  alert("All data cleared!");
  window.location.reload();
};
const onDoneHandler = () => {
  let filter = getItem();
  alert(JSON.stringify(filter));
};
const Filter = () => {
  useEffect(() => {
    setItem();
  }, []);
  return (
    <MainContainer>
      <FilterContainer>
        <FilterHeaderCntr>
          <ClearButton onClick={onClearHandler}>Clear</ClearButton>
          <FilterHeading>Filters</FilterHeading>
          <DoneButton onClick={onDoneHandler}>Done</DoneButton>
        </FilterHeaderCntr>
        <FilterBodyCntr>
          <Date></Date>
          <Amount></Amount>
        </FilterBodyCntr>
      </FilterContainer>
    </MainContainer>
  );
};

export default Filter;
