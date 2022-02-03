/* exported filterOutStrings */
function filterOutStrings(values) {
  var x = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      x.push(values[i]);
    }
  }
  return x;
}
