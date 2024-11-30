const dots = document.querySelectorAll('.dot');
const keypad = document.querySelector('.keypad');
let pin = '';

keypad.addEventListener('click', (e) => {
  const value = e.target.textContent;

  if (value >= '0' && value <= '9') {
    if (pin.length < 4) {
      pin += value;
      dots[pin.length - 1].style.backgroundColor = '#333';
    }
  } else if (value === 'x') {
    pin = '';
    dots.forEach(dot => (dot.style.backgroundColor = '#fff'));
  } else if (value === '←') {
    if (pin.length > 0) {
      dots[pin.length - 1].style.backgroundColor = '#fff';
      pin = pin.slice(0, -1);
    }
  }
});