export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    anyname: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
