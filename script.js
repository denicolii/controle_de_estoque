function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login.trim() == localStorage.getItem('email').trim() && senha.trim() == localStorage.getItem('password').trim()) {
        location.href = "estoque.html";
    } else if (!login)
    {
        document.querySelector('.passwordFeedback').textContent = "Preencha o campo"
        document.querySelector('')
    }
}

function redirectRegistrationPage()
{
    location.href = "cadastro.html"
}

console.log(localStorage.getItem('email'))