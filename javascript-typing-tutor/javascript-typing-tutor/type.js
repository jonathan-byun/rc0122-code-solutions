var letters = document.querySelectorAll('span');
var missed = 0;
var accurate = 0;
var counter = 0;
var h3 = document.querySelector('h3');
var modal = document.querySelector('.modal-background');
function check(letter) {
  if (counter < letters.length) {
    if (letter.key === letters[counter].textContent) {
      letters[counter].style.color = 'green';
      counter++;
      accurate++;
      if (counter === letters.length) {
        h3.textContent = ('completed! Accuracy:' + (100 * accurate / (accurate + missed)) + '%');
        modal.style.display = 'flex';
      }
    } else if (letter.shiftKey === false) {
      letters[counter].style.color = 'red';
      missed++;
    }
  }
}

document.addEventListener('keydown', check);
