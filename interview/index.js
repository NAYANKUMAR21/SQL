const defaulText = document.querySelector('.default-text');
const debounce = document.querySelector('.debounce-text');
const inputTag = document.querySelector('#input-tag');
const updateText = debounceFn((text) => {
  debounce.textContent = text;
}, 500);
inputTag.addEventListener('input', (e) => {
  console.log(e.target.value);
  defaulText.textContent = e.target.value;
  updateText(e.target.value);
});

function debounceFn(cb, delay) {
  let timeOut;
  return (text) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(text);
    }, delay);
  };
}
