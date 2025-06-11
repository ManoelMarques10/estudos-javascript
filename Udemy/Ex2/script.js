var area = document.getElementById('area')
function entrar() {
    var nome = prompt('Digite sue nome')

    if (nome === "" || nome === null) {
        alert('Ops algo deu errado.')
        area.innerHTML = ('Clique no botão para acessar...')
    } else {
        area.innerHTML = 'Bem vindo ' + nome + '! '

        let botaoSair = document.createElement('button');
        botaoSair.innerHTML = 'Sair da conta';
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }
}

function sair() {
    alert('Saindo...')
    area.innerHTML = ('Você saiu.')    
}
