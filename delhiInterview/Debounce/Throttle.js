const inputTag = document.querySelector('input');
const defaultText = document.querySelector('#default-text');
const debounceText = document.querySelector('#debounce-text');
const throttleText = document.querySelector('#throttle-text');
const MouseMovementText = document.querySelector('#MouseMovement-text');

const updateThrottleText = throttleFn((text) => {
  console.log('nayan');
  throttleText.textContent = text;
});
const updateTDebounceText = debounceFN((text) => {
  debounceText.textContent = text;
});
inputTag.addEventListener('input', (e) => {
  defaultText.textContent = e.target.value;
  updateTDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

//when page loads it just return function very moment
//because we have called thefunction on updateThrottleText function on page loads
function debounceFN(cb, delay = 1000) {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttleFn(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs = undefined;
  let timeOutFn = () => {
    if (waitingArgs == undefined) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = undefined;
      setTimeout(timeOutFn, delay);
    }
  };
  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);

    shouldWait = true;

    setTimeout(timeOutFn, delay);
  };
}
function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
document.addEventListener('mousemove', (e) => {
  incrementCount(MouseMovementText);
});
