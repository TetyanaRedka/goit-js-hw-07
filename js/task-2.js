'use strict';

//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
//сделано
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingradientsEl = document.querySelector('#ingredients');

const elements = [];
ingredients.map(ingradient => {
  const ingradientEl = document.createElement('li');
  ingradientEl.textContent = ingradient;
  elements.push(ingradientEl);
});

ingradientsEl.append(...elements);

console.log(ingradientsEl);
