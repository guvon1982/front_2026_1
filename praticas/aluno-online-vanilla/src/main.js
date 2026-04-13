import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-login');

    if (form) {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        const errorEmail = document.getElementById('error-email');
        const errorPassword = document.getElementById('error-password');

        //  Faz a mensagem de erro sumir assim que o usuário começar a digitar
        email.addEventListener('input', () => {
            errorEmail.textContent = '';
        });

        password.addEventListener('input', () => {
            errorPassword.textContent = '';
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let isValid = true;

            // Limpa mensagens anteriores ao submeter
            errorEmail.textContent = '';
            errorPassword.textContent = '';

            // Valida e-mail
            if (email.value.trim() === '') {
                errorEmail.textContent = 'O campo de e-mail é obrigatório.';
                isValid = false;
            }

            // Valida senha
            if (password.value.trim() === '') {
                errorPassword.textContent = 'O campo de senha é obrigatório.';
                isValid = false;
            }

            // Se for válido, redireciona para a Dashboard
            if (isValid) {
                window.location.href = 'index.html';
            }
        });
    }
});