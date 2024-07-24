// Obtener todos los elementos de las imágenes en miniatura
const thumbnails = document.querySelectorAll('.gallery__image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeModal = document.getElementById('close');

// Agregar un evento de clic a cada imagen en miniatura
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = thumbnail.src;
    
    });
});

// Cerrar el modal cuando se hace clic en el botón de cierre
closeModal.onclick = () => {
    modal.style.display = 'none';
};

// Cerrar el modal cuando se hace clic fuera de la imagen
modal.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
};
