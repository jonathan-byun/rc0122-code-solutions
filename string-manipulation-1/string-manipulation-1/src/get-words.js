/* exported getWords */
function getWords(string) {
  var array = [];
  var word = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word += string[i];
    } else if (string[i] === ' ') {
      array.push(word);
      word = '';
    }
    if (i === string.length - 1) {
      array.push(word);
    }
  }
  return array;
}
