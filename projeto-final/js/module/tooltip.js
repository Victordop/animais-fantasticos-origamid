export default class Tooltip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    // sempre que temos funções de callback dentro de uma classe precisamos fazer o bind
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // cria tooltip e adiciona no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  // ao passar o mouse por cima do mapa cria a tooltip, adiciona evento de mousemove e mouseleave
  onMouseOver({ currentTarget }) {
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    // console.log(event.pageX, window.innerWidth);// event.pageX => onde o evento está acontecendo no eixo x, window.innerWidth => largura da janela
    if (event.pageX + 452 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 200}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 50}px`;
    }
  }

  onMouseLeave({ currentTarget }) { // desetruturei o event pois estou usando só currentTarget
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
