const elementos = [
    {tag: 'p' , texto: 'Qualquer texto que você quiser'},
    {tag: 'div' , texto: 'frase 2'},
    {tag: 'footer' , texto: 'frase 3'},
    {tag: 'section' , texto: 'frase 4'},
]

// documento central (PAI)
const container = document.querySelector('.container')
const corpo = document.body;
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    let tagAlternativa = document.createElement(tag);
    tagAlternativa.innerText += texto;
    div.appendChild(tagAlternativa);
}

corpo.appendChild(div)

// criando as tags
/*const paragrafo = document.createElement('p');
const divisao = document.createElement('div');
const footer = document.createElement('footer');
const section = document.createElement('section');

// colocando valores dentro das tags, no caso puxando valores do js...
const textoP = document.createTextNode(`${elementos[0].texto}`);
const divisaoText = document.createTextNode(`${elementos[1].texto}`);
const footerText = document.createTextNode(`${elementos[2].texto}`);
const sectionText = document.createTextNode(`${elementos[3].texto}`);

// integrando os elementos na pagina
corpo.appendChild(paragrafo);
corpo.appendChild(divisao);
corpo.appendChild(footer);
corpo.appendChild(section);


divisao.appendChild(divisaoText)
paragrafo.appendChild(textoP)
footer.appendChild(footerText)
section.appendChild(sectionText)*/
