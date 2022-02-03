/* exported compact */
function compact(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    var omit = [0, -0, undefined, null, false, ''];
    if (omit.indexOf(array[i]) === -1) {
      if (Number.isNaN(array[i]) === false) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}
