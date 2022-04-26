/* exported maxValue */

function maxValue(stack) {
  let topValue = stack.pop();
  if (topValue === undefined) {
    return -Infinity;
  }
  let greatest = topValue;
  while (topValue !== undefined) {
    topValue = stack.pop();
    if (topValue > greatest) {
      greatest = topValue;
    }
  }
  return greatest;
}
