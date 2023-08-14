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
metaInput.required = true; // Добавляем required к полю

const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.classList.add('form-control');
descriptionInput.placeholder = 'Короткий опис візиту';
descriptionInput.required = true; // Добавляем required к полю

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
fullNameInput.required = true;


const dateInputLabel = document.createElement('label');
dateInputLabel.textContent = 'Дата і час візиту'; // Текст надписи
dateInputLabel.classList.add('input-label'); // Добавляем класс для стилизации

// Создаем элемент input для даты и времени
const dateInput = document.createElement('input');
dateInput.type = 'datetime-local';
dateInput.classList.add('form-control');
dateInput.required = true;





// Кнопка "Створити"
const createCardButton = document.createElement('button');
createCardButton.type = 'submit';
createCardButton.classList.add('btn', 'btn-sm');
createCardButton.id = 'addCardSubmitButton';
createCardButton.textContent = 'Створити';

// Кнопка "Закрити"
const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.classList.add('btn', 'btn-sm');
closeButton.id = 'ExitAddCardButton';
closeButton.textContent = 'Закрити';


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
    extraFieldsContainer.style.display = 'block';
    
    
    

    
    formElement.appendChild(metaInput);
    formElement.appendChild(descriptionInput);
    formElement.appendChild(urgencySelect);
    formElement.appendChild(fullNameInput);
    formElement.appendChild(dateInputLabel);
    formElement.appendChild(dateInput);
    formElement.appendChild(createCardButton);
    formElement.appendChild(closeButton);}
    




function closeModal() {
    formElement.reset()
    formElement.classList.remove('Modal');
    overlay.style.display = 'none';
    formElement.style.display = 'none';

    // Сбрасываем значения всех полей в начальное состояние
    dateInput.value = ''; 
    metaInput.value = ''; 
    descriptionInput.value = ''; 
    urgencySelect.value = 'normal'; 
    fullNameInput.value = ''; 
    
    // Убираем дополнительные поля в зависимости от выбранного доктора
    extraFieldsContainer.innerHTML = '';

    const formGroups = formElement.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.style.display = 'block';
    });

    doctorSelect.style.display = 'none';
    extraFieldsContainer.style.display = 'none';
    

    formElement.removeChild(dateInput);
    formElement.removeChild(metaInput);
    formElement.removeChild(descriptionInput);
    formElement.removeChild(urgencySelect);
    formElement.removeChild(fullNameInput);
    formElement.removeChild(createCardButton);
    formElement.removeChild(closeButton);
    formElement.removeChild(dateInputLabel);



    
}


// Обработчик для кнопки "Закрити"
closeButton.addEventListener('click', closeModal);

exitButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);



const extraFieldsContainer = document.querySelector('.extra-fields-container');


function applyDoctorClass(selectedDoctor) {
    formElement.classList.remove('VisitDentist', 'VisitCardiologist', 'VisitTherapist');
    formElement.classList.add(selectedDoctor);
    extraFieldsContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых полей
}

doctorSelect.addEventListener('change', function () {
    const selectedDoctor = doctorSelect.value;

    switch (selectedDoctor) {
        case 'Dentist':
            applyDoctorClass('VisitDentist');
            addDentistFields();
            break;
        case 'Cardiologist':
            applyDoctorClass('VisitCardiologist');
            addCardiologistFields();
            break;
        case 'Therapist':
            applyDoctorClass('VisitTherapist');
            addTherapistFields();
            break;
        default:
            applyDoctorClass('');
            extraFieldsContainer.innerHTML = ''; // Скрываем дополнительные поля при выборе "Всі візити"
    }
});

// function addDentistFields() {

//     const lastVisitInput = document.createElement('input');
//     lastVisitInput.type = 'date';
//     lastVisitInput.classList.add('form-control');
//     lastVisitInput.placeholder = 'Дата останнього візиту';
//     lastVisitInput.required = true; // Добавляем required к полю - обязательное заполнение!
//     extraFieldsContainer.appendChild(lastVisitInput);
// }
function addDentistFields() {
    const lastVisitLabel = document.createElement('label');
    lastVisitLabel.textContent = 'Дата останнього візиту';
    lastVisitLabel.classList.add('input-label');

    const lastVisitInput = document.createElement('input');
    lastVisitInput.type = 'date';
    lastVisitInput.classList.add('form-control');
    lastVisitInput.required = true;

    extraFieldsContainer.appendChild(lastVisitLabel);
    extraFieldsContainer.appendChild(lastVisitInput);
}




function addCardiologistFields() {
    const bloodPressureInput = document.createElement('input');
    bloodPressureInput.type = 'text';
    bloodPressureInput.classList.add('form-control');
    bloodPressureInput.placeholder = 'Звичайний тиск';
    bloodPressureInput.required = true; // Добавляем required к полю
    extraFieldsContainer.appendChild(bloodPressureInput);

    const bmiInput = document.createElement('input');
    bmiInput.type = 'text';
    bmiInput.classList.add('form-control');
    bmiInput.placeholder = 'Індекс маси тіла';
    bmiInput.required = true; // Добавляем required к полю
    extraFieldsContainer.appendChild(bmiInput);

    const cardiacDiseasesInput = document.createElement('input');
    cardiacDiseasesInput.type = 'text';
    cardiacDiseasesInput.classList.add('form-control');
    cardiacDiseasesInput.placeholder = 'Перенесені захворювання ССС';
    cardiacDiseasesInput.required = true; 
    extraFieldsContainer.appendChild(cardiacDiseasesInput);

    const ageInput = document.createElement('input');
    ageInput.type = 'text';
    ageInput.classList.add('form-control');
    ageInput.placeholder = 'Вік';
    ageInput.required = true;
    ageInput.addEventListener('input', function() {
        // Проверяем, что введенное значение состоит только из цифр и находится в диапазоне от 1 до 120
        const inputValue = ageInput.value;
        if (/^[1-9][0-9]?$|^120$/.test(inputValue)) {
            ageInput.setCustomValidity(''); // Валидация успешна, сбрасываем сообщение об ошибке
        } else {
            ageInput.setCustomValidity('Введіть коректне значення віку (від 1 до 120)'); // Не соответствует условиям валидации
        }
    });
    extraFieldsContainer.appendChild(ageInput);
}

function addTherapistFields() {
    const ageInput = document.createElement('input');
    ageInput.type = 'text';
    ageInput.classList.add('form-control');
    ageInput.placeholder = 'Вік';
    ageInput.required = true;
    ageInput.addEventListener('input', function() {
        // Проверяем, что введенное значение состоит только из цифр и находится в диапазоне от 1 до 120
        const inputValue = ageInput.value;
        if (/^[1-9][0-9]?$|^120$/.test(inputValue)) {
            ageInput.setCustomValidity(''); // Валидация успешна, сбрасываем сообщение об ошибке
        } else {
            ageInput.setCustomValidity('Введіть коректне значення віку (від 1 до 120)'); // Не соответствует условиям валидации
        }
    });
    extraFieldsContainer.appendChild(ageInput);
}

createCardButton.addEventListener('click', function(event) {
    if (formElement.classList.contains('Modal') && doctorSelect.value === '') {
        event.preventDefault();
        alert('Выберите врача');
    }
    // Остальной код для создания визита
});


