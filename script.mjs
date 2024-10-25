console.log('Aplicação de juros: \n')

import readlineSync from 'readline-sync'
let valor = readlineSync.question('informe o valor devido:')

if(valor <= 0) {
    console.log('O valor da dívida deve ser maior que zero!')
    process.exit()
}

let dias = readlineSync.question('informe quantos dias se passaram desde o vencimento do boleto:')

if(dias == 0) {
    console.log('Você está em dia!')
}
let juros = 0
if(dias > 15){
    juros = valor * 0.10
}
else {
    juros = valor * 0.05
}
let soma = Number(juros) + Number(valor)


console.log(juros)
console.log('Valor orignal da dívida:' +valor)
console.log('Dias atrasados:' +dias)
console.log('Taxa de juros:' +juros)
console.log('Valor total com juros:' +soma)