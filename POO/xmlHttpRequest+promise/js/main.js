const request = (obj) => {
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
  
};


document.addEventListener('click', (e) => {
    const elemento = e.target;
    e.preventDefault();

    const tag = elemento.tagName.toLowerCase();

    if(tag === 'a') {
        carregaPagina(elemento)
    }
});


async function carregaPagina(elemento) {
    const href = elemento.getAttribute('href');


try{
   const response = await request({
        method: 'GET',
        url: href,
    })
    carregaResultado(response); } 
    
    catch (error) {
        console.log(error);
    }
}


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};