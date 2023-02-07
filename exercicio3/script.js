//Exercicio 3
//a)
const soma = (nun1, nun2) => {
    const soma = nun1 + nun2
    const frase = `A soma dos dois números será ${soma}`
    return frase
}
const subitracao = (nun1, nun2) => {
    const subitracao = nun1 - nun2
    const frase = `A subtração dos dois números será ${subitracao}`
    return frase
}
const multiplicacao = (nun1, nun2) => {
    const multiplicacao = nun1 * nun2
    const frase = `A multiplicação dos dois números será ${multiplicacao}`
    return frase
}
const divisao = (nun1, nun2) => {
    const divisao = nun1 / nun2
    const frase = `A divisão dos dois números será ${divisao}`
    return frase
}

//b)
const primeiroNumero = Number(prompt('Insira um número:'))
const segundoNumero = Number(prompt('Insira outro número:'))

//c)
soma(primeiroNumero,segundoNumero)
subitracao(primeiroNumero,segundoNumero)
multiplicacao(primeiroNumero,segundoNumero)
divisao(primeiroNumero,segundoNumero)

//d) 
console.log(`Os números inseridos são ${primeiroNumero} e ${segundoNumero}`)

const somando = soma(primeiroNumero,segundoNumero)
console.log(somando)

const diminuindo = subitracao(primeiroNumero,segundoNumero)
console.log(diminuindo)

const multiplicando = multiplicacao(primeiroNumero,segundoNumero)
console.log(multiplicando)

const dividindo = divisao(primeiroNumero,segundoNumero)
console.log(dividindo)