export default function tabNav() {
  const lista = document.querySelectorAll('.js-tabmenu li');
  const conteudo = document.querySelectorAll('.js-tabcontent section');

  function activeTab(index) {
    conteudo.forEach((section) => {
      section.classList.remove('ativo');
    });
    const datasetAnimacao = conteudo[index].dataset.anime; // dataset é uma propriedade, um objeto do construtor de html -> permite adicionarmos
    conteudo[index].classList.add('ativo', datasetAnimacao); // um atributo na tag e converte-lo hem classe
  }

  if (lista.length && conteudo.length) {
    conteudo[0].classList.add('ativo');

    lista.forEach((imagem, index) => {
      imagem.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
