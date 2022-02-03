/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[array.length - (i + 1)]);
  }
  return newArray;
}
