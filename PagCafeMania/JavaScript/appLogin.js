function buttonLogin() {
    var nome = document.getElementById("pUser").value;
    var senha = document.getElementById("pSenha").value;

    if (nome === 'adm1' && senha === '1234') {
        window.location.href = "index.html";
        localStorage.setItem('isLoggedIn', 'true');
    }
    else {
        alert("Usuário ou senha incorretos.");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    var loginButton = document.getElementById('buttonLoginCad');
    var verificarLogin = document.getElementById('verificarLogin');

    if (isLoggedIn === 'true') {
        loginButton.style.display = 'none';
        verificarLogin.style.display = 'block';
    }
});

function clickLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = "index.html";
}

