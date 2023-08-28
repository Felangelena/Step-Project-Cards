// Add visit

function createVisit(data) {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(response => {
    console.log(response);
    let visitCard;
    switch (response.doctor) {
      case 'Cardiologist':
          visitCard = new VisitToCardiologist(response);
      break;
      case 'Dentist':
          visitCard = new VisitToDentist(response);
      break;
      case 'Therapist':
          visitCard = new VisitToTherapist(response);
      break;
    }
    visitCard.render();
  });
}