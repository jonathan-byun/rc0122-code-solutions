/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var hold1 = string[firstIndex];
  var hold2 = string[secondIndex];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += hold2;
    } else if (i === secondIndex) {
      newString += hold1;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
