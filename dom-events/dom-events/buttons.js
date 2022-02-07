function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $clicks = document.querySelector('.click-button');
$clicks.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $hovers = document.querySelector('.hover-button');
$hovers.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('Button double-clicked');
  console.log(event);
  console.log(event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
