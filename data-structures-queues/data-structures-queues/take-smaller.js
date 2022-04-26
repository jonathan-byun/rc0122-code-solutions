/* exported takeSmaller */

function takeSmaller(queue) {
  const held = queue.dequeue();
  if (held === undefined) return;
  if (queue.peek() === undefined) return held;
  if (held <= queue.peek()) {
    queue.enqueue(queue.dequeue());
    return held;
  }
  queue.enqueue(held);
  return queue.dequeue();
}
