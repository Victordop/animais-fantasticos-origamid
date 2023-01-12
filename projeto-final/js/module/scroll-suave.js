export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { // como se fosse ScrollSuave.options = {..}
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this); // comentario 2
  }

  scrollToSection(event) { // este é um método dentro de uma classe e uma função de callback
  // this não é o objeto e sim o elemento que recebe o eventListener
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    if (this.linksInternos.length) {
      this.linksInternos.forEach((link) => { // temos que usar this pois está dentro do objeto
        link.addEventListener('click', this.scrollToSection); // agora o this é cada um dos elementos que recebe o click e n mais  a classe
        // link.addEventListener('click', (event) => this.scrollToSection(event)); // comentario 1
      });
    }
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this; // importante para eu poder linkar outras funções quando chamo a função init, caso contrario tenho undefined
  }
}

// this dentro da classe é a própria classe
// quando adiciono um eventListener, o this passa a fazer referência ao elemento que recebe o evento

// comentario1: quando uso arrow function, o this passa a ser o anterior, logo, deixa de ser o elemento clicado e volta a ser a classe
// comentario2: bind de função de callback em classe => outra solução para o problema do this se tornando o elemento
// agora posso remover o eventListener p.exemplo, pois o this faz referência a classe
