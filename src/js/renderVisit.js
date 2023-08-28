function renderVisit(visit, doctor) {
    switch (doctor) {
        case 'Cardiologist':
            const visitCard1 = new VisitToCardiologist(visit);
            visitCard1.render();
        break;
        case 'Dentist':
            const visitCard2 = new VisitToDentist(visit);
            visitCard2.render();
        break;
        case 'Therapist':
            const visitCard3 = new VisitToTherapist(visit);
            visitCard3.render();
        break;
    }
}