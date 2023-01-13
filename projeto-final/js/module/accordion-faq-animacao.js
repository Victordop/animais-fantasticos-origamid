export default class AccordionFaq {
  constructor(list) {
    this.listaAcordion = document.querySelectorAll(list);
    this.classeAtivo = 'ativo'; // como repetimos muito, bom colocar em uma var, fica mais fácil mudar no futuro
  }

  addEventListener() {
    this.listaAcordion.forEach((dt) => {
      dt.addEventListener('click', () => this.accordionToggle(dt)); // o this volta a ser a ojeto da classe ao invés do item
    });
  }

  accordionToggle(dt) {
    dt.classList.toggle(this.classeAtivo);
    dt.nextElementSibling.classList.toggle(this.classeAtivo);
  }

  init() {
    if (this.listaAcordion.length) { //  se true significa que a lista de accordion existe.
      this.accordionToggle(this.listaAcordion[0]);
      this.addEventListener();
    }
    return this;
  }
}
