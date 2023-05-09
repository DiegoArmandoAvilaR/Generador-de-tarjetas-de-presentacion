// Obtener elementos del DOM
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('job');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const cardName = document.getElementById('card-name');
const cardJob = document.getElementById('card-job');
const cardPhone = document.getElementById('card-phone');
const cardEmail = document.getElementById('card-email');
const card = document.getElementById('card');

// Actualizar tarjeta cuando se escriben valores nuevos
nameInput.addEventListener('input', updateCard);
jobInput.addEventListener('input', updateCard);
phoneInput.addEventListener('input', updateCard);
emailInput.addEventListener('input', updateCard);

// Función para actualizar los valores en la tarjeta
function updateCard() {
  cardName.innerHTML = nameInput.value;
  cardJob.innerHTML = jobInput.value;
  cardPhone.innerHTML = phoneInput.value;
  cardEmail.innerHTML = emailInput.value;
}

// Función para descargar tarjeta como imagen
function downloadCard() {
  html2canvas(card).then(function(canvas) {
    const link = document.createElement('a');
    link.download = 'tarjeta.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

//Este código utiliza document.getElementById() para obtener referencias a los elementos HTML relevantes, y luego agrega un evento input a cada uno para que la tarjeta se actualice automáticamente cada vez que se escribe algo nuevo en los campos de entrada. También hay una función downloadCard() que utiliza la biblioteca html2canvas para convertir la tarjeta en una imagen PNG y descargarla en el dispositivo del usuario cuando hacen clic en el botón de descarga.