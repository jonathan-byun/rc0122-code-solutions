/* exported firstChars */
function firstChars(length, string) {
  var short = '';
  for (let i = 0; i < length; i++) {
    if (string === '') {
      break;
    } else if (i === string.length) {
      break;
    } else {
      short += string[i];
    }
  }
  return short;
}
