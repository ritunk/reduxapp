const initalState = 0;

const chageTheNumber = (state = initalState, action) => {
  let newState = state;

  if (action.type === "INCREMENT") {
    newState = state + action.anyname;
  } else if (action.type === "DECREMENT") {
    newState = state - 1;
  }

  return newState;
};

export default chageTheNumber;
