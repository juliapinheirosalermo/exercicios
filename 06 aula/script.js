var aluno = {
    nome : "Julia",
    anoEscolar : "2",
    turma : "A"
    notas : [6, 8, 7]
    estudar : function (){
        console.log("Estou estudando")
    },

    // metodo de função interna
    media : function(n1, n2, n3){
        return ((n1+n2+n3) / 3)
    },
    // metodo de função externa
    ocorrencias: listaDeOcorrencias
}
// acessa as propriedades do objeto aluno
console.log("O aluno ", aluno. nome, " estaá no ", aluno.anoEscolar, " ano escolar.");
// executa um metodo de dentro do objeto
aluno.estudar("Média final:", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));
//cria função externa para utilização do objeto
function listaDeOcorrencias(){
    console.log("Comeu na bibliteca");
    console.log("xingou no corredor da escola");
    console.log("Não fez o trabalho");
}

