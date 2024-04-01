// Отримує посилання на елементи меню
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Додає обробник події для бургер-меню
menuBtn.addEventListener('click', () => {
  // Перемикає клас 'active' для бургер-меню та меню
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});