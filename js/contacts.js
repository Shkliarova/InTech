const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Запобігає перезавантаженню сторінки

  // Показуємо повідомлення
  formMessage.classList.add("active");

  // Ховаємо повідомлення через 3 секунди
  setTimeout(() => {
    formMessage.classList.remove("active");
  }, 3000);

  // Очищуємо форму
  form.reset();
});
