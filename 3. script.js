// Mapeamento - Seleção dos elementos - botões

const display = document.querySelector(".display");
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const restartBtn = document.querySelector(".btn-restart");

// Variáveis de estado
// Variável criada para iniciar com o valor "0"
let centiseconds = 0;
// Variável criada para iniciar vazia (necessária para conseguir "parar" o cronômetro)
let timerInterval = null;

// Função para formatação (Transforma segundos em HH:MM:SS)
function formatTime(totalCentiseconds) {
  const mins = Math.floor(totalCentiseconds / 6000);
  const secs = Math.floor((totalCentiseconds % 6000) / 100);
  const cents = totalCentiseconds % 100;

  //Formatação "padStart" garante que sempre tenha 2 dígitos (Ex.: 01 em vez de 1)
  const format = (unit) => String(unit).padStart(2, "0");
  return `${format(mins)}:${format(secs)}:${format(cents)}`;
}
// Funções Lógicas
// Função de iniciar a contagem
function startTimer() {
  if (timerInterval) return; // Segurança: evita duplicar o intervalo
  //Se timerInterval já tiver um valor (ou seja, o timer já estiver rodando), a função é interrompida para evitar que vários intervalos rodem ao mesmo tempo, o que aceleraria o cronômetro.

  startBtn.disabled = true; // Feedback visual
  // Desativa o botão de início (startBtn) para dar feedback visual ao usuário, impedindo que ele inicie o timer novamente enquanto ele já estiver ativo.

  timerInterval = setInterval(() => {
    centiseconds++;
    display.textContent = formatTime(centiseconds);
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval); //Para o temporizador
  timerInterval = null; // Libera "limpa a variável" para iniciar novamente
  startBtn.disabled = false; // Reativa o botão de Iniciar
}

function resetTimer() {
  stopTimer(); // Para o cronômetro e reativa o botão iniciar
  centiseconds = 0;
  display.textContent = "00:00.00";
}

// Event Listeners - Eventos de click
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
restartBtn.addEventListener("click", resetTimer);
