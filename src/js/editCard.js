function editCard(element){
    formElement.classList.add('Modal');
    overlay.style.display = 'block';
    openModal();
    document.querySelector('#addCardSubmitButton').style.display = 'none';
    const editBtn = document.querySelector('#editBtn');
    editBtn.style.display = 'block';

    const card = element.closest("div.card");
    let id = card.getAttribute('data-id');
    const doctor = card.querySelector('[data-doctor]').dataset.doctor;
    const visitor = card.querySelector('[data-visitor]').dataset.visitor;
    const goal = card.querySelector('[data-goal]').dataset.goal;
    const description = card.querySelector('[data-description]').dataset.description;
    const priority = card.querySelector('[data-priority]').dataset.priority;
    const status = card.querySelector('[data-status]').dataset.status;
    const date = card.querySelector('[data-date]').dataset.date;

    changeDoctor(doctor);
    doctorSelect.value = doctor;

    document.querySelector('#visitor').value = visitor;
    document.querySelector('#goal').value = goal;
    document.querySelector('#description').value = description;
    document.querySelector('#priority').value = priority;
    document.querySelector('#status').value = status;
    document.querySelector('#dateTime').value = date;

    switch (doctor) {
        case 'Dentist':
            const lastVisit = card.querySelector('[data-last]').dataset.last;
            document.querySelector('#lastVisit').value = lastVisit;
        break;
        case 'Cardiologist':
            console.log('Luck');
            const pressure = card.querySelector('[data-pressure]').dataset.pressure;
            document.querySelector('#bloodPressure').value = pressure;
            const bmi = card.querySelector('[data-bmi]').dataset.bmi;
            document.querySelector('#bmi').value = bmi;
            const diseases = card.querySelector('[data-diseases]').dataset.diseases;
            document.querySelector('#diseases').value = diseases;
            const age = card.querySelector('[data-age]').dataset.age;
            document.querySelector('#age').value = age;
        break;
        case 'Therapist':
            const years = card.querySelector('[data-years]').dataset.years;
            document.querySelector('#years').value = years;
        break;
    }

    editBtn.addEventListener('click', () => {
        editVisit(getVisitInfo(doctor, id), id);
    });
}