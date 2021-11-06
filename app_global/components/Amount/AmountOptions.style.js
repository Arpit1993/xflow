import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const AmountOptionsContainer = styled("div")`
  background-color: rgb(247, 250, 252);
  box-shadow: rgb(227, 232, 238) 0px -1px 0px 0px inset;
`;

export const hideAmount = css`
  max-height: 0px;
  padding: 0px;
  overflow: hidden;
  transition: max-height 0.3s ease 0s, padding 0.3s ease 0s;
`;

export const displayAmount = css`
  padding: 12px;
  max-height: 400px;
  overflow: hidden;
  transition: max-height 0.3s ease 0s, padding 0.3s ease 0s;
`;

export const EmptyContainer = styled("div")`
  padding-top: 8px;
`;
