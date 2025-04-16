function toggle(button) {
  if (button.classList.contains("toggle-button-on")) {
    button.classList.remove("toggle-button-on");
  } else {
    // Удаляем класс у всех кнопок перед добавлением к текущей
    document.querySelectorAll(".js-buton").forEach((btn) => {
      btn.classList.remove("toggle-button-on");
    });
    button.classList.add("toggle-button-on");
  }
}