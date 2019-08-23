class Pessoa {

    constructor(nome, email, nascimento) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
    }

    getIdade() {
        const diferenca = Date.now() - new Date(this.nascimento).getTime();
        return new Date(diferenca).getFullYear() - 1970;
    }

    getNascimento() {
        const dataSplit = this.nascimento.split("-");
        const ano = dataSplit[0];
        const mes = dataSplit[1];
        const dia = dataSplit[2];
        return `${dia}/${mes}/${ano}`
    }

}
