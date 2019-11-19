export const getStorage = (prop) => {
  if (localStorage.getItem(prop)) {
    return JSON.parse(localStorage.getItem(prop));
  }
  return [];
};

