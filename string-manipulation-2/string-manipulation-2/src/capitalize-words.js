/* exported capitalizeWords */
function capitalizeWords(string) {
  var word = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      word += string[i].toUpperCase();
    } else {
      word += string[i].toLowerCase();
    }
  }
  return word;
}
