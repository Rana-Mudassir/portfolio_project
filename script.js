const btn = document.querySelector('.main_btn');

function on() {
  document.getElementById('layer').style.display = 'block';
  document.body.style.overflowY = 'hidden';
}
btn.addEventListener('click', on);

const btn2 = document.querySelector('style-li');

function off() {
  document.getElementById('layer').style.display = 'none';
  document.body.style.overflowY = 'scroll';
}

btn2.addEventListener('click', off);
