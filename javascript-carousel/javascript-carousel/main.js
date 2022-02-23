var imgArray = [];
imgArray[0] = 'images/001.png';
imgArray[1] = 'images/004.png';
imgArray[2] = 'images/007.png';
imgArray[3] = 'images/025.png';
imgArray[4] = 'images/039.png';

var $displayedImg = document.querySelector('img');
var current = 0;
function cycle() {
  current++;
  if (current === 5) {
    current = 0;
  }
  $displayedImg.src = imgArray[current];
}

var intervalKey = setInterval(() => { cycle(); }, 3000);

function arrowClickForward() {
  cycle();
  clearInterval(intervalKey);
  intervalKey = setInterval(() => { cycle(); }, 3000);
}

function arrowClickBack() {
  current--;
  if (current === -1) {
    current = 4;
  }
  $displayedImg.src = imgArray[current];
  clearInterval(intervalKey);
  intervalKey = setInterval(() => { cycle(); }, 3000);
}

function buttonClick(e) {
  if (e.target.className === 'fas fa-solid fa-circle') {
    for (let i = 0; i < imgArray.length; i++) {
      if (e.target === $buttons.children[i]) {
        $displayedImg.src = imgArray[i];
      }
    }
    clearInterval(intervalKey);
    intervalKey = setInterval(() => { cycle(); }, 3000);
  }
}

var $backArrow = document.querySelector('.arrow');
$backArrow.addEventListener('click', arrowClickBack);

var $forwardArrow = document.querySelector('.arrow2');
$forwardArrow.addEventListener('click', arrowClickForward);

var $buttons = document.querySelector('.dots');
$buttons.addEventListener('click', buttonClick);
