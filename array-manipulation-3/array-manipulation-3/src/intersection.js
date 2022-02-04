/* exported intersection */
function intersection(first, second) {
  var newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
