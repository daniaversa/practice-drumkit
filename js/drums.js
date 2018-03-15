function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; //stop the function if wrong key is pressed
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //skip if it's not transform
  this.classList.remove('playing');
};
