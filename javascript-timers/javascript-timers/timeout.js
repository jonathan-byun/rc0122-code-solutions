var $message = document.querySelector('.message');

// $message.changeText = function (text) {
//   this.textContent = text;
// };

// setTimeout(() => { $message.changeText('Hello There'); }, 2000);

function setMessageText(text) {
  $message.textContent = text;
}

setTimeout(() => { setMessageText('hello'); }, [2000]);
