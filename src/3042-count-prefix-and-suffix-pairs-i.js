/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  //initialize funtion
  function isPrefixAndSuffix(str1, str2) {
    let str1Length = str1.length;
    let str2Length = str2.length;
    let start = str2.slice(0, str1Length);
    let end = str2.slice(str2Length - str1Length);

    if (str1 === start && str1 === end) {
      return true;
    }
    return false;
  }
  let acc = 0;
  //going thought words
  for (let i = 0; i <= words.length - 2; i++) {
    for (let j = i + 1; j <= words.length - 1; j++) {
      //check if they are Prefix and Suffix
      if (isPrefixAndSuffix(words[i], words[j])) {
        console.log(words[i], words[j]);
        acc++;
      }
    }
  }
  return acc;
};
