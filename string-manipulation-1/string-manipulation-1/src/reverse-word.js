/* exported reverseWord */
function reverseWord(word) {
  var reverse = '';
  for (let i = 0; i < word.length; i++) {
    reverse += word[word.length - (1 + i)];
  }
  return reverse;
}
