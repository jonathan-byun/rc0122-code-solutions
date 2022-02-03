/* exported isUpperCased */
function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === word[i]) {
      return false;
    } else if (word[word.length - 1].toUpperCase() === word[word.length - 1]) {
      return true;
    }
  }
}
