const inputNome = document.getElementById("input-nome");
const inputObjetivo = document.getElementById("input-objetivo");
const inputExperiencia = document.getElementById("input-experiencia");
const inputHabilidades = document.getElementById("input-habilidades");
const botaoGerar = document.getElementById("botao-gerar");
const resultado = document.getElementById("resultado-curriculo");

botaoGerar.addEventListener("click", function() {
  const nome = inputNome.value;
  const objetivo = inputObjetivo.value;
  const experiencia = inputExperiencia.value;
  const habilidades = inputHabilidades.value;

  resultado.innerHTML = `
    <h2>${nome}</h2>
    <p><strong>Objetivo:</strong> ${objetivo}</p>
    <h3>Experiência</h3>
    <p>${experiencia}</p>
    <h3>Habilidades</h3>
    <p>${habilidades}</p>
  `;
});