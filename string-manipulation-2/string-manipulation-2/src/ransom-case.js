/* exported ransomCase */
function ransomCase(string) {
  var word = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string[i].toLowerCase();
    } else if (i % 2 !== 0) {
      word += string[i].toUpperCase();
    }
  }
  return word;
}
