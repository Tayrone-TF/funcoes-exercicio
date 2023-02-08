//Exercício 1

//a) 
function dizerOla(nome) {
    const frase = `Olá, ${nome}`
    console.log(frase)
}

//dizerOla('Tayrone')

//b)
function calculaTabuada(numero) {
    console.log(`A seguiu o resultado da tabuáda de ${numero}:`)
    for (i = 1; i < 11; i++){
    const tabuada =  numero * i
    console.log(`${numero} x ${i} = ${tabuada}`) 
    }
}

// calculaTabuada(2)
// calculaTabuada(15)
// calculaTabuada(97)

//c)
const dizerOi = (nome) =>{
    const frase = `Oi, ${nome}`
    console.log(frase)
}

dizerOi('Tayrone')
dizerOi('Renatinha')


const calcualoDaTabuada = (numero) => {
    console.log(`A seguiu o resultado da tabuáda de ${numero}:`)
    for (i = 1; i < 11; i++){
    const tabuada =  numero * i
    console.log(`${numero} x ${i} = ${tabuada}`) 
    }
}

calcualoDaTabuada(9)
calcualoDaTabuada(24)
calcualoDaTabuada(138)