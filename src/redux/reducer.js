const initialState = {
  toggle: false,
};

export const CandidateData = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        toggle: action.toggle,
      };
    default:
      return state;
  }
};
