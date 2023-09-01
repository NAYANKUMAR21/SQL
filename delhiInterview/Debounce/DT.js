const inputTag = document.querySelector('#input');
const debounceText = document.querySelector('#debounce-text');
const defaultText = document.querySelector('#default-text');
const throttleText = document.querySelector('#throttle-text');

const updateDebounceText = debounceFN((text) => {
  debounceText.textContent = text;
}, 1000);
const updateThrottleText = throttleFn((text) => {
  throttleText.textContent = text;
}, 1000);
inputTag.addEventListener('input', (e) => {
  console.log(e.target.value);
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

function debounceFN(cb, delay = 1000) {
  let timeOutClearence;
  return (...args) => {
    clearTimeout(timeOutClearence);
    timeOutClearence = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
function throttleFn(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  let timeOutHandler = () => {
    if (waitingArgs == undefined) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = undefined;
      setTimeout(timeOutHandler, delay);
    }
  };
  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeOutHandler, delay);
  };
}
