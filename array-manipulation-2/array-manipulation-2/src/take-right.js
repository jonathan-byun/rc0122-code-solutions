/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (let i = array.length - count; i < array.length; i++) {
    if (i >= 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
