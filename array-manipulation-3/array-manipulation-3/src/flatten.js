/* exported flatten */
// define new function, flatten, with one parameter 'array'
// define new variable, new Array, and assign it value of empty array
// define for loop to iterate through length of array
// in the loop define an if statement to run if there is an array at parameter array index i
// in the if statement define a for loop to iterate through the array at parameter array index i
// in the loop push the value at array index [i][u] to newArray
// outside the loop and the if statement, define an else statement
// in the else statement push value at array index i to newArray
// return newArray
function flatten(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let u = 0; u < array[i].length; u++) {
        newArray.push(array[i][u]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
