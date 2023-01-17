export default class TabNav {
  constructor(menu, conteudo) {
    this.lista = document.querySelectorAll(menu);
    this.conteudo = document.querySelectorAll(conteudo);
    this.classeAtivo = 'ativo';
  }

  addTabEventListener() {
    this.lista.forEach((imagem, index) => {
      imagem.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  activeTab(index) {
    this.conteudo.forEach((section) => {
      section.classList.remove(this.classeAtivo);
    });
    const datasetAnimacao = this.conteudo[index].dataset.anime; // dataset é uma propriedade, um objeto do construtor de html -> permite adicionarmos
    this.conteudo[index].classList.add(this.classeAtivo, datasetAnimacao); // um atributo na tag e converte-lo hem classe
  }

  initTabNav() {
    if (this.lista.length && this.conteudo.length) {
      this.activeTab(0); // this.conteudo[0].classList.add(this.classeAtivo);
      this.addTabEventListener();
    }
    return this;
  }
}
