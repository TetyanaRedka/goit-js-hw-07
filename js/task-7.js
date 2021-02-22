// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const minSize = document.querySelector('#min-size');
const maxSize = document.querySelector('#max-size');
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

minSize.addEventListener('blur', function () {
  inputEl.min = minSize.value;
});
maxSize.addEventListener('blur', function () {
  inputEl.max = maxSize.value;
});

maxSize.addEventListener('blur', function () {
  console.log(maxSize.value);
});

inputEl.addEventListener('input', function () {
  textEl.style.fontSize = inputEl.value + 'px';
});
