document.getElementById('btnMostrarFoto').addEventListener('click', function () {
    const containerFoto = document.getElementById('containerFoto');
    containerFoto.innerHTML = '';

    const img = document.createElement('img');
    img.src = 'img/image.png';
    img.alt = 'Foto especial';
    img.style.marginTop = '20px';
    img.style.maxWidth = '100%';

    containerFoto.appendChild(img);
});