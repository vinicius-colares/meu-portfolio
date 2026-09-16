const secoes = document.querySelectorAll("section");
const linksMenu = document.querySelectorAll("nav a");

window.addEventListener("scroll", function() {
  let atual = "";

  secoes.forEach(function(secao) {
    const topo = secao.offsetTop - 100;
    if (window.scrollY >= topo) {
      atual = secao.getAttribute("id");
    }
  });

  linksMenu.forEach(function(link) {
    link.classList.remove("ativo");
    if (link.getAttribute("href") === "#" + atual) {
      link.classList.add("ativo");
    }
  });
});
const botaoFlutuantePrincipal = document.getElementById("botao-flutuante-principal");
const opcoesFlutuante = document.getElementById("opcoes-flutuante");

botaoFlutuantePrincipal.addEventListener("click", function() {
  opcoesFlutuante.classList.toggle("aberto");
});