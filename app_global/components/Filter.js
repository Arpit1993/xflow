import React, {  useContext } from "react";
import { Context } from "./Store";

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

const onClearHandler = (state, dispatch) => {
  dispatch({ type: "reset" });
  alert("All data cleared!");
  window.location.reload();
};
const onDoneHandler = (state, dispatch) => {
  alert(JSON.stringify(state));
};

const Filter = () => {
  const [state, dispatch] = useContext(Context);
  // console.log("Filter: ", state);
  // console.log("Filter > dispatch", dispatch);

  return (
    <MainContainer>
      <FilterContainer>
        <FilterHeaderCntr>
          <ClearButton onClick={() => onClearHandler(state, dispatch)}>
            Clear
          </ClearButton>
          <FilterHeading>Filters</FilterHeading>
          <DoneButton onClick={() => onDoneHandler(state, dispatch)}>
            Done
          </DoneButton>
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
