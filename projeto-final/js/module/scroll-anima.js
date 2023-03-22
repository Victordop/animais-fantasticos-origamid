import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.metadeWindow = window.innerHeight * 0.5; // faz conta pra que o elemento anime quando estiver mais ou menos no meio da tela e n apenas quando o elemento bate no topo
    this.checkDistance = this.checkDistance.bind(this); // fiz o bind, pois esta é uma função de callback dentro de uma classe, exige isso
    this.eventoFiltrado = debounce(this.checkDistance, 50); // poderia ter aplicado o debounce no binde acima como alternativa
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset) - this.metadeWindow, // vai animar quando a section está no meio da página
      };
    });
    // console.log(this.distance);
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) { // para aparecer a seção quando estamos no meio da página e n apenas no topo dela
        item.element.classList.add('anima');
      } else if (item.element.classList.contains('anima')) {
        item.element.classList.remove('anima'); // assim n fica adicionado ou removendo de todos dependente de estarem visiveis ou n
      }
    });
  // console.log('scroll'); => usado para ver se o debouncing funcionou
  }

  init() {
    if (this.sections.length) {
      window.addEventListener('scroll', this.eventoFiltrado);
      this.getDistance();
      this.checkDistance(); // ativa a função uma vez assim que o site iniciou
    }
    return this;
  }

  // // para a animação do scroll
  // stop() {
  //   window.removeEventListener('scroll', this.checkDistance);
  // }
}

// getBOundinClientRect().top tem um problema, sempre pega o valor referente a onde está a barra de scroll
// offsetTop -> sempre dá a distância fixa entre a seção, no caso, e o topo da página
// desestruturando uma nodeList ela vira um array
