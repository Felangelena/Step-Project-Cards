function getVisitInfo(doctor, id = 0){
    let visitInfo;
    switch (doctor) {
        case 'Dentist':
            visitInfo = {
                id: id,
                visitor: document.querySelector('#visitor').value,
                doctor: doctorSelect.value,
                priority: document.querySelector('#priority').value,
                dateTime: document.querySelector('#dateTime').value,
                status: document.querySelector('#status').value,
                goal: document.querySelector('#goal').value,
                description: document.querySelector('#description').value,
                lastVisit: document.querySelector('#lastVisit').value
            };
        break;
        case 'Cardiologist':
            visitInfo = {
                id: id,
                visitor: document.querySelector('#visitor').value,
                doctor: doctorSelect.value,
                priority: document.querySelector('#priority').value,
                dateTime: document.querySelector('#dateTime').value,
                status: document.querySelector('#status').value,
                goal: document.querySelector('#goal').value,
                description: document.querySelector('#description').value,
                pressure: document.querySelector('#bloodPressure').value,
                bmi: document.querySelector('#bmi').value,
                diseases: document.querySelector('#diseases').value,
                age: document.querySelector('#age').value
            }
        break;
        case 'Therapist':
            visitInfo = {
                id: id,
                visitor: document.querySelector('#visitor').value,
                doctor: doctorSelect.value,
                priority: document.querySelector('#priority').value,
                dateTime: document.querySelector('#dateTime').value,
                status: document.querySelector('#status').value,
                goal: document.querySelector('#goal').value,
                description: document.querySelector('#description').value,
                age: document.querySelector('#years').value
            };
        break;
    }

    return visitInfo;
}

