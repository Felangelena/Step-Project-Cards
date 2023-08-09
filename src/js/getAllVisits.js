const btnGetVisit = document.querySelector('#getVisits');
btnGetVisit.addEventListener('click', getVisits);

function getVisits() {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(response => console.log(response))
}


