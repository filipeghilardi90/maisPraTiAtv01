console.log("  1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.");

console.log("2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.  ");

console.log("3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como Aprovado Recuperação ou Reprovado utilizando if-else if. ");

console.log(" 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. ");

console.log(" 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa edetermina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)   utilizando if-else.");

console.log(" 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:Isósceles, escaleno ou eqüilátero.Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)  ");

console.log(" 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 seforem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.  ");
console.log("  ");

console.log(" 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente. ");

console.log(" 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for. ");

console.log(" 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.");

console.log(" 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma tota  utilizando um loop for. ");

console.log(" 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. ");

console.log("13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. ");

console.log("14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.");

console.log("15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for ");



const prompt = require('prompt-sync')()
let continuar = 0;


continuar = Number(prompt("Digite o numero da questão que você deseja executar ou digite 0 para sair:  "));

if (isNaN(continuar)) {
    continuar = 0;
    console.log("Por favor, digite apenas números!");
}

do {


    switch (continuar) {
        case 1:
            let num = Number(prompt(" Digite um número inteiro e verifica se ele é par ou ímpar: "));
            if (isNaN(num)) {

                console.log("Por favor, digite apenas números!");
            } else {

                if (num % 2 == 0) {
                    console.log(`O numero ${num} é par.`);
                } else {
                    console.log(`O numero ${num} é impar.`);
                }
            }
            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break;

        case 2:
            let idade = parseFloat(prompt(" Digite a idade da pessoa para verificar a sua classificação: "));

            if (idade >= 0) {
                if (idade < 12) {
                    console.log("Criança");
                } else if (idade >= 12 && idade < 18) {
                    console.log("Adolescente");
                } else if (idade >= 18 && idade < 65) {
                    console.log("adulto");
                } else {
                    console.log("idoso");
                }
            } else {
                console.log("iadade invalida");
            }
            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));

            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break

        case 3:
            let nota = parseFloat(prompt(" Digite a nota do aluno para verificara situação: "));
            if (nota >= 0 && nota <= 10) {
                if (nota >= 6) {
                    console.log("Aprovado")
                } else if (nota >= 4) {
                    console.log("Recuperação")
                } else {
                    console.log("Reprovado")
                }

            } else {
                console.log("Nota invalida!")
            }
            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break
        case 4:
            let menu = parseInt(prompt("Digite o numero da opção desejada\n <-----MENU-----> \n | 1.opção um   |\n | 2.opção dois | \n | 3.opção três | \n <-------------->"));


            switch (menu) {
                case 1:
                    console.log("Voçê escolheu a opão um");
                    break;
                case 2:
                    console.log("Voçê escolheu a opão dois");
                    break;
                case 3:
                    console.log("Voçê escolheu a opão três");
                    break;
                default:
                    console.log("Opção invalida!");
                    break;
            }
            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break;
        case 5:
            console.log("Calculo IMC \n");
            let peso = parseFloat(prompt(" Peso: ").replace(',', '.'));
            let altura = parseFloat(prompt("altura: ").replace(',', '.'));


            let imc = peso / (Math.pow(altura, 2));

            if (imc <= 18.8) {
                console.log(`Baixo peso: ${imc.toFixed(2)}`);

            } else if (imc <= 25.0) {
                console.log(`Peso normal: ${imc.toFixed(2)} `);

            } else if (imc <= 30.0) {
                console.log(`Sobrepeso: ${imc.toFixed(2)} `);
            } else if (imc <= 35.0) {
                console.log(`Obesidade: ${imc.toFixed(2)}  `)

            } else {
                console.log("Valor invalido");
            }




            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break;

        case 6:
            console.log("Classificação de um triangulo");
            let a = parseFloat(prompt("Lado A: ").replace(',', '.'));
            let b = parseFloat(prompt("Lado B: ").replace(',', '.'));
            let c = parseFloat(prompt("Lado C: ").replace(',', '.'));

            if (isNaN(a || b || c)) {
                console.log("Valores invalidos!");

            }

            if (a < b + c && b < a + c && c < a + b) {
                if (a === b && b === c) {
                    console.log("Triangulo equilatero");

                } else if (a === b || a === c || b === c) {
                    console.log("Triângulo isósceles");
                } else {
                    console.log("Triângulo escaleno");
                }

            } else {
                console.log("Não é um triangulo");
            }
            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break
        case 7:
            let quantMaca = Number(prompt("Numero de mação compradas para calcular o valor:  "));
            let peco;
            if (quantMaca > 0) {
                if (quantMaca < 12) {
                    parseFloat(peco = quantMaca * 0.30);
                    console.log(peco.toFixed(2));
                } else {
                    parseFloat(peco = quantMaca * 0.25);
                    console.log(peco.toFixed(2));

                }

            } else {
                console.log("Valor invalido");


            }


            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break
        case 8:
            let valA = Number(prompt("Digite o valor A:  "));
            let valB = Number(prompt("Digite o valor B:  "));
            if (isNaN(valA)) {
                valA = 0;
            }
            if (isNaN(valB)) {
                valB = 0;
            }
            if (valB === valA) {
                valB = Number(prompt("Digite o valor para B diferente de A:  "));
            }

            if (valA > valB) {
                console.log(`${valB} , ${valA}`);
            } else {
                console.log(`${valA} , ${valB}`);
            }

            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break
        case 9:
            console.log("Contagem regressiva\n");
            for (let i = 10; i > 0; i--) {
                console.log(i);
            }

            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break
        case 10:
            let numX = Number(prompt("Digite numero:  "));
            if (isNaN(numX)) {
                numX = Number(prompt("Digite numero:  "));

            }
            for (let i = 0; i < 10; i++) {
                console.log(numX);
            }

            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }
            break
        case 11:
            let somador = 0;
            for (let i = 0; i < 5; i++) {
                let entrada = Number(prompt("Digite um numero:  "));
                if (isNaN(entrada)) {
                    entrada = 0;
                }
                somador = somador + entrada;

            }
            console.log(somador);

            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }

            break
        case 12:
            let valtabuada = Number(prompt("Digite um numero para obter sua tabuada:  "));
            if (isNaN(valtabuada)) {
                console.log("Por favor, digite apenas números!");
            } else {
                let result;
                for (let i = 1; i <= 10; i++) {
                    result = valtabuada * i;
                    console.log(` ${valtabuada} X ${i} = ${result}`);
                }
            }

            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }

            break
        case 13:
            let acumulador = 0.00;
            let contador = 0;
            let entrada;
            do {

                entrada = parseFloat(prompt("Digite um numero ou 0 para encerrar: ").replace(',', '.'));
                if (isNaN(entrada)) {
                    console.log("Valor inseridominvalido")
                } else {

                    acumulador += entrada;

                    if (entrada !== 0) {
                        contador++;
                    }
                }




            } while (entrada != 0);

            let mediaTotal = acumulador / contador;
            console.log(parseFloat(mediaTotal));


            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }

            break
        case 14:
            let fatorial = Number(prompt("Digite um numero para obter seu fatorial: "));
            if (isNaN(fatorial)) {
                console.log("Valor invalido!")
            } else {
                let final = fatorial;
                if (fatorial === 0 || fatorial === 1) {
                    console.log(1);
                } else {
                    while (fatorial > 1) {
                        fatorial--;
                        final *= fatorial;
                    }
                    console.log(final);
                }
            }


            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }

            break
        case 15:
            console.log("Sequencia fibonacci");

            let numA = 0;
            let numB = 1;
            let numC = 0;
            let fibo = " ";

            fibo += numA + " " + numB;
            for (let cont = 1; cont < 9; cont++) {
                numC = numA + numB;
                fibo += " " + numC;
                numA = numB;
                numB = numC;
            }
            console.log(fibo);

            continuar = Number(prompt("Digite numero de otura questão que você deseja executar ou digite 0 para sair:  "));
            if (isNaN(continuar)) {
                continuar = 0;
                console.log("Por favor, digite apenas números!");
            }

            break


        default:
            console.log(`Questão inexistente!`);
            break;

    };


} while (continuar != 0);

