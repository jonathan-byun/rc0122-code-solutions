/* exported includesSeven */
function includesSeven(array) {
  if (array.length === 0) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    } else if (i === array.length - 1) {
      return false;
    }
  }
}
