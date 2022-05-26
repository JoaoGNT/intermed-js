const pessoa = {
    nome: 'João',
    sobrenome: 'Teles',
    idade: 24,
    profissao: 'Reporter'
}
console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.sobrenome;
// let profissao = pessoa.profissao;

let {nome, sobrenome, idade, profissao} = pessoa;

console.log(nome);