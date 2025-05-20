/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let nameIndex = 0;
  let typedIndex = 0;
  while (nameIndex < name.length) {
    if (name[nameIndex] === typed[typedIndex]) {
      nameIndex++;
      typedIndex++;
    } else if (name[nameIndex - 1] != typed[typedIndex]) {
      return false;
    } else {
      typedIndex++;
    }
  }

  // console.log(typed.slice(typedIndex).split("").filter((x) => x != name[name.length - 1]).length)// === 0
  return (
    typed
      .slice(typedIndex)
      .split("")
      .filter((x) => x != name[name.length - 1]).length === 0
  );
};
