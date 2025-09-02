// 1
var cores = ["vermelho", "azul", "verde"];
console.log(cores);
//2
console.log(cores[0]);
//3
cores.push("amarelo");
console.log(cores);
//4
cores[1] = "roxo";
console.log(cores);
//5
for(var i = 0; i < cores.length; i++){
    console.log(cores[i]);
}
//6
for(var i in cores){
    console.log(cores[i]);
}
//7
var numeros = [2, 4, 6, 8, 10];
var soma = 0;

for (var i = 0; i < numeros.length; i++){
}
console.log("Soma dos valores: ", soma)