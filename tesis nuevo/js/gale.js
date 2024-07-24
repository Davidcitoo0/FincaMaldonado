const galleryItems = document.querySelectorAll('.gallery__item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Aquí podrías abrir una modal o hacer alguna acción al hacer clic en una imagen
        // Por ejemplo, abrir una modal con la imagen en tamaño completo
        const imageSrc = item.querySelector('.gallery__image').src;
        // Lógica para mostrar la imagen en una modal
        console.log('Abrir modal con imagen:', imageSrc);
    });
});