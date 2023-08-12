// Add card

/* fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
  visitor: "Anna",
  priority: "Low",
  goal: "Medical check",
  description: "Check weight",
  doctor: "Therapist",
  age: 27
  })
})
  .then(response => response.json())
  .then(response => console.log(response)) */

const visitDentist = {
    visitor: "Olena",
    priority: "High",
    goal: "Delete teeth",
    description: "Delete down wise teeth",
    doctor: "Dentist",
    lastVisit: "2017-01-26"
};

const visitCardiologist = {
    visitor: "Ivan",
    priority: "Low",
    goal: "Check heart rythm",
    description: "Fast hearth rythm",
    doctor: "Cardiologist",
    pressure: "120/90",
    bp: 32,
    desease: "type I",
    age: 32
};

const visitTherapist = {
    visitor: "Julia",
    priority: "Normal",
    goal: "Medical check",
    description: "Check pressure, hearth beat",
    doctor: "Therapist",
    age: 26
};