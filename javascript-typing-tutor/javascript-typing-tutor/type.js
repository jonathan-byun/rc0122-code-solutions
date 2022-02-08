var letters = document.querySelectorAll('span');
var missed = 0;
var accurate = 0;
var counter = 0;
var h3 = document.querySelector('h3');
var modal = document.querySelector('.modal-background');
function check(letter) {
  if (counter < letters.length) {
    if (letter.key === letters[counter].textContent) {
      letters[counter].className = 'green';
      counter++;
      accurate++;
      if (counter === letters.length) {
        h3.textContent = ('completed! Accuracy:' + (100 * accurate / (accurate + missed)) + '%');
        modal.className = 'modal-background-on';
      }
    } else if (letter.shiftKey === false) {
      letters[counter].className = 'red';
      missed++;
    }
  }
}

document.addEventListener('keydown', check);
