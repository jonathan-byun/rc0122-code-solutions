/* exported chunk */
function chunk(array, size) {
  var Arrays = [];
  var holder = [];
  var placement = 0;
  for (let i = 0; i < array.length; i++) {
    holder.push(array[i]);
    if (holder.length === size || i === array.length - 1) {
      Arrays[placement] = holder;
      placement++;
      holder = [];
    }
  }
  return Arrays;
}
