class VisitCardDentist {
    constructor({id, visitor, doctor, priority, goal, description, lastVisit}) {
        this.id = id,
        this.visitor = visitor,
        this.doctor = doctor,
        this.priority = priority,
        this.goal = goal,
        this.description = description,
        this.lastVisit = lastVisit
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = this.id;
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
                <h6 class="title">Мета візиту:</h6>
                <p class="desc">${this.goal}</p>
                <h6 class="title">Опис візиту:</h6>
                <p class="desc">${this.description}</p>
                <h6 class="title">Дата останнього візиту:</h6>
                <p class="desc">${this.lastVisit}</p>
            </div>
        </div>
        `;
        document.querySelector('.visits').append(card);
    }
}

class VisitCardCardiologist {
    constructor({id, visitor, doctor, priority, goal, description, pressure, bp, desease, age}) {
        this.id = id,
        this.visitor = visitor,
        this.doctor = doctor,
        this.priority = priority,
        this.goal = goal,
        this.description = description,
        this.pressure = pressure,
        this.bp = bp,
        this.desease = desease,
        this.age = age
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = this.id;
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
                <h6 class="title">Мета візиту:</h6>
                <p class="desc">${this.goal}</p>
                <h6 class="title">Опис візиту:</h6>
                <p class="desc">${this.description}</p>
                <h6 class="title">Звичайний тиск:</h6>
                <p class="desc">${this.pressure}</p>
                <h6 class="title">Індекс маси тіла:</h6>
                <p class="desc">${this.bp}</p>
                <h6 class="title">Перенесені захворювання серцево-судинної системи:</h6>
                <p class="desc">${this.desease}</p>
                <h6 class="title">Вік:</h6>
                <p class="desc">${this.age}</p>
            </div>
        </div>
        `;
        document.querySelector('.visits').append(card);
    }
}

class VisitCardTherapist {
    constructor({id, visitor, doctor, priority, goal, description, age}) {
        this.id = id,
        this.visitor = visitor,
        this.doctor = doctor,
        this.priority = priority,
        this.goal = goal,
        this.description = description,
        this.age = age
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = this.id;
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
                <h6 class="title">Мета візиту:</h6>
                <p class="desc">${this.goal}</p>
                <h6 class="title">Опис візиту:</h6>
                <p class="desc">${this.description}</p>
                <h6 class="title">Вік:</h6>
                <p class="desc">${this.age}</p>
            </div>
        </div>
        `;
        document.querySelector('.visits').append(card);
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
                response.forEach(visit => {
                    if(visit.doctor == 'Cardiologist'){
                    const visitCard1 = new VisitCardCardiologist(visit);
                    visitCard1.render();
                    } else if (visit.doctor == 'Dentist') {
                    const visitCard2 = new VisitCardDentist(visit);
                    visitCard2.render();
                    } else if (visit.doctor == 'Therapist') {
                    const visitCard3 = new VisitCardTherapist(visit);
                    visitCard3.render();
                    }
                })
            }
        })
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
