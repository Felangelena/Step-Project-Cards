
const enterButton = document.getElementById('enterButton');
const formElement = document.querySelector('.form-autoris form');
const overlayElement = document.querySelector('.overlay'); 

enterButton.addEventListener('click', function() {
  formElement.style.display = 'block';
  overlayElement.style.display = 'block'; 
});

overlayElement.addEventListener('click', function(event) {
  if (event.target === overlayElement) {
    formElement.style.display = 'none';
    overlayElement.style.display = 'none'; 
  }
});
