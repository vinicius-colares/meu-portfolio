function textoDias(numero) {
  if (numero === 1) {
    return numero + " dia";
  } else {
    return numero + " dias";
  }
}
const textoSequencia = document.getElementById("texto-sequencia");
const botaoMarcar = document.getElementById("botao-marcar");
const ultimaMarcacao = document.getElementById("ultima-marcacao");

let sequencia = localStorage.getItem("sequencia");
let ultimoDia = localStorage.getItem("ultimoDia");

if (sequencia === null) {
  sequencia = 0;
} else {
  sequencia = Number(sequencia);
}

textoSequencia.textContent = "Sequência atual: " + textoDias(sequencia);
if (ultimoDia) {
  ultimaMarcacao.textContent = "Última vez marcada: " + ultimoDia;
}

botaoMarcar.addEventListener("click", function() {
  const hoje = new Date().toLocaleDateString("pt-BR");

  if (ultimoDia === hoje) {
    ultimaMarcacao.textContent = "Você já marcou hoje!";
    return;
  }

  sequencia = sequencia + 1;
  ultimoDia = hoje;

  localStorage.setItem("sequencia", sequencia);
  localStorage.setItem("ultimoDia", ultimoDia);

  textoSequencia.textContent = "Sequência atual: " + textoDias(sequencia);
  ultimaMarcacao.textContent = "Última vez marcada: " + hoje;
});