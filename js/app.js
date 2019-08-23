function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const nascimento = document.getElementById("nascimento").value;

    /*const pessoa = {
        nome: nomeDigitado,
        email: emailDigitado,
        nascimento: nascimentoDigitado
    }*/

    /*const pessoa = {
        nome: nome,
        email: email,
        nascimento: nascimento
    }*/

    const pessoa = { nome, email, nascimento };

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
    const dataFormatada = formataData(pessoa.nascimento)
    const textoNascimento = document.createTextNode(dataFormatada);
    celulaNascimento.appendChild(textoNascimento);

    const celulaIdade = novaLinha.insertCell(3);
    const idade = calculaIdade(pessoa.nascimento);
    const textoIdade = document.createTextNode(idade);
    celulaIdade.appendChild(textoIdade);

    limparFormulario();
}

function calculaIdade(nascimento) {
    const diferenca = Date.now() - new Date(nascimento).getTime();
    return new Date(diferenca).getFullYear() - 1970;
}

function formataData(data) {
    // O método toLocaleDateString() formata 
    // com o padrão do idioma da máquina
    const dataSplit = data.split("-");
    const ano = dataSplit[0];
    const mes = dataSplit[1];
    const dia = dataSplit[2];

    /*return dia + "/" + mes + "/" + ano;*/
    return `${dia}/${mes}/${ano}`
}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nascimento").value = "";
}