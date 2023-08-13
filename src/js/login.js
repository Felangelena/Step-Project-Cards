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

        getVisits();
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



// второй єтап




const overlay = document.getElementById('overlay');

createButton.addEventListener('click', function() {
    formElement.classList.add('Modal'); 
    overlay.style.display = 'block';
    formElement.style.display = 'flex'; 
});


createButton.addEventListener('click', function() {
    console.log('Button clicked!'); // ghjdthrf rkbrf gj ryjgrt
    formElement.style.display = 'block';
});







const doctorSelect = document.querySelector('.doctor-select');

const metaInput = document.createElement('input');
metaInput.type = 'text';
metaInput.classList.add('form-control');
metaInput.placeholder = 'Мета візиту';

const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.classList.add('form-control');
descriptionInput.placeholder = 'Короткий опис візиту';

const urgencySelect = document.createElement('select');
urgencySelect.classList.add('form-control');
urgencySelect.innerHTML = `
    <option value="normal">Звичайна</option>
    <option value="priority">Пріоритетна</option>
    <option value="urgent">Невідкладна</option>
`;

const fullNameInput = document.createElement('input');
fullNameInput.type = 'text';
fullNameInput.classList.add('form-control');
fullNameInput.placeholder = 'ПІБ';



createButton.addEventListener('click', function(event) {
    event.preventDefault();

    openModal();
});

function openModal() {
    formElement.classList.add('Modal');
    overlay.style.display = 'block';
    formElement.style.display = 'flex';

    const formGroups = formElement.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.style.display = 'none';
    });

    doctorSelect.style.display = 'block';

    formElement.appendChild(metaInput);
    formElement.appendChild(descriptionInput);
    formElement.appendChild(urgencySelect);
    formElement.appendChild(fullNameInput);
}

function closeModal() {
    formElement.classList.remove('Modal');
    overlay.style.display = 'none';
    formElement.style.display = 'none';

    const formGroups = formElement.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.style.display = 'block';
    });

    doctorSelect.style.display = 'none';

    formElement.removeChild(metaInput);
    formElement.removeChild(descriptionInput);
    formElement.removeChild(urgencySelect);
    formElement.removeChild(fullNameInput);
}



exitButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
