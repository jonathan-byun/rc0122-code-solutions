/* exported drop */
// define new function, drop, with two parameters, 'array' and 'count'
// define new variable, newArray, and assign it an empty array
// define a for loop to iterate through each element in the parameter array starting from the index number corresponding to count
// in the loop define an if statement to return the full array if count is negative else push element in parameter array to newArray
// return newArray
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
