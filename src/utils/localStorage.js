export const getStorage = (prop, valueDefault = {}) => {
  if (localStorage.getItem(prop)) {
    return JSON.parse(localStorage.getItem(prop));
  }
  return valueDefault;
};

