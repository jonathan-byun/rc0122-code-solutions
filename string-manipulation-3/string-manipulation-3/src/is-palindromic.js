/* exported isPalindromic */
// define function, isPalindromic, which takes a single paramter, 'string'
// define a variable, back, and assign it an empty string
// define a variable, forward, and assign it an empty string
// define a variable, omit, and assign it an array of strings
// define a for loop to iterate through each character in the parameter string
// in the loop, define an if statement to run if the character at string[i] is not found in the omit array
// in the if statement concatenate forward with the character string[i]
// still int he for loop define another if statement to run if the character at string[string.length-(i+1)] is not found in the omit array
// in the if statement concatenate back with the character string[string.length-(i+1)]
// outside the loop define an if statement comparing if forward === back is true
// in the if statement return true
// define an else statement
// in the else statement return false
function isPalindromic(string) {
  var back = '';
  var forward = '';
  var omit = [' ', ',', '.', 'b'];
  for (let i = 0; i < string.length; i++) {
    if (omit.indexOf(string[i]) === -1) {
      forward += string[i];
    }
    if (omit.indexOf(string[string.length - (i + 1)]) === -1) {
      back += string[string.length - (i + 1)];
    }
  }
  if (forward === back) {
    return true;
  } else {
    return false;
  }
}
