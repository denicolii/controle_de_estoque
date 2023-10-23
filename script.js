function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == 'denicoli' && senha == 'delicia') {
        location.href = "estoque.html";
    } else {
        alert('Usuário ou senha incorretos.Tente novamente!');
    }
}