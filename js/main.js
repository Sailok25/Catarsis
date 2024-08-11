document.addEventListener('DOMContentLoaded', () => {
    const conjuntoFotos = document.getElementById('conjunto-fotos');
    const rutaCarpeta = 'img/sections/galeria/random/';
    const numImagenes = 4;

    for (let i = 1; i <= numImagenes; i++) {
        const img = document.createElement('img');
        img.src = `${rutaCarpeta}${i}.jpg`;
        img.alt = `Imagen ${i} tomada por el grupo Catarsis`;
        img.classList.add('caja-foto');
        conjuntoFotos.appendChild(img);
    }
});