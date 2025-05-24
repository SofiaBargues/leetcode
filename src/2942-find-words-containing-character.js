/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
      let ouput = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf(x)>= 0) {
            ouput.push(i)
        }

    }
    return ouput
};

