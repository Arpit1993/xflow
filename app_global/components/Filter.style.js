import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const MainContainer = styled("main")`
  display: flex;
  justify-content: center;
`;

export const FilterContainer = styled("section")`
  // border: 1px solid red;
  width: 700px;
`;

export const FilterHeaderCntr = styled("section")`
  display: flex;
  justify-content: space-between;
  background-color: rgb(247, 250, 252);
  padding: 8px;
  box-shadow: rgb(227, 232, 238) 0px -1px 0px 0px inset;
`;

export const FilterHeading = styled("span")``;

export const FilterBodyCntr = styled("section")`
 
`;
export const ClearButton = styled("button")`
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  color: rgb(60, 66, 87);
  border: 0;
  outline: 0;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(60 66 87 / 8%) 0px 2px 5px 0px;
`;

export const DoneButton = styled("button")`
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  color: #ffffff;
  background-color: rgb(84, 105, 212);
  border: 0;
  outline: 0;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(60 66 87 / 8%) 0px 2px 5px 0px;
`;
