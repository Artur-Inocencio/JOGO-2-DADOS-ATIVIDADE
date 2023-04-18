var rodada = 0;
var jogadorAtual = 1;
var pontosJogador1 = 0;
var pontosJogador2 = 0;
var vitoriasJogador1 = 0; // variável para contabilizar as vitórias do jogador 1
var vitoriasJogador2 = 0; // variável para contabilizar as vitórias do jogador 2
const jogarDado1 = document.getElementById("jogarDado1");
const jogarDado2 = document.getElementById("jogarDado2");
const reiniciar = document.getElementById("Reiniciar");
const jogadordocument = document.getElementById("resultado");

function jogarDado(jogador) {
  if (jogador == jogadorAtual) {
    var resultado = Math.floor(Math.random() * 6) + 1;

    if (jogador == 1) {
      pontosJogador1 += resultado;
    } else {
      pontosJogador2 += resultado;
    }

    rodada++;

    if (rodada == 20) {
      if (pontosJogador1 > pontosJogador2) {
        jogadordocument.innerHTML = "Jogador 1 ganhou!";
        vitoriasJogador1++; // atualiza a contagem de vitórias do jogador 1
      } else if (pontosJogador2 > pontosJogador1) {
        jogadordocument.innerHTML = "Jogador 2 ganhou!";
        vitoriasJogador2++; // atualiza a contagem de vitórias do jogador 2
      } else {
        jogadordocument.innerHTML = "Empate!";
      }

      jogadordocument.innerHTML += " Vitórias Jogador 1: " + vitoriasJogador1 + ", Vitórias Jogador 2: " + vitoriasJogador2; // exibe a contagem de vitórias
    } else {
      jogadordocument.innerHTML = "Rodada " + Math.ceil(rodada / 2) + ": ";

      if (jogador == 1) {
        jogadordocument.innerHTML += "Jogador 1 jogou " + resultado + ". ";
      } else {
        jogadordocument.innerHTML += "Jogador 2 jogou " + resultado + ". ";
      }

      if (rodada % 2 == 0) {
        if (pontosJogador1 > pontosJogador2) {
          jogadordocument.innerHTML += "Jogador 1 está ganhando!";
        } else if (pontosJogador2 > pontosJogador1) {
          jogadordocument.innerHTML += "Jogador 2 está ganhando!";
        } else {
          jogadordocument.innerHTML += "Empate!";
        }
      }
    }

    jogadorAtual = jogadorAtual == 1 ? 2 : 1;
  }
}

function reiniciarPartida() {
  rodada = 0;
  pontosJogador1 = 0;
  pontosJogador2 = 0;
  jogadorAtual = 1;
  jogadordocument.innerHTML = "Jogo"}

  jogarDado1.onclick = () => jogarDado(1);
  jogarDado2.onclick = () => jogarDado(2);
  reiniciar.onclick = reiniciarPartida;
