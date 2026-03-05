// Variáveis
const inputNome = document.querySelector('#nome');
const inputCargo = document.querySelector('#cargo');
const botao = document.querySelector('.botao');
let matricula = 1021;

// --- Funções do localStorage ---

function carregarCards() {
    const dados = localStorage.getItem('cards');
    return dados === null ? [] : JSON.parse(dados);
}

function salvarCards(arrayDeCards) {
    localStorage.setItem('cards', JSON.stringify(arrayDeCards));
}

// --- Função que cria o card na tela ---

function renderizarCard(dadosCard) {
    const cards = document.querySelector('.cards');

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    cards.appendChild(divCard);

    const divImg = document.createElement('div');
    divImg.classList.add('imagem-card');
    divCard.appendChild(divImg);

    const img = document.createElement('img');
    img.src = 'https://api.dicebear.com/9.x/bottts/svg?seed=' + dadosCard.matricula + '&sex=' + dadosCard.sexo;
    divImg.appendChild(img);

    const divNome = document.createElement('div');
    divNome.classList.add('nome-card');
    divCard.appendChild(divNome);

    const nome = document.createElement('h3');
    nome.textContent = dadosCard.nome;
    divNome.appendChild(nome);

    const divCargo = document.createElement('div');
    divCargo.classList.add('cargo-card');
    divCard.appendChild(divCargo);

    const cargo = document.createElement('h3');
    cargo.textContent = dadosCard.cargo;
    divCargo.appendChild(cargo);

    const divMatricula = document.createElement('div');
    divMatricula.classList.add('matricula-card');
    divCard.appendChild(divMatricula);

    const numMatricula = document.createElement('p');
    numMatricula.textContent = `#${String(dadosCard.matricula).padStart(4, '0')}`;
    divMatricula.appendChild(numMatricula);

    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.textContent = 'EXCLUIR';
    divCard.appendChild(botaoExcluir);

    botaoExcluir.addEventListener('click', function() {
        divCard.remove();

        let arrayDeCards = carregarCards();
        arrayDeCards = arrayDeCards.filter(c => c.matricula !== dadosCard.matricula);
        salvarCards(arrayDeCards);
    });
}

// --- Ao clicar em criar card ---

botao.addEventListener('click', function(event) {
    event.preventDefault();

    const sexoMarcado = document.querySelector('input[name="genero"]:checked');

    if (inputNome.value === '' || inputCargo.value === '' || !sexoMarcado) {
        alert('Preencha todas as informações antes de criar o card!');
        return;
    }

    const novoCard = {
        nome: inputNome.value,
        cargo: inputCargo.value,
        matricula: matricula++,
        sexo: sexoMarcado.value
    };

    renderizarCard(novoCard);

    const arrayDeCards = carregarCards();
    arrayDeCards.push(novoCard);
    salvarCards(arrayDeCards);

    inputNome.value = '';
    inputCargo.value = '';
});

// --- Recria os cards ao abrir a página ---

const cardsSalvos = carregarCards();

if (cardsSalvos.length > 0) {
    matricula = Math.max(...cardsSalvos.map(c => c.matricula)) + 1;
    cardsSalvos.forEach(dadosCard => renderizarCard(dadosCard));
}