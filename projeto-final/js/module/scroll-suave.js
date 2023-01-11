export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
  }

  scrollToSection(event) { // este é um método dentro de uma classe
    event.preventDefault();
    const href = this.getAttribute('href'); // faz referencia ao elemento que está sofrendo ação
    const section = document.querySelector(href);

    section.scrollIntoView({ // dá scroll até o elemento ; ponto positivo: n precisamos calcular offsetTop ;
      behavior: 'smooth',
      block: 'start', // alinha o bloco no começo, ou seja, no topo da pagina
    });
  }

  addLinkEvent() {
    if (this.linksInternos.length) {
      this.linksInternos.forEach((link) => { // temos que usar this pois está dentro do objeto
        link.addEventListener('click', this.scrollToSection);
      });
    }
  }

  init() {
    this.addLinkEvent();
  }
}
