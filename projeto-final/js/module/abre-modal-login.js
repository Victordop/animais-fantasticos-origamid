export default class AbreModalLogin {
  constructor(botaoLogin, container, botaoFechar) {
    this.botaoLogin = document.querySelector(botaoLogin);
    this.container = document.querySelector(container);
    this.botaoFechar = document.querySelector(botaoFechar);
    // bind das funções de callback
    this.toggleModal = this.toggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  cliqueForaModal(event) {
    if (event.target === this.container) { // ou seja, a parte cinza
      this.toggleModal();
    }
  }

  toggleModal(event) {
    event.preventDefault();
    this.container.classList.toggle('ativo');
  }

  init() {
    if (this.botaoLogin && this.container && this.botaoFechar) {
      this.addEventModal();
    }
    return this;
  }

  addEventModal() {
    this.botaoLogin.addEventListener('click', this.toggleModal);
    this.container.addEventListener('click', this.cliqueForaModal);
    this.botaoFechar.addEventListener('click', this.toggleModal);
  }
}

// tá com bug no event
