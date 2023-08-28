class VisitToTherapist extends Visit{
    constructor(id, visitor, doctor, priority, dateTime, goal, description, age, status) {
    super(id, visitor, doctor, priority, dateTime, goal, description, age, status);
    }

    render() {
        super.createCard();
        this.dateTimeStr = super.dateTimeToString(this.dateTime);

        this.card.innerHTML = `
            <div class="card-header">
            <h5 class="card-title">Карта візиту</h5>
            <div class="card-header-btns">
                <button type="button" class="btn btn-primary btn--edit">Редагувати</button>
                <button type="button" class="btn btn-primary btn--delete" title="Видалити">X</button>
            </div>
            </div>
            <div class="card-body">
                <h6 class="title">ПІБ:</h6>
                <p class="desc" data-visitor="${this.visitor}">${this.visitor}</p>
                <h6 class="title">Лікар:</h6>
                <p class="desc" data-doctor="${this.doctor}">${this.doctor}</p>
                <button type="button" class="btn btn-primary seeMore">Показати більше</button>
                <div class="card-body-hide hide">
                    <h6 class="title">Терміновість:</h6>
                    <p class="desc" data-priority="${this.priority}">${this.priority}</p>
                    <h6 class="title">Дата і час:</h6>
                    <p class="desc" data-date="${this.dateTime}">${this.dateTimeStr}</p>
                    <h6 class="title">Статус візиту:</h6>
                    <p class="desc" data-status="${this.status}">${this.status}</p>
                    <h6 class="title">Мета візиту:</h6>
                    <p class="desc" data-goal="${this.goal}">${this.goal}</p>
                    <h6 class="title">Опис візиту:</h6>
                    <p class="desc" data-description="${this.description}">${this.description}</p>
                    <h6 class="title">Вік:</h6>
                    <p class="desc" data-years="${this.age}">${this.age}</p>
                </div>
            </div>`;
        document.querySelector('.visits').prepend(this.card);
    }
}