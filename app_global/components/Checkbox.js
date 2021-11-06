import React from "react";

export const Checkbox = (props) => {
  const { handleOnChange, title } = props;
  return (
    <React.Fragment>
      <input
        type="checkbox"
        onChange={handleOnChange}
        style={{ marginRight: "8px" }}
      />
      <span>{title}</span>
    </React.Fragment>
  );
};
