function renderVisit(visit, doctor) {
    let visitCard;

    switch (doctor) {
        case 'Cardiologist':
            visitCard = new VisitToCardiologist(visit);
        break;
        case 'Dentist':
            visitCard = new VisitToDentist(visit);
        break;
        case 'Therapist':
            visitCard = new VisitToTherapist(visit);
        break;
    }

    visitCard.render();
}