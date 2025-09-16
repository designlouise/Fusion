// Exemplo de interação com botões
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    console.log("Botão clicado:", button.innerText);
  });
});
