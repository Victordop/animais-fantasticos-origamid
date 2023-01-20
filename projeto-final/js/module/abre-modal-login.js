export default class AbreModalLogin {
  constructor(botaoLogin, container, botaoFechar) {
    this.botaoLogin = document.querySelector(botaoLogin);
    this.container = document.querySelector(container);
    this.botaoFechar = document.querySelector(botaoFechar);
    // bind das funções de callback
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.container) { // ou seja, a parte cinza
      this.toggleModal();
    }
  }

  init() {
    if (this.botaoLogin && this.container && this.botaoFechar) {
      this.addEventModal();
    }
    return this;
  }

  addEventModal() {
    this.botaoLogin.addEventListener('click', this.eventToggleModal);
    this.container.addEventListener('click', this.cliqueForaModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
  }
}