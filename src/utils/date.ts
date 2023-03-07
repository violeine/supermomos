export const getDate = (t: string) => {
  return t.split("T").at(0);
};

export const getTime = (t: string) => {
  return t.split("T").at(1);
};
