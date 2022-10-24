function meuFormulario(e) {
    const form = document.querySelector('#formulario');
    const nome = form.querySelector('#inome');
    const sobrenome = form.querySelector('#isobrenome');
    const pesoEmM = form.querySelector('#ipeso');
    const altura = form.querySelector('#ialtura');
    const texto = form.querySelector('#texto');


    const pessoas = [];
    
    function recebeEventoForm(e) {
    e.preventDefault();
    const adicionaPessoas = { nome:nome.value, sobrenome:sobrenome.value, PesoEmM:pesoEmM.value, altura:altura.value};
    pessoas.push(adicionaPessoas);
    console.log(pessoas);
    texto.innerHTML += `<p/>${nome.value} ${sobrenome.value} ${Number(pesoEmM.value)}KG ${Number(altura.value)}Metros</p>`;

};
    form.addEventListener('submit', recebeEventoForm);

    }



meuFormulario();


