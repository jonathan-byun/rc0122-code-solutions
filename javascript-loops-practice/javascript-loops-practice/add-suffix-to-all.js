/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var x = [];
  for (let i = 0; i < words.length; i++) {
    x.push(words[i] + suffix);
  }
  return x;
}
