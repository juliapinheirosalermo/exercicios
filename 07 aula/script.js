var produto1 = {
    nome : "Coca cola",
    categoria : "Bebidas",
    tamanhos : ["200ml", "Lata", "600ml", "2L"],
    quantidade : 7,
    descricao : function(){
           // o produto X é da categoria X
           console.log("O produto ", this.nome ,
            "é da categoria", this.categoria)
    }
}
//console.log(produto1)

produto1.descricao()