/* exported lastChars */
function lastChars(length, string) {
  var last = '';
  for (let i = string.length - length; i < string.length; i++) {
    if (i < 0) {
      return string;
    } else if (string === '') {
      break;
    } else if (i === string.length) {
      break;
    } else {
      last += string[i];
    }
  }
  return last;
}
