/* exported includes */
// definew new function, 'includes', with two paramteters, 'array' and 'value'
// define a for loop that iterates through every element in the parameter array
// in the loop, define an if statement that returns true if the element matches the parameter value
// outside the loop return false
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
