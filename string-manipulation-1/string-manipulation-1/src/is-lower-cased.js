/* exported isLowerCased */
function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      return false;
    } else if (word[word.length - 1].toLowerCase() === word[word.length - 1]) {
      return true;
    }
  }
}
