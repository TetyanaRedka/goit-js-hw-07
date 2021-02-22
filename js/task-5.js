// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
//готов

const userName = document.querySelector('#name-output');
const inputName = document.querySelector('#name-input');

inputName.addEventListener('input', changeName);

function changeName() {
  userName.textContent = event.currentTarget.value;
  if (userName.textContent === '') {
    userName.textContent = 'незнакомец';
  }
}
