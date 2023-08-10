const btnAddVisit = document.querySelector('#addVisit');
btnAddVisit.addEventListener('click', addVisit);

function addVisit() {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
        title: 'Визит к кардиологу',
        description: 'Не срочный визит',
        doctor: 'Cardiologist',
        bp: '26',
        age: 41,
        weight: 84
    })
    })
    .then(response => response.json())
    .then(response => console.log(response))
}


