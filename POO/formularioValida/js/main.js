/*(() => {
    const formulario = document.body.querySelector('.formulario');
    const nome = document.body.formulario.querySelector('#nome');
    const sobrenome = document.body.formulario.querySelector('#sobrenome');
    const cpf = document.body.formulario.querySelector('#cpf');
    const usuario = document.body.formulario.querySelector('#usuario');
    const senha = document.body.formulario.querySelector('#senha');
    const repetirSenha = document.body.formulario.querySelector('#repetirsenha');
    const botao = document.body.formulario.querySelector('.botao');



    document.addEventListener('click', (e) => {
        const elemento = e.target;


        if (elemento.classLists.contains('botao')) {
            e.preventDefault();

            console.log('Hello');
        }
    })


}) () */



class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposIsValids();
        const senhasValidas = this.senhasValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulário Enviado');
            this.formulario.submit();
        }
    }

    camposIsValids() {
        let valid = true;


        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) {
                    valid = false;
                }
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) {
                    valid = false;
                }
                return valid;
            }

            
        }
    }

    senhasValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetirsenha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, `Campos Senha e repetir senha precisam ser iguais`);
            this.criaErro(repetirSenha, `Campos Senha e repetir senha precisam ser iguais`)

        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, `Senha precisa estar entre 6 e 12 caracteres`)
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCpf(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, `CPF Inválido.`);
            return false;
        }

        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length > 12 || usuario.length < 3) {
            this.criaErro(campo, 'Usuário Precisa ter entre 3 e 12 Caracteres');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de Usuário Precisa ter entre 3 e 12 Caracteres');
            valid = false;
        }


        return true;
    };

    criaErro (campo,msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();