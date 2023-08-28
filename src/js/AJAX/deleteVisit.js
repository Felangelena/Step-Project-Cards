// Delete visit

function deleteVisit(id) {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'DELETE',
        headers: {
        'Authorization': `Bearer ${token}`
        },
    });
}