//Exercicio 2
//a)
const somar = (nunber1, number2) => {
    const soma = nunber1 + number2
    console.log(`A soma dos dois números é ${soma}`)
}

// const perguntaNumero1 = Number(prompt('Informe um número:'))
// const perguntaNumero2 = Number(prompt('Informe outro número:'))
// somar(perguntaNumero1,perguntaNumero2)

//b)
const verificaNumeroMaiorIgual = (nun1, nun2) => {
    if(nun1 >= nun2){
        const verificaBool = nun1 >= nun2
        console.log(`${verificaBool} - O número ${nun1} é maior ou igua ao número ${nun2}`)
    } else {
        const verificaBool = nun1 >= nun2
        console.log(`${verificaBool} - O número ${nun2} é maior que o número ${nun1} `)
    }
}
// const perguntaNun = Number(prompt('Informe um número:'))
// const perguntaNun2 = Number(prompt('Informe outro número:'))
// verificaNumeroMaiorIgual(perguntaNun, perguntaNun2)

//c)
const verificaParidade = (numero) => {
    if(numero % 2 === 0){
        const verificaPar = true
        console.log(`${verificaPar} - O número inserido é par.`)
    }else {
        const verificaPar = false
        console.log(`${verificaPar} - O número inserido é impar.`)
    }
}
// const perguntaNun = Number(prompt('Informe um número:'))
// verificaParidade(perguntaNun)

//c)
const salarioLiquido = (salarioBruto) => {
    const taxaInss = 0.1
    const descontoInss = taxaInss * salarioBruto
    const salarioFinal = salarioBruto - descontoInss
    console.log(`O seu salário será R$${salarioFinal.toFixed(2)}`)

}
// const perguntaSalario = Number(prompt('Informe o seu salário bruto:'))
// salarioLiquido(perguntaSalario)