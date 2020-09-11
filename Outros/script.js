/*
var nota = prompt('Digite a nota do aluno: ');
var media = 7;

if(nota >= media){
    document.write('Aprovado');
}else{
    document.write('Reprovado');
}
*/

/*
var nota1 = Number(prompt('Digite a primeira nota do aluno: '));
var nota2 = Number(prompt('Digite a segunda nota do aluno: '));
var media = (nota1 + nota2) / 2;

if(media >= 7){
    document.write('A média do aluno foi: ' + media);
    document.write('Aprovado');
}else{
    document.write('A média do aluno foi: ' + media);
    document.write('Reprovado');
}
*/

/*
var opcao = 9;

switch(opcao) {
    case 1:
        document.write('Opção 1 selecionada');
    break;   

    case 2:
        document.write('Opção 2 selecionada');
    break;  

    case 3:
        document.write('Opção 3 selecionada');
    break;  

    default:
        document.write('Opção inválida');
        
}
*/

/*
var num1 = parseInt(prompt('Digite o valor de A: '));
var num2 = parseInt(prompt('Digite o valor de B: '));

 document.write('A soma entre ' + num1 + ' e ' + num2 + ' é: ' + (num1+num2) + '<br>');
document.write('A subtração entre ' + num1 + ' e ' + num2 + ' é: ' + (num1-num2) + '<br>');
document.write('A multiplicação entre ' + num1 + ' e ' + num2 + ' é: ' + (num1*num2) + '<br>');
document.write('A divisão entre ' + num1 + ' e ' + num2 + ' é: ' + (num1/num2) + '<br>');
document.write('O resto da divisão entre ' + num1 + ' e ' + num2 + ' é: ' + (num1%num2) + '<br>');
document.write('O incremento de ' + num1 + ' é: ' + (++num1) + '<br>');
document.write('O decremento de ' + num1 + ' é: ' + (--num1) + '<br>');
*/

/*
var texto = "Aluno: ";
var texto2 = prompt('Digite seu nome todo: ');
var texto3 = prompt( 'Digite sua matricula');
document.write(texto + texto2 + texto3);
*/

/*
for (i = 0; i <= 12; i++) {
    document.write(i + '<br>')
}
*/

var nome = prompt("Digite seu nome: ");
var matricula = prompt("Digite suas matrícula: ");
var curso = prompt("Digite seu curso: ");

document.write("Nome: " + nome + "<br>");
document.write("Matrícula: " + matricula + "<br>");
document.write("Curso: " + curso + "<br>");