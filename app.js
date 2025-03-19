alert('Olá! Esse é o jogo do Amigo Secreto. Insira os nomes dos amigos para fazer o sorteio.');

let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome.trim() !== "") {
        let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
        if (!amigos.includes(nomeFormatado)) {
            amigos.push(nomeFormatado);
            atualizarLista();
        } else {
            alert('Esse nome já foi adicionado.');
        }
        document.getElementById("amigo").value = "";
    } else {
        alert('Por favor, insira um nome.');
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceSorteado];
    document.getElementById("resultado").innerHTML = `<li>O amigo secreto sorteado foi: ${amigoSecreto}</li>`;
    
    // Limpar a lista e o array após o sorteio
    amigos = [];
    atualizarLista();
}
