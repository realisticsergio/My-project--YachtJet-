// 1. Знаходимо елементи (кнопку бургер, кнопку закриття та саме меню)
const openMenuBtn = document.querySelector('.burger-btn');
const closeMenuBtn = document.querySelector('.menu-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

// 2. Функція для відкриття меню
openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open'); // Додає клас, який ми стилізували в CSS
});

// 3. Функція для закриття меню
closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open'); // Прибирає клас
});