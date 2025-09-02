// objeto window = janela do navegador

console.log(window.alert(Oi));

window.prompt("Me diz um nome")

console.log(document);
console.log(document.head);
console.log(document.body);

//acessando elementos do html
// Por Tag, Class e Id

var titulos = document.getElementsByTagName("h1")

console.log(titulos)

var paragrafos = document.getElementsByClassName("para")

console.log(paragrafos)

var achado = document.getElementById("p3")
console.log(achado)

titulos[1].style.color = "green"
titulos[2].style.backgroundColor = "pink"

paragrafos[0].style.fontSize - "45px"
paragrafos[0].style.fontWeight - "bold"

achado.innerText = "tauba"

achado.innerHTML = ""