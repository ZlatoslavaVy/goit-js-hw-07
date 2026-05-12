// 1. Посилання на DOM (Змінні)
const refs = {
    input: document.querySelector('#controls input'),
    boxes: document.querySelector("#boxes"),
    buttonCreate: document.querySelector('[data-create]'),
    buttonDestroy: document.querySelector('[data-destroy]'),
};

// 2. Допоміжні функції
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 3. Основні функції (Оголошуємо до того, як будемо їх використовувати)
const destroyBoxes = () => {
    refs.boxes.innerHTML = '';
};

// createBoxes йде після destroyBoxes, бо вона використовує destroyBoxes всередині
const createBoxes = amount => {
    destroyBoxes();
    const boxesArr = [];

    let size = 30;

    for (let i = 0; i < amount; i++) {
        const boxEl = document.createElement('div');

        boxEl.style.width = `${size}px`;
        boxEl.style.height = `${size}px`;
        boxEl.style.backgroundColor = getRandomHexColor();
       
        boxesArr.push(boxEl);
        
        size += 10;
    }
    refs.boxes.append(...boxesArr);
};

// 4. Слухачі подій (Підключаємо логіку до кнопок)
refs.buttonCreate.addEventListener("click", () => {
    const inputValue = Number(refs.input.value);
  if (inputValue >= 1 && inputValue <= 100) {
      createBoxes(inputValue);
      refs.input.value = '';
}
});

refs.buttonDestroy.addEventListener("click", () => {
    destroyBoxes();
});


