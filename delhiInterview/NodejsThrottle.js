let count = 1;
function throttle(func, delay) {
  let lastExecution = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastExecution >= delay) {
      func.apply(this, args);
      lastExecution = now;
    }
  };
}

const throttledScroll = throttle(() => {
  console.log(count++);
}, 1000);
