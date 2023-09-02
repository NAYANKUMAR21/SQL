const inputTag = document.querySelector('input');
const defaultText = document.querySelector('#default-text');
const debounceText = document.querySelector('#debounce-text');
const throttleText = document.querySelector('#throttle-text');

const updateDebounceText = debounceFn((text) => {
  console.log(2);
  debounceText.textContent = text;
}, 2500);

inputTag.addEventListener('input', (e) => {
  defaultText.textContent = e.target.value;
  console.log(1);
  updateDebounceText(e.target.value);
});

function debounceFn(cb, delay = 1000) {
  console.log(3, cb);
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
