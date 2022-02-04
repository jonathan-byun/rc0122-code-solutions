/* exported isAnagram */
// define new function, isAnagram, with two parameters 'firstString' and 'secondString'
// definew new variables, lettersFirst, letterSecond, holderFirst, holderSecond, and assign them all empty arrays
// define new variable ,omit, and assign it an array of strings to be omitted
// define a for loop to iterate through firstString
// in the loop define an if statement to run if character firstString[i] is not found in omit array
// in the if statement push firststring[i] to holderFirst, push holderFirst to lettersFirst, then reset holderFirst to an empty array
// outside the last loop define another for loop to iterate through secondString
// in the loop define an if statement to run if character secondString[i] is not found in omit array
// in the if statement push secondString[i] to holderSecond, push holderSecond to lettersSecond, then reset holderSecond to an empty array
// outside the loop sort both lettersFirst and lettersSecond
// define a for loop to iterate through the lettersSecond array
// in the loop define an if statement to run if lettersSecond[i][0] !== lettersFirst[i][0]
// in the if statement return false
// outside the if statement and the loop, return true
function isAnagram(firstString, secondString) {
  var lettersFirst = [];
  var holderFirst = [];
  var lettersSecond = [];
  var holderSecond = [];
  var omit = [' '];
  for (let i = 0; i < firstString.length; i++) {
    if (omit.indexOf(firstString[i]) === -1) {
      holderFirst.push(firstString[i]);
      lettersFirst.push(holderFirst);
      holderFirst = [];
    }
  }
  for (let i = 0; i < secondString.length; i++) {
    if (omit.indexOf(secondString[i]) === -1) {
      holderSecond.push(secondString[i]);
      lettersSecond.push(holderSecond);
      holderSecond = [];
    }
  }
  lettersFirst.sort();
  lettersSecond.sort();
  for (let i = 0; i < lettersSecond.length; i++) {
    if (lettersSecond[i][0] !== lettersFirst[i][0]) {
      return false;
    }
  }
  return true;
}
