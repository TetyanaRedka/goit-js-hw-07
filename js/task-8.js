// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const quantityEl = document.querySelector('#controls input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

renderBtn.addEventListener('click', function newdiv() {
  createBoxes(quantityEl.value);
});

function createBoxes(amount) {
  let size = 30;
  const dives = [];
  for (let i = 1; i <= amount; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = size + 'px';
    newDiv.style.height = size + 'px';
    const color = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
    newDiv.style.background = color;
    size += 10;
    dives.push(newDiv);
  }
  boxes.append(...dives);
}

function random() {
  return Math.round(Math.random() * 254 + 1);
}

destroyBtn.addEventListener('click', function () {
  boxes.innerHTML = '';
});
