const form = document.querySelector("form")

form.addEventListener('submit', event => {
    event.preventDefault()

    const email = event.target.login.value
    const password = event.target.senha.value

    if (email && password)
    {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)

        document.querySelector('h2').textContent = "Cadastro feito com sucesso"
        document.querySelector('h2').style.color = 'green';
        let count = 1;

        setTimeout(() => {
            document.querySelector('.count').textContent = "0" + count;
        }, 500)

        setInterval(() => {
            document.querySelector('.count').textContent = "0" + count;
            count++;
        }, 1000)

        setTimeout(() => {
            location.href = 'index.html'
        }, 5800)

    }else 
    {
        document.querySelector('h2').textContent = "Preencha os campos!"
        document.querySelector('h2').style.color = '#ff3131';
    }
})