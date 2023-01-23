export default class Tooltip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);
  }


  addTooltipsEvent(){
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover',this.onMouseOver);
    })
  
  }

  init(){ //continuar daqui

  }


  onMouseOver(event) {
this.currentTarget.criarTooltipBox(event.currentTarget);

  event.currentTarget.addEventListener('mousemove',this.onMouseMove);
  event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

 
    onMouseLeave(){
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }


    onMouseMove(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }

   criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox=tooltipBox;
  }