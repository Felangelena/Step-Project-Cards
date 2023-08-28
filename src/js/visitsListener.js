const visits = document.querySelector('.visits');

visits.addEventListener('click', (e) => {
    const element = e.target;
    if(element.classList.contains('seeMore')){
        seeMore(element);
    } else if (element.classList.contains('btn--delete')){
        const card = element.closest("div.card");
        const cardId = card.getAttribute('data-id');
        deleteVisit(cardId);
        card.remove();
    } else if (element.classList.contains('btn--edit')){
        editCard(element);
    }
});