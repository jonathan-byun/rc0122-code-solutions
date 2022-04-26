/* exported countValues */

function countValues(stack) {
  let topValue = stack.pop();

  if (topValue === undefined) {
    return 0;
  }

  let number = 0;

  while (topValue !== undefined) {
    number = number + 1;
    topValue = stack.pop();
  }
  return number;
}
