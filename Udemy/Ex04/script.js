var peso;

var altura;

var imc;

var resultado;

function Calcular(event) {

    event.preventDefault();

    peso = document.getElementById('Peso').value;

    altura = document.getElementById('Altura').value;

    imc = peso / (altura * altura);

    resultado = document.getElementById('Resultado');

    if(imc < 17) {
        resultado.innerHTML = '<br> Seu IMC e: ' + imc.toFixed(2) + '<br> Classificação: Muito abaixo do peso';
    } else if(imc >= 17 && imc <= 18.49) {
        resultado.innerHTML = '<br> Seu IMC e: ' + imc.toFixed(2) + '<br> Classificação: Abaixo do peso';
    } else if(imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = '<br> Seu IMC e: ' + imc.toFixed(2) + '<br> Classificação: Peso normal';
    } else if(imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = '<br> Seu IMC e: ' + imc.toFixed(2) + '<br> Classificação: Acima do peso';
    } else if(imc >= 30 && imc <= 34.99) {
        resultado.innerHTML = '<br> Seu IMC e: ' + imc.toFixed(2) + '<br> Classificação: Obesidade I';
    } else if(imc >= 35 && imc <= 39.99) {
        resultado.innerHTML = '<br> Seu IMC e: ' + imc.toFixed(2) + '<br> Classificação: Obesidade II';
    } else {
        resultado.innerHTML = '<br> Seu IMC e: ' + imc.toFixed(2) + '<br> Classificação: Obesidade III';
    }
}