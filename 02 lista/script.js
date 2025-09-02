//1
var pessoa = {
    nome: "João",
    idade: 25
};
console.log(pessoa)
//2
console.log(pessoa.nome)
//3
pessoa.idade = 30;
console.log(pessoa);
//4
pessoa.cidade = "Vitória";
console.log(pessoa)
//5
pessoa.apresentar = function() {
    return "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.";
};

console.log(pessoa.apresentar());
//6
var turma = [
    { nome: "Maria", nota: 9 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 10 }
];

for (let i = 0; i < turma.length; i++){
    console.log([i].nome + " - Nota: " + turma[i].nota);
    
}