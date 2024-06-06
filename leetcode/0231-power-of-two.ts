var isPowerOfTwo = function (n) {
  if (n < 0) {
    return false;
  }
  return (
    n
      .toString(2)
      .split("")
      .filter((char) => char == "1").length == 1
  );
};
