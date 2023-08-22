class VisitCardDentist {
    constructor({id, visitor, doctor, priority, dateTime, goal, description, lastVisit, status}) {
        this.id = id,
        this.visitor = visitor,
        this.doctor = doctor,
        this.priority = priority,
        this.dateTime = dateTime,
        this.status = status,
        this.goal = goal,
        this.description = description,
        this.lastVisit = lastVisit
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = this.id;

        const date = new Date(this.dateTime);
        const dateStr =
            ("00" + date.getDate()).slice(-2) + "." +
            ("00" + (date.getMonth() + 1)).slice(-2) + "." +
            date.getFullYear() + " " +
            ("00" + date.getHours()).slice(-2) + ":" +
            ("00" + date.getMinutes()).slice(-2);

        const lastVisit = new Date(this.lastVisit);
        const lastVisitStr =
            ("00" + lastVisit.getDate()).slice(-2) + "." +
            ("00" + (lastVisit.getMonth() + 1)).slice(-2) + "." +
            lastVisit.getFullYear();

        card.innerHTML = `
        <div class="card-header">
        <h5 class="card-title">Карта візиту</h5>
        <div class="card-header-btns">
            <button type="button" class="btn btn-primary btn--edit">Редагувати</button>
            <button type="button" class="btn btn-primary btn--delete" title="Видалити">X</button>
        </div>
        </div>
        <div class="card-body">
            <h6 class="title">ПІБ:</h6>
            <p class="desc">${this.visitor}</p>
            <h6 class="title">Лікар:</h6>
            <p class="desc">${this.doctor}</p>
            <button type="button" class="btn btn-primary seeMore">Показати більше</button>
            <div class="card-body-hide hide">
            <h6 class="title">Терміновість:</h6>
            <p class="desc">${this.priority}</p>
            <h6 class="title">Дата і час:</h6>
            <p class="desc">${dateStr}</p>
            <h6 class="title">Статус візиту:</h6>
            <p class="desc">${this.status}</p>
            <h6 class="title">Мета візиту:</h6>
            <p class="desc">${this.goal}</p>
            <h6 class="title">Опис візиту:</h6>
            <p class="desc">${this.description}</p>
            <h6 class="title">Дата останнього візиту:</h6>
            <p class="desc">${lastVisitStr}</p>
            </div>
        </div>
        `;
        document.querySelector('.visits').prepend(card);
    }
}

class VisitCardCardiologist {
    constructor({id, visitor, doctor, priority, dateTime, goal, description, pressure, bmi, diseases, age, status}) {
        this.id = id,
        this.visitor = visitor,
        this.doctor = doctor,
        this.priority = priority,
        this.dateTime = dateTime,
        this.status = status,
        this.goal = goal,
        this.description = description,
        this.pressure = pressure,
        this.bmi = bmi,
        this.diseases = diseases,
        this.age = age
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = this.id;
        const date = new Date(this.dateTime);
        const dateStr =
            ("00" + date.getDate()).slice(-2) + "." +
            ("00" + (date.getMonth() + 1)).slice(-2) + "." +
            date.getFullYear() + " " +
            ("00" + date.getHours()).slice(-2) + ":" +
            ("00" + date.getMinutes()).slice(-2);
        card.innerHTML = `
        <div class="card-header">
        <h5 class="card-title">Карта візиту</h5>
        <div class="card-header-btns">
            <button type="button" class="btn btn-primary btn--edit">Редагувати</button>
            <button type="button" class="btn btn-primary btn--delete" title="Видалити">X</button>
        </div>
        </div>
        <div class="card-body">
            <h6 class="title">ПІБ:</h6>
            <p class="desc">${this.visitor}</p>
            <h6 class="title">Лікар:</h6>
            <p class="desc">${this.doctor}</p>
            <button type="button" class="btn btn-primary seeMore">Показати більше</button>
            <div class="card-body-hide hide">
                <h6 class="title">Терміновість:</h6>
                <p class="desc">${this.priority}</p>
                <h6 class="title">Дата і час:</h6>
                <p class="desc">${dateStr}</p>
                <h6 class="title">Статус візиту:</h6>
                <p class="desc">${this.status}</p>
                <h6 class="title">Мета візиту:</h6>
                <p class="desc">${this.goal}</p>
                <h6 class="title">Опис візиту:</h6>
                <p class="desc">${this.description}</p>
                <h6 class="title">Звичайний тиск:</h6>
                <p class="desc">${this.pressure}</p>
                <h6 class="title">Індекс маси тіла:</h6>
                <p class="desc">${this.bmi}</p>
                <h6 class="title">Перенесені захворювання серцево-судинної системи:</h6>
                <p class="desc">${this.diseases}</p>
                <h6 class="title">Вік:</h6>
                <p class="desc">${this.age}</p>
            </div>
        </div>
        `;
        document.querySelector('.visits').prepend(card);
    }
}

