/* exported truncate */
// define new function truncate with two parameters length, string
// set new variable to empty string
// make a for loop interating until i reaches length
// on each iteration concatenate empty string with the character at string[i]
// close loop and add elipses
// return new string
function truncate(length, string) {
  var short = '';
  for (let i = 0; i < length; i++) {
    if (string === '') {
      break;
    } else if (i === string.length) {
      break;
    } else {
      short += string[i];
    }
  }
  short += '...';
  return short;
}

// made changes for instances of empty string and length longer than string length
// added if statements to break for empty string and if i reached string length
