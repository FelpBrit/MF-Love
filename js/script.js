let imagemAtual = 0;
const intervaloTempo = 3000; // Tempo em milissegundos para mudar a imagem automaticamente (3 segundos)

function mudarImagem(direcao) {
    const imagens = document.querySelectorAll('.carousel-image');
    imagens[imagemAtual].classList.remove('active');
    
    imagemAtual = (imagemAtual + direcao + imagens.length) % imagens.length; // Cálculo para mudar a imagem
    imagens[imagemAtual].classList.add('active');
}

// Função para mudar a imagem automaticamente
function mudarImagemAutomaticamente() {
    mudarImagem(1); // Muda para a próxima imagem
}

// Inicia a contagem progressiva
function calcularTempo() {
    const dataAlvo = new Date('2024-04-20T00:00:00');
    const agora = new Date();
    const diferenca = agora - dataAlvo; // Calcular a diferença em milissegundos

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText = `${dias}d`;
    document.getElementById('horas').innerText = `${horas}h`;
    document.getElementById('minutos').innerText = `${minutos}m`;
    document.getElementById('segundos').innerText = `${segundos}s`;
}

// Atualiza a contagem a cada segundo
setInterval(calcularTempo, 1000);

// Muda a imagem automaticamente a cada intervalo de tempo
setInterval(mudarImagemAutomaticamente, intervaloTempo);