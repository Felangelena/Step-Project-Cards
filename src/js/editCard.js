// Edit card

function editVisit () {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            id: id,
            title: 'Визит к кардиологу',
            description: 'Новое описание визита',
            doctor: 'Cardiologist',
            bp: '24',
            age: 23,
            weight: 70
        })
    })
        .then(response => response.json())
        .then(response => console.log(response))
}