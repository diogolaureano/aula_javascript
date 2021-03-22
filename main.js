function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
        // console.log(document.getElementById("agradecimento"))
        // alert("Obrigado por clicar")
}

function redirecionar() {
    //window.open("https://globallabs.academy/")
    window.location.href = "https://globallabs.academy/"
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por clicar"
        //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
        // alert("trocar texto")
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
        //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("pagina carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*function validaIdade(idade) {
    var validar
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade))
/*

/*function soma(n1, n2) {
    return n1 + n2
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10))
alert(setReplace("Vai Japão", "Japão", "Brasil"))
*/
/* var d = new Date()
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes()) */

/*var count
for (count = 0; count <= 5; count++) {
    alert(count)
}*/

/*
var count = 5
while (count < 5) {
    console.log(count)
    alert(count)
    count++
} */

/*var count = 0
while (count <= 5) {
    console.log(count)
    count = count + 1
} */

/*var idade = prompt("Qual sua idade?")
    //var idade = 18
if (idade > 18) {
    alert("maior de idade")
} else {
    alert("menor de idade")
} */

/*var fruta = [{ nome: "maça", cor: "verde" }, { nome: "uva", cor: "vermelho" }]
console.log(fruta)
alert(fruta[1].nome) */

/*var fruta = { nome: "maça", cor: "verde", }
console.log(fruta.nome)
alert(fruta.cor) */

//var lista = ["maça", "pera", "laranja"]
//lista.push("uva")
//lista.pop()
//console.log(lista.reverse())
//console.log(lista.toString())
//console.log(lista.join(" - "))
//var nome = "Diogo Sousa"
//var n1 = 5
//var n2 = 3
//var frase = "Japão é o melhor time do mundo"
//alert(nome + "tem + idade + "anos")
//alert(idade + idade2)
//console.log(nome)
//console.log(n1 * n2)
//console.log(frase.toLowerCase())
//alert(frase.replace("Japão", "Brasil"))