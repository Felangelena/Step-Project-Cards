class Visit {
    constructor({id, visitor, doctor, priority, dateTime, goal, description, lastVisit, status, pressure, bmi, diseases, age}){
        this.id = id,
        this.visitor = visitor,
        this.doctor = doctor,
        this.priority = priority,
        this.dateTime = dateTime,
        this.status = status,
        this.goal = goal,
        this.description = description,
        this.lastVisit = lastVisit,
        this.pressure = pressure,
        this.bmi = bmi,
        this.diseases = diseases,
        this.age = age
    }

    createCard(){
        this.card = document.createElement('div');
        this.card.classList.add('card');
        this.card.dataset.id = this.id;
    }

    dateTimeToString(visit){
        const date = new Date(visit);
        return ("00" + date.getDate()).slice(-2) + "." +
            ("00" + (date.getMonth() + 1)).slice(-2) + "." +
            date.getFullYear() + " " +
            ("00" + date.getHours()).slice(-2) + ":" +
            ("00" + date.getMinutes()).slice(-2);
    }

    dateToString(visit){
        const date = new Date(visit);
        return ("00" + date.getDate()).slice(-2) + "." +
            ("00" + (date.getMonth() + 1)).slice(-2) + "." +
            date.getFullYear();
    }
}