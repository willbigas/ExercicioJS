function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const nascimento = document.getElementById("nascimento").value;

    validarFormulario();
    if (nome.length == 0 || email.length == 0 || nascimento.length == 0) {
        return;
    }


    const pessoa = new Pessoa(nome, email, nascimento);

    const tabela = document.getElementById("dados");
    const tbody = tabela.getElementsByTagName("tbody")[0];

    const novaLinha = tbody.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const textoNome = document.createTextNode(pessoa.nome);
    celulaNome.appendChild(textoNome);

    const celulaEmail = novaLinha.insertCell(1);
    const textoEmail = document.createTextNode(pessoa.email);
    celulaEmail.appendChild(textoEmail);

    const celulaNascimento = novaLinha.insertCell(2);
    const dataFormatada = pessoa.getNascimento();
    const textoNascimento = document.createTextNode(dataFormatada);
    celulaNascimento.appendChild(textoNascimento);

    const celulaIdade = novaLinha.insertCell(3);
    const idade = pessoa.getIdade();
    const textoIdade = document.createTextNode(idade);
    celulaIdade.appendChild(textoIdade);

    limparFormulario();
}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nascimento").value = "";
}

function validarFormulario() {
    verificarNome();
    verificarEmail();
    verificarNascimento();
}

function verificarNome() {
    const nome = document.getElementById("nome").value;
    if (nome.length == 0) {
        document.getElementById("nome").style.border = "thin solid red";
    } else {
        document.getElementById("nome").style.border = "none";
    }
}

function verificarEmail() {
    const nome = document.getElementById("email").value;
    if (nome.length == 0) {
        document.getElementById("email").style.border = "thin solid red";
    } else {
        document.getElementById("email").style.border = "none";
    }
}

function verificarNascimento() {
    const nome = document.getElementById("nascimento").value;
    if (nome.length == 0) {
        document.getElementById("nascimento").style.border = "thin solid red";
    } else {
        document.getElementById("nascimento").style.border = "none";
    }
}