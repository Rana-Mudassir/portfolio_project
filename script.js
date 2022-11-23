let btn = document.querySelector('.main_btn');
btn.addEventListener('click', on);

function on() {
  document.getElementById('layer').style.display = 'block';
}

function off() {
  document.getElementById('layer').style.display = 'none';
}
