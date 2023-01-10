const containerParagrafos = document.querySelector('.containerParagrafos');
const paragrafos = containerParagrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;


console.log(backgroundColorBody)

for (const p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffff';
}
