'use strict';

//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.  Получится 'В списке 3 категории.'.

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
//сделано

const category = document.querySelectorAll('li.item');

console.log(`В списке ${category.length} категории.`);

[...category].forEach(title => {
  const hh = title.querySelector('li.item h2');
  console.log(`категория: ${hh.textContent}`);
  const liAll = title.querySelectorAll('li.item li');
  console.log(`Количество элементов: ${liAll.length}`);
});
