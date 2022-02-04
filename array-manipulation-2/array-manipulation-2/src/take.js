/* exported take */
// define new function, take, with two arguments, 'array' and 'count'
// define a variable, newArray, and assign it an empty array
// define a for loop, to iterate through each element in the parameter array until either the index number corresponding to count or the last index is reached
// in the loop, push the element in parameter array to newArray
// return the newArray

function take(array, count) {
  var newArray = [];
  for (let i = 0; i < count && i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
