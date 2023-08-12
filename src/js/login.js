const enterButton = document.getElementById('enterButton');
const formElement = document.querySelector('.form-autoris form');
const overlayElement = document.querySelector('.overlay');

enterButton.addEventListener('click', function() {
  formElement.style.display = 'block';
  overlayElement.style.display = 'block';
});

overlayElement.addEventListener('click', function(event) {
  if (event.target === overlayElement) {
    formElement.style.display = 'none';
    overlayElement.style.display = 'none';
  }
});



const mainField = document.getElementById('mainField');
const createButton = document.getElementById('createButton');
const exitButton = document.getElementById('exitButton');
const helloWindow = document.getElementById('helloWindow');
const token = 'c5dbf986-2bf0-4d36-80bd-13cbea71b9e8';

formElement.addEventListener('submit', function(event) {
    event.preventDefault();

    const loginInput = formElement.querySelector('input[name="login"]');
    const passwordInput = formElement.querySelector('input[name="password"]');

    if (loginInput.value === 'felangelena@gmail.com' && passwordInput.value === 'danIT') {
        localStorage.setItem('token', token);

        // Показать элементы и скрыть модальное окно
        enterButton.style.display = 'none';
        formElement.style.display = 'none';
        overlayElement.style.display = 'none';
        helloWindow.style.display = 'none';
        createButton.style.display = 'block';
        exitButton.style.display = 'block';
        mainField.style.display = 'flex';
    } else {
        alert('Ошибка: неправильний логін або пароль');
    }
});

exitButton.addEventListener('click', function() {
    localStorage.removeItem('token');

    // Скрыть элементы и показать модальное окно
    enterButton.style.display = 'block';
    helloWindow.style.display = 'flex';
    formElement.style.display = 'none';
    createButton.style.display = 'none';
    exitButton.style.display = 'none';
    mainField.style.display = 'none';
});

// Проверка наличия токена в Local Storage при загрузке страницы
if (localStorage.getItem('token')) {
    enterButton.style.display = 'none';
    formElement.style.display = 'none';
    overlayElement.style.display = 'none';
        helloWindow.style.display = 'none';
    createButton.style.display = 'block';
    exitButton.style.display = 'block';
    mainField.style.display = 'flex';
}

overlayElement.addEventListener('click', function(event) {
    if (event.target === overlayElement) {
        formElement.style.display = 'none';
        overlayElement.style.display = 'none';
    }
});

