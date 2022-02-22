var $timer = document.querySelector('.countdown-display');

$timer.countdown = function () {
  this.textContent = this.textContent - 1;
  if (this.textContent === '0') {
    this.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
};

var intervalID = setInterval(() => { $timer.countdown(); }, 1500);
