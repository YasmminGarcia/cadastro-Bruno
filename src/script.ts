    let conta = 0;

    function Cadastro(){

        let senha1 : HTMLInputElement | null = document.querySelector('#senha')!;
        let corfsenha: HTMLInputElement | null = document.querySelector('#confirsenha');
        let email : HTMLInputElement | null = document.querySelector('#email')!;

        if(senha1?.value != corfsenha?.value){
            alert("tente novamente");
        }

        else if(senha1?.value == corfsenha?.value){
            alert('Cadastrado com sucesso!!')
            window.localStorage.setItem('email', email.value);
            window.localStorage.setItem('senha', corfsenha.value);
            window.location.href= "../index.html";
            
        }
    }
        
    function Login(){

        let usuario : HTMLInputElement | null = document.querySelector("#usuario");
        let senha : HTMLInputElement | null = document.querySelector("#senha1");

        if(usuario?.value == window.localStorage.getItem('email') && senha?.value == window.localStorage.getItem('senha')){
    
                window.location.href = "./pages/acesso.html";
                console.log("loguei!!")
            }

        else if(usuario?.value != window.localStorage.getItem('email') && senha?.value != window.localStorage.getItem('senha')){

            alert('tente novamente, Usuario ou senha incorreta!')
            conta++;
        }
        else if(conta = 5){

            window.location.href = "./pages/bloqueio.html"
        }
    }

