export const removePropFromObject = (obj, id) => {
  let res = { ...obj };
  delete res[id];
  return res;
};