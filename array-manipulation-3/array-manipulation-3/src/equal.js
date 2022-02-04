/* exported equal */
// define function, equal, that takes two parameters 'first' and 'second'
// define for loop to iterate though the length of the second array
// in the loop define an if statement that runs if the value in array first at index i is not equal to the value in array second at index i
// in the if statement return false
// outside the if and for statements define a for loop to iterate though the length of the first array
// in the loop define an if statement that runs if the value in array first at index i is not equal to the value in array second at index i
// in the if statement return false
// outside the if statement and loop return true
function equal(first, second) {
  for (let i = 0; i < second.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
