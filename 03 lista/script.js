//1
function boasVindas(){
    console.log("Bem-vindo(a) ao curso de JavaScript!");
}
boasVindas();
//2
function saudar (nome){
    console.log("Olá, " = nome);
}
saudar("Maria");
//3
function dobro(numero){
    return numero * 2;
}
console.log(dobro(7));
//4
function soma(a, b){
    return a + b;
}
console.log(soma(10, 15));
//5
function media(numeros){
    var soma = 0;
    for (var i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    return soma / numeros.length;
}
console.log(media([5, 7, 9, 10]));
//6
function descricaoPessoa(pessoa) {
    return pessoa.nome + " tem " + pessoa.idade + " anos.";
}
console.log(descricaoPessoa({ nome: "João", idade: 20}));
//7
var calculadora = {
    multiplicar: function (a, b){
        
        return a * b;
    }
};
console.log(calculadora.multiplicar(6, 4));