// Variáveis
const inputNome = document.querySelector('#nome');
const inputCargo = document.querySelector('#cargo');
const botao = document.querySelector('.botao');
let matricula = 1;

botao.addEventListener('click', function(event) {
    event.preventDefault();

    const cards = document.querySelector('.cards');

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    cards.appendChild(divCard);

    const divImg = document.createElement('div');
    divImg.classList.add('imagem-card');
    divCard.appendChild(divImg);

    const img = document.createElement('img');
    img.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=avataaars';
    divImg.appendChild(img);

    const divCargo = document.createElement('div');
    divCargo.classList.add('cargo-card');
    divCard.appendChild(divCargo);

    const cargo = document.createElement('h3');
    cargo.textContent = inputCargo.value;
    divCargo.appendChild(cargo);

    const divMatricula = document.createElement('div');
    divMatricula.classList.add('matricula-card');
    divCard.appendChild(divMatricula);

    const numMatricula = document.createElement('p');
    numMatricula.textContent = `#${String(matricula++).padStart(4, '0')}`;
    divMatricula.appendChild(numMatricula);


})
