const perguntas = [
  {
    texto: "Você prefere resolver problemas lógicos ou criar interfaces bonitas?",
    opcaoA: { label: "Lógica", valor: "logica" },
    opcaoB: { label: "Design", valor: "design" }
  },
  {
    texto: "Você prefere trabalhar sozinho ou em equipe?",
    opcaoA: { label: "Sozinho", valor: "logica" },
    opcaoB: { label: "Em equipe", valor: "design" }
  },
  {
    texto: "Você prefere organizar dados ou criar telas?",
    opcaoA: { label: "Organizar dados", valor: "logica" },
    opcaoB: { label: "Criar telas", valor: "design" }
  }
];

let perguntaAtual = 0;
let pontosLogica = 0;
let pontosDesign = 0;

const textoPergunta = document.getElementById("texto-pergunta");
const botoesOpcao = document.querySelectorAll(".opcao");
const resultadoQuiz = document.getElementById("resultado-quiz");

function mostrarPergunta() {
  const pergunta = perguntas[perguntaAtual];
  textoPergunta.textContent = pergunta.texto;
  botoesOpcao[0].textContent = pergunta.opcaoA.label;
  botoesOpcao[0].setAttribute("data-valor", pergunta.opcaoA.valor);
  botoesOpcao[1].textContent = pergunta.opcaoB.label;
  botoesOpcao[1].setAttribute("data-valor", pergunta.opcaoB.valor);
}

mostrarPergunta();

botoesOpcao.forEach(function(botao) {
  botao.addEventListener("click", function() {
    const valor = botao.getAttribute("data-valor");

    if (valor === "logica") {
      pontosLogica = pontosLogica + 1;
    } else {
      pontosDesign = pontosDesign + 1;
    }

    perguntaAtual = perguntaAtual + 1;

    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      document.getElementById("pergunta-container").style.display = "none";

      if (pontosLogica > pontosDesign) {
        resultadoQuiz.textContent = "Você tem perfil para Back-end ou Dados!";
      } else {
        resultadoQuiz.textContent = "Você tem perfil para Front-end ou Design de Produto!";
      }
    }
  });
});