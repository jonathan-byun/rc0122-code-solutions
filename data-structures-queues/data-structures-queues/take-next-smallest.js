/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let value = queue.dequeue();
  if (value === undefined) return;
  if (queue.peek() === undefined) return value;
  while (value > queue.peek()) {
    queue.enqueue(value);
    value = queue.dequeue();
  }
  return value;
}
