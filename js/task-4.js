'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//готово

const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let value = 0;

decrementBtn.addEventListener('click', function decrement() {
  value -= 1;
  counterValue.textContent = value;
});

incrementBtn.addEventListener('click', function increment() {
  value += 1;
  counterValue.textContent = value;
});