document.addEventListener('DOMContentLoaded', () => {
    const conjuntoFotos = document.getElementById('conjunto-fotos');
    const rutaCarpeta = 'img/sections/galeria/';
    const numImagenes = 10;

    for (let i = 1; i <= numImagenes; i++) {
        const img = document.createElement('img');
        img.src = `${rutaCarpeta}f${i}.jpeg`;
        img.alt = `Imagen ${i} tomada por el grupo Catarsis`;
        img.classList.add('caja-foto');
        conjuntoFotos.appendChild(img);
    }
});