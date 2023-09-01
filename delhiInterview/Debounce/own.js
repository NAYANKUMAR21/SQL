const inputTag = document.querySelector('input');
const defaultText = document.querySelector('#default-text');
const debounceText = document.querySelector('#debounce-text');
const throttleText = document.querySelector('#throttle-text');
const callback = (text) => {
  debounceText.textContent = text;
};
const updateDebounceText = debounceFn(callback, delay('component'));

inputTag.addEventListener('input', (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value, 1500);
});

function debounceFn(cb, delay = 1000) {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
function delay(type) {
  if ('Search' === type) {
    return 1500;
  } else if ('component' == type) {
    return 2000;
  } else {
    return 2500;
  }
}
