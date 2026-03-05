// Variáveis
const inputNome = document.querySelector('#nome');
const inputCargo = document.querySelector('#cargo');
const botao = document.querySelector('.botao');
const sexo = document.querySelector('.sexo');
let matricula = 1021;

botao.addEventListener('click', function(event) {
    event.preventDefault();

    const sexoMarcado = document.querySelector('input[name="genero"]:checked');    

    if (inputNome.value === '' || inputCargo.value === '' || !sexoMarcado) {
        alert('Preencha todas as informações antes de criar o card!');
        return;
    }

    const cards = document.querySelector('.cards');

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    cards.appendChild(divCard);
    
    const divImg = document.createElement('div');
    divImg.classList.add('imagem-card');
    divCard.appendChild(divImg);

    const img = document.createElement('img');

    if (sexo.value === 'masculino') {
        img.src = 'https://api.dicebear.com/9.x/adventurer/svg?seed=' + matricula + '=male';
    } 
    
    if (sexo.value === 'feminino') {
        img.src = 'https://api.dicebear.com/9.x/adventurer/svg?seed=' + matricula + '=female';
    } 

    divImg.appendChild(img);

    const divNome = document.createElement('div');
    divNome.classList.add('nome-card');
    divCard.appendChild(divNome);

    const nome = document.createElement('h3');
    nome.textContent = inputNome.value;
    divNome.appendChild(nome);

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

    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.textContent = 'EXCLUIR';
    divCard.appendChild(botaoExcluir);

    inputNome.value = '';
    inputCargo.value = '';

    botaoExcluir.addEventListener('click', function() {
    divCard.remove();
    })
})

