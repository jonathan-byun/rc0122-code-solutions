var background = document.querySelector('.modal-background');
var openButton = document.querySelector('.open-button');
var closeButton = document.querySelector('.modal-button');
function modal() {
  background.style.display = 'flex';
}

function hide() {
  background.style.display = 'none';
}

openButton.addEventListener('click', modal);
closeButton.addEventListener('click', hide);
