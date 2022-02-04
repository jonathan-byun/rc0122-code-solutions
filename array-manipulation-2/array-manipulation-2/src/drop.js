/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (let i = count; i < array.length; i++) {
    if (i < 0) {
      return array;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
