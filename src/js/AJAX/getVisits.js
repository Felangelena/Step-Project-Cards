// Get all visits

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
                visits.innerHTML = '<h2>Немає записів візитів</h2>';
            } else {
                response.forEach(visit => renderVisit(visit, visit.doctor));
            }
        });
}