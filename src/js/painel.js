const imagemPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function() {
    if (imagemAtual === imagemPainel.length - 1) {
        console.log('não pode avançar mais');

        return; 
    }

    imagemAtual++;
    imagemPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    imagemPainel[imagemAtual].classList.add('mostrar');
});


setaVoltar.addEventListener('click', function() {
    if (imagemAtual === 0) {
        console.log('não pode voltar mais');

        return; 
    }

    imagemAtual--;
    imagemPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    imagemPainel[imagemAtual].classList.add('mostrar');
});
