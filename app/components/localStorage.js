export const setItem = (value = { timezone: "GMT +5:30" }) => {
  return window.localStorage.setItem("filter", JSON.stringify(value));
};

export const getItem = () => {
  return JSON.parse(window.localStorage.getItem("filter"));
};

