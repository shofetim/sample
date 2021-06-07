const range = (start, end) => {
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  return [...Array(end - start).keys()].map((i) => start + i);
};

export { range };