class VisitCardTherapist {
    constructor({id, visitor, doctor, priority, dateTime, goal, description, age, status}) {
        this.id = id,
        this.visitor = visitor,
        this.doctor = doctor,
        this.priority = priority,
        this.dateTime = dateTime,
        this.status = status,
        this.goal = goal,
        this.description = description,
        this.age = age
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = this.id;
        const date = new Date(this.dateTime);
        const dateStr =
            ("00" + date.getDate()).slice(-2) + "." +
            ("00" + (date.getMonth() + 1)).slice(-2) + "." +
            date.getFullYear() + " " +
            ("00" + date.getHours()).slice(-2) + ":" +
            ("00" + date.getMinutes()).slice(-2);
        card.innerHTML = `
        <div class="card-header">
        <h5 class="card-title">Карта візиту</h5>
        <div class="card-header-btns">
            <button type="button" class="btn btn-primary btn--edit">Редагувати</button>
            <button type="button" class="btn btn-primary btn--delete" title="Видалити">X</button>
        </div>
        </div>
        <div class="card-body">
            <h6 class="title">ПІБ:</h6>
            <p class="desc">${this.visitor}</p>
            <h6 class="title">Лікар:</h6>
            <p class="desc">${this.doctor}</p>
            <button type="button" class="btn btn-primary seeMore">Показати більше</button>
            <div class="card-body-hide hide">
            <h6 class="title">Терміновість:</h6>
            <p class="desc">${this.priority}</p>
            <h6 class="title">Дата і час:</h6>
            <p class="desc">${dateStr}</p>
            <h6 class="title">Статус візиту:</h6>
            <p class="desc">${this.status}</p>
            <h6 class="title">Мета візиту:</h6>
            <p class="desc">${this.goal}</p>
            <h6 class="title">Опис візиту:</h6>
            <p class="desc">${this.description}</p>
            <h6 class="title">Вік:</h6>
            <p class="desc">${this.age}</p>
            </div>
        </div>
        `;
        document.querySelector('.visits').prepend(card);
    }
}

const visits = document.querySelector('.visits');

function getVisits() {
    visits.innerHTML = '';
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.length == 0) {
                visits.innerHTML = '<h2>No items have been added</h2>';
            } else {
                response.forEach(visit => renderVisit(visit, visit.doctor));
            }
        });
}

function renderVisit(visit, doctor) {
    switch (doctor) {
        case 'Cardiologist':
            const visitCard1 = new VisitCardCardiologist(visit);
            visitCard1.render();
        break;
        case 'Dentist':
            const visitCard2 = new VisitCardDentist(visit);
            visitCard2.render();
        break;
        case 'Therapist':
            const visitCard3 = new VisitCardTherapist(visit);
            visitCard3.render();
        break;
    }
}

visits.addEventListener('click', (e) => {
    const element = e.target;
    if(element.classList.contains('seeMore')){
        element.nextElementSibling.classList.toggle('hide');
        if (element.textContent == "Показати більше"){
            element.textContent = "Приховати"
        } else {
            element.textContent = "Показати більше"
        }
    } else if (element.classList.contains('btn--delete')){
        const cardId = element.closest("div.card").getAttribute('data-id');
        console.log(cardId);
        deleteCard(cardId);
        element.closest("div.card").remove();
    }
});
