var conta = 0;
function Cadastro() {
    var senha1 = document.querySelector('#senha');
    var corfsenha = document.querySelector('#confirsenha');
    var email = document.querySelector('#email');
    if ((senha1 === null || senha1 === void 0 ? void 0 : senha1.value) != (corfsenha === null || corfsenha === void 0 ? void 0 : corfsenha.value)) {
        alert("tente novamente");
    }
    else if ((senha1 === null || senha1 === void 0 ? void 0 : senha1.value) == (corfsenha === null || corfsenha === void 0 ? void 0 : corfsenha.value)) {
        alert('Cadastrado com sucesso!!');
        window.localStorage.setItem('email', email.value);
        window.localStorage.setItem('senha', corfsenha.value);
        window.location.href = "../index.html";
    }
}
function Login() {
    var usuario = document.querySelector("#usuario");
    var senha = document.querySelector("#senha1");
    if ((usuario === null || usuario === void 0 ? void 0 : usuario.value) == window.localStorage.getItem('email') && (senha === null || senha === void 0 ? void 0 : senha.value) == window.localStorage.getItem('senha')) {
        window.location.href = "./pages/acesso.html";
        console.log("loguei!!");
    }
    else if ((usuario === null || usuario === void 0 ? void 0 : usuario.value) != window.localStorage.getItem('email') && (senha === null || senha === void 0 ? void 0 : senha.value) != window.localStorage.getItem('senha')) {
        alert('tente novamente, Usuario ou senha incorreta!');
        conta++;
    }
    else if (conta = 5) {
        window.location.href = "./pages/bloqueio.html";
    }
}
