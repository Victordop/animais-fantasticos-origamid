export default class ScrollAnima {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.metadeWindow = window.innerHeight * 0.5; // faz conta pra que o elemento anime quando estiver mais ou menos no meio da tela e n apenas quando o elemento bate no topo
    this.animaScroll = this.animaScroll.bind(this); // fiz o bind, agora a função de callback não faz referência ao objeto window
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.metadeWindow) < 0;
      if (isSectionVisible) {
        section.classList.add('anima');
      } else if (section.classList.contains('anima')) {
        section.classList.remove('anima'); // assim n fica adicionado ou removendo de todos dependente de estarem visiveis ou n
      }
    });
  }

  init() {
    window.addEventListener('scroll', this.animaScroll);
    this.animaScroll(); // ativa a função uma vez assim que o site iniciou
  }
}
