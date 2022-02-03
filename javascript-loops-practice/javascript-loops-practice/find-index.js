/* exported findIndex */
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    } else if (i === array.length - 1) {
      return -1;
    }
  }
}
