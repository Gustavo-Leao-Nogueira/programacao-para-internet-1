

function teste() {
    let nome = document.querySelector("#nome");
    nome.value = nome.value.toUpperCase();
};

function verificar() {
    let nome = document.querySelector("#nome");
    let endereco = document.querySelector("#endereco");
    let cidade = document.querySelector("body > section > div > form > section:nth-child(1) > div > div:nth-child(6) > input");
    let estado = document.querySelector("#estado");
    let usuario = document.querySelector("#usuario");
    let senha = document.querySelector("#senha");
    let senhaConfirmacao = document.querySelector("#senhaConfirmacao");


    if (senha.value != senhaConfirmacao.value) {
        alert('Senhas diferentes, tente novamente!');
        event.preventDefault();
    }
    
    else {
        let obj = {
            "nome": nome.value,
            "endereco": endereco.value,
            "cidade": cidade.value,
            "estado": estado.value,
            "usuario": usuario.value,
            "senha": senha.value
        };
        localStorage.setItem('banco', JSON.stringify(obj));

    }
}

function lerObjeto() {
    let obj = JSON.parse(localStorage.getItem('banco'));
    document.write("<p><b class=\"w3-text-light-green\">Nome:</b> " + obj["nome"] + "</p>");
    document.write("<p><b class=\"w3-text-green\">Endereço:</b> " + obj["endereco"] + "</p>");
    document.write("<p><b class=\"w3-text-green\">Cidade:</b> " + obj["cidade"] + "</p>");
    document.write("<p><b class=\"w3-text-green\">Estado:</b> " + obj["estado"] + "</p>");
    document.write("<p><b class=\"w3-text-green\">Usuário:</b> " + obj["usuario"] + "</p>");
    document.write("<p><b class=\"w3-text-green\">Senha:</b> ");
    for (let i = 0; i < obj["senha"].length; i++) {
        document.write("*");
    }
    document.write("</p>");
}