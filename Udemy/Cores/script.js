document.body.style.backgroundColor = 'white';
var inicial = 0;

function mudarCor() {
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'blue';
    } else if (document.body.style.backgroundColor === 'blue') {
        document.body.style.backgroundColor ='red';
    } else if (document.body.style.backgroundColor === 'red') {
        document.body.style.backgroundColor = 'purple';
    } else if (document.body.style.backgroundColor === 'purple') {
        document.body.style.backgroundColor = 'green';
    } else if (document.body.style.backgroundColor === 'green') {
        document.body.style.backgroundColor = 'black';
    } else if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'yellow';
    } else if (document.body.style.backgroundColor === 'yellow') {
        document.body.style.backgroundColor = 'pink';    
    } else if (document.body.style.backgroundColor === 'pink') {
        document.body.style.backgroundColor = 'orange';
    } else {
        document.body.style.backgroundColor = 'white';
    }
}

function entrarBotao() {
    document.getElementById('botão').style.backgroundColor = 'rgb(237, 237, 237)';
    document.getElementById('botão').style.textDecorationLine = 'underline';
}

function sairBotao() {
    document.getElementById('botão').style.backgroundColor = 'white';
    document.getElementById('botão').style.textDecorationLine = 'none';
}

function contador() {
    inicial += 1;
    document.getElementById('num').innerHTML = inicial
    if (document.body.style.backgroundColor === 'black') {
        document.getElementById('num').style.color = 'white';
    } else {
        document.getElementById('num').style.color = 'black';
    }
}