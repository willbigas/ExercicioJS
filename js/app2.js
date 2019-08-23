const Pessoa = function(nome, email, nascimento) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;

    this.getIdade = function() {
        const diferenca = Date.now() - new Date(this.nascimento).getTime();
        return new Date(diferenca).getFullYear() - 1970;
    }

    this.getNascimento = function() {
        const dataSplit = this.nascimento.split("-");
        const ano = dataSplit[0];
        const mes = dataSplit[1];
        const dia = dataSplit[2];
        return `${dia}/${mes}/${ano}`
    }

}

function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const nascimento = document.getElementById("nascimento").value;

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