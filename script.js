document.addEventListener("DOMContentLoaded", () => {
    const cartas = [
        { name: "luffy", img: 'imagens/sanji.png' },
        { name: "nami", img: 'imagens/nami.png' },
        { name: "usopp", img: 'imagens/usopp.png' },
        { name: "zoro", img: 'imagens/zoro.png' },
        { name: "Mluffy", img: 'imagens/Mluffy.png' },
        { name: "chopper", img: 'imagens/chopper.png' },
        { name: "luffy", img: 'imagens/sanji.png' },
        { name: "nami", img: 'imagens/nami.png' },
        { name: "usopp", img: 'imagens/usopp.png' },
        { name: "zoro", img: 'imagens/zoro.png' },
        { name: "Mluffy", img: 'imagens/Mluffy.png' },
        { name: "chopper", img: 'imagens/chopper.png' }
    ];

    cartas.sort(() => 0.5 - Math.random());

    const board = document.querySelector('.board');
    const resultado = document.querySelector('#resultado');
    let cartasEscolhidas = [];
    let cartasEscolhidasId = [];
    let cartaGanhadora = [];
    const acertoSom = document.getElementById('acertoSom');
    const erroSom = document.getElementById('erroSom');

    function checar() {
        const carta = document.querySelectorAll('img');
        const optionOneId = cartasEscolhidasId[0];
        const optionTwoId = cartasEscolhidasId[1];

        if (optionOneId == optionTwoId) {
            carta[optionOneId].setAttribute('src', 'imagens/board.png');
            carta[optionTwoId].setAttribute('src', 'imagens/board.png');
            alert("Você clicou na mesma imagem!");
        } else if (cartasEscolhidas[0] === cartasEscolhidas[1]) {
            carta[optionOneId].setAttribute('src', 'imagens/cheking.png');
            carta[optionTwoId].setAttribute('src', 'imagens/cheking.png');
            carta[optionOneId].removeEventListener('click', cartaEscolhida);
            carta[optionTwoId].removeEventListener('click', cartaEscolhida);
            cartaGanhadora.push(cartasEscolhidas[0]);
            acertoSom.play(); // Tocar o som de acerto
            alert('Você achou uma combinação, parabéns!');
        } else {
            carta[optionOneId].setAttribute('src', 'imagens/board.png');
            carta[optionTwoId].setAttribute('src', 'imagens/board.png');
            erroSom.play(); // Tocar o som de erro
            alert('Você errou, tente novamente!');
        }

        cartasEscolhidas = [];
        cartasEscolhidasId = [];
        resultado.textContent = 'Pares encontrados: ' + cartaGanhadora.length;
        if (cartaGanhadora.length === cartas.length / 2) {
            resultado.textContent = 'Parabéns, você encontrou todas as combinações!';
        }
    }

    function createBoard() {
        for (let i = 0; i < cartas.length; i++) {
            const carta = document.createElement('img');
            carta.setAttribute('src', 'imagens/board.png');
            carta.setAttribute('data-id', i);
            carta.addEventListener('click', cartaEscolhida);
            board.appendChild(carta);
        }
    }

    function cartaEscolhida() {
        let cartaId = this.getAttribute('data-id');
        cartasEscolhidas.push(cartas[cartaId].name);
        cartasEscolhidasId.push(cartaId);
        this.setAttribute('src', cartas[cartaId].img);
        if (cartasEscolhidas.length === 2) {
            setTimeout(checar, 500);
        }
    }

    createBoard();
});
