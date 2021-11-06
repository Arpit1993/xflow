import React from "react";

export const Radio = (props) => {
  const { handleOnChange, title, name, defaultCheck } = props;
  return (
    <React.Fragment>
      <input
        type="radio"
        id={title}
        onChange={handleOnChange}
        name={name}
        style={{ marginRight: "8px" }}
        value={title}
        defaultChecked={defaultCheck ? true : false}
      />
      <label htmlFor={title}>{title}</label>
    </React.Fragment>
  );
};
