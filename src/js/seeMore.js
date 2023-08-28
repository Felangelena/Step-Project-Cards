function seeMore(element){
    element.nextElementSibling.classList.toggle('hide');
    if (element.textContent == "Показати більше"){
        element.textContent = "Приховати"
    } else {
        element.textContent = "Показати більше"
    }
}