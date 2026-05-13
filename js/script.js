document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;
    const message = document.getElementById('message');
    
    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail', email);
    }
    
    if (email === 'shian@gmail.com' && password === 'shian123') {
        showMessage('Login successful! Redirecting...', 'success');
    } else {
        showMessage('Invalid email or password.', 'error');
    }
});

function showMessage(text, type) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.className = type;
}

document.addEventListener('DOMContentLoaded', function() {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('remember').checked = true;
    }
});
  
