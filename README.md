# Calculadora #
Criei um programa como uma calculadora básica

## Dados Utilizados ##

**Prompt** : Permite que o programa solicite e receba dados do usuário de forma interativa.
```javascript
const prompt = require('prompt-sync')({sigint: true})
prompt('Digite o primeiro número: ')
prompt('Digite o operador: ')
prompt('Digite o segundo número: ')
```

**Variáveis** : São usadas para armazenar os números digitados e o operador inserido pelo usuário.
```javascript
let numero1
let operador
let numero2
```

**ParseFloat** : Transforma os dados de entrada (que são originalmente strings) em números com vírgula para que possam ser usados em cálculos matemáticos.
```javascript
numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)
```

**Função Calcular** : É uma função que decide qual operação matemática realizar com base no operador digitado (+, -, *, /, %).
```javascript
function calcular (numero1, operador, numero2)
```

**Switch** : Uma estrutura de controle que escolhe entre diferentes opções com base no valor de uma variável (neste caso, o operador).
```javascript
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
            return numero1 / numero2;
        break
        case '%':
            return (numero1 * numero2) /100;
        break
        default:
            return 'Operador inválido.'
    }
```

**Typeof == Number** : Verifica se os dados inseridos são numéricos para garantir que os cálculos sejam feitos corretamente.
```javascript
typeof numero1 == 'number'|| typeof numero2 == 'number'
```

**Console.log** : Mostra o resultado da operação matemática na tela.
```javascript
console.log(calcular(numero1,operador,numero2))
```

**Encerramento do Processo** : Termina o programa após mostrar o resultado, para encerrar a execução de forma adequada.
```javascript
process.exit()
```