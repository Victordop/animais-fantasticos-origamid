export default function abreModalLogin() {
  // aqui selecionei o container e os botões relacionados a ele
  const botaoLogin = document.querySelector('[data-modal=abrir]');
  const container = document.querySelector('[data-modal=container]');
  const botaoFechar = document.querySelector('[data-modal=fechar]');

  // essa parte do código vai adicionar a classe ativo ao modal quando clicamos no botao login
  // e excluir a classe ativo quando clicamos no x do modal

  if (botaoLogin && container && botaoFechar) { // vai criar e executar as funções apenas se os elementos selecionados existirem
    function toggleModal(event) {
      event.preventDefault(); // previne ir pra outra página, comportamento padrão
      container.classList.toggle('ativo');
    }

    function cliqueForaModal(event) { // aplica a função de fechar modal ; coloquei o event pra n dar erro
      if (event.target === this) {
        toggleModal(event);
      }

      // console.log(event.target) //é o container todo
      // console.log(this) //também é o container todo => this é o elemento pai
    }

    botaoLogin.addEventListener('click', toggleModal);
    container.addEventListener('click', cliqueForaModal); // ao clicar no container, que é o que envolve tudo
    botaoFechar.addEventListener('click', toggleModal);
  }
}
