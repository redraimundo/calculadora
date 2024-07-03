const prompt = require('prompt-sync')({sigint: true})
let numero1 = prompt('Digite o primeiro número: ')
let operador = prompt('Digite o operador: ')
let numero2 = prompt('Digite o segundo número: ')

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

function calcular (numero1, operador, numero2) {
    switch(operador) {
        case '+':
            return numero1 + numero2;
        break
        case '-':
            return numero1 - numero2;
        break
        case '*':
            return numero1 * numero2;
        break
        case '/':
            return (numero1 * numero2) /100;
        break
        default:
            return 'Operador inválido.'
    }
}



if(typeof (numero1) == String|| typeof (numero2) == String){
    console.log('ERRO')
} else{
    console.log(calcular(numero1, operador, numero2))
process.exit()
}