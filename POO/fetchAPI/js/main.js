/*const request = (obj) => {
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(null);
    
        xhr.addEventListener('load', (e) => {
            const evento = e.target;
    
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText)
            }
        })
    })
  
}; */


document.addEventListener('click', (e) => {
    const elemento = e.target;
    e.preventDefault();

    const tag = elemento.tagName.toLowerCase();

    if(tag === 'a') {
        carregaPagina(elemento)
    }
});


async function carregaPagina(elemento) {

    try{
    const href = elemento.getAttribute('href');
    const response = await fetch(href);
    if(response.status !== 200) throw new Error('ERRO 404');
    const html = await response.text();
    carregaResultado(html)
    fetch(href) }
    catch(e) {
        console.error(e)
    }



    /*
    fetch(href)
    .then((response) => {
        if(response.status !== 200) throw new Error('ERRO 404')
       return response.text()
    })
    .then((html) => carregaResultado(html))
    .catch(e => console.error(e));
    
    */

}


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};


/*
fetch('pag3.html').then(resposta => {
    if(resposta.status !== 200 ) throw new Error('ERRO 404 NOSSO');

    return resposta.text();
}).then(html => {
    console.log(html)
})
.catch(e => {
    console.error(e);
}); */