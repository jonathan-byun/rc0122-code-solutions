/* exported unique */
// define new function, unique, with one parameter 'array'
// define new variable uniqueArray and assign it an empty array
// define new for loop to iterate through the length of parameter array
// in the loop define an if statement to run if value at array index i is not found in uniqeuArray
// in the if statement push value at array index i to uniqueArray
// outside the if statement and loop reutrn uniqueArray
function unique(array) {
  var uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
