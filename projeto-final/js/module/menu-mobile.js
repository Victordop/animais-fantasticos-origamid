// menu mobile é aquele que apertamos no hamburguer e ele mostra um menuzinho

// aria-expanded="false" => acessibilidade => diz que o botão não está expandido
// aria-controls ="menu" => controla o botão

import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(botao, menu, eventos) {
    this.botaoMenu = document.querySelector(botao);
    this.menuSandwich = document.querySelector(menu);
    this.classeAtivar = 'ativar';

    this.ativaMenuMobile = this.ativaMenuMobile.bind(this);

    if (eventos === undefined) this.eventos = ['touchstart', 'click'];
    else this.eventos = eventos;

    // this.init();  posso dar o init aqui no construtor, daí n preciso iniciar no script
  }

  ativaMenuMobile(event) {
    event.preventDefault();
    this.botaoMenu.classList.add(this.classeAtivar);
    this.menuSandwich.classList.add(this.classeAtivar);

    outsideClick(this.menuSandwich, this.eventos, () => {
      this.botaoMenu.classList.remove(this.classeAtivar);
      this.menuSandwich.classList.remove(this.classeAtivar);
    });
  }

  addEvento() {
    this.eventos.forEach((evento) => this.botaoMenu.addEventListener(evento, this.ativaMenuMobile));
  }

  init() {
    if (this.botaoMenu && this.menuSandwich) { // verifica se eu selecionei o elemento corretamente senão dá erro
      this.addEvento();
    }
    return this;
  }
  // problemas : a função de callback tá sendo ativada quando clico
  // ela é ativada quando clicamos fora porque o botão não está na li
}
