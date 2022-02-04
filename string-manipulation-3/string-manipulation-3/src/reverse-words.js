/* exported reverseWords */
function reverseWords(string) {
  var word = '';
  var reverse = '';
  var omit = [' '];
  for (let i = 0; i < string.length; i++) {
    if (omit.indexOf(string[i]) === -1) {
      word += string[i];
    }
    if (string[i + 1] === ' ') {
      for (let u = 0; u < word.length; u++) {
        reverse += word[word.length - (u + 1)];
      }
      word = '';
      reverse += ' ';
    } else if (i === string.length - 1) {
      for (let t = 0; t < word.length; t++) {
        reverse += word[word.length - (t + 1)];
      }
    }
  }
  return reverse;
}
