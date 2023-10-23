// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValueSpan = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue--;
  updateCounterValue();
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  updateCounterValue();
});

function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}