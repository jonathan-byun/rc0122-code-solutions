/* exported difference */
function difference(first, second) {
  var newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (newArray.indexOf(first[i]) === -1 && second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (newArray.indexOf(second[i]) === -1 && first.indexOf(second[i]) === -1) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
