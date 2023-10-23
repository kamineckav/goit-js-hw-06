// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const itemEl = document.querySelector("#categories");

const categoriesCount = itemEl.children.length;
console.log(`Number of categories: ${categoriesCount}`);

itemEl.querySelectorAll(".item").forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
