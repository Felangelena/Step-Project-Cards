class VisitCard {
    constructor({visitor, doctor, description, priority, date}) {
        this.visitor = visitor,
        this.doctor = doctor,
        this.description = description,
        this.priority = priority,
        this.date = date
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('visit-card');
        card.innerHTML = `
        <div class="visit-card__header">
            <h3 class="visit-card__title">Карта візиту</h3>
            <div class="visit-card__header__bts">
                <button type="button" class="visit-card__btn btn--edit" id="editBtn"></button>
                <button type="button" class="visit-card__btn btn--delete" id="deletBtn"></button>
            </div>
        </div>
        <p class="title">ПІБ:</p>
        <p class="desc">${this.visitor}</p>
        <p class="title">Лікар:</p>
        <p class="desc">${this.doctor}</p>
        <button type="button" class="btn btn-primary" id="seeMore">Показати більше</button>
        <p class="title">Опис візиту:</p>
        <p class="desc">${this.description}</p>
        <p class="title">Терміновість:</p>
        <p class="desc">${this.priority}</p>
        <p class="title">Дата візиту:</p>
        <p class="desc">${this.date}</p>
        `;
        document.querySelector('.visits').append(card);
    }
}