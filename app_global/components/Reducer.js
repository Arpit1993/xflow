const defaultState = {
  timezone: "GMT +5:30",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "date":
      return {
        ...state,
        date: action.payload,
      };
    case "amount":
      return {
        ...state,
        amount: action.payload,
      };
    case "timezone":
      return {
        ...state,
        timezone: action.payload,
      };
    case "reset":
      return defaultState;

    default:
      return state;
  }
};

export default Reducer;
