let currentCount = 3;

const intervalKey = setInterval(() => {
  console.log(currentCount);
  currentCount--;
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalKey);
  }
}, 1000);
