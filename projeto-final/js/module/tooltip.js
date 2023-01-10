export default function initToolTip() {
  const toolTips = document.querySelectorAll('[data-tooltip]');

  function criaDivToolTip(elemento) {
    const caixaToolTip = document.createElement('div');
    caixaToolTip.classList.add('tooltip');
    const texto = elemento.getAttribute('aria-label'); // o texto que está lá no html, funciona para leitor
    // mas n aparece como tooltip
    caixaToolTip.innerText = texto;
    document.body.appendChild(caixaToolTip);
    return caixaToolTip;
  }

  function funcMouseOver(event) {
    const toolTip = criaDivToolTip(this);
    // toolTip.style.top = event.pageY + "px"; //aqui dá um valor inteiro, temos que somar com px para funcionar
    // toolTip.style.left = event.pageX + "px";

    // console.log(toolTip.style)//mostra um objeto style com os estilos que posso alterar
    // console.log(this) //this é o item!!!
    // console.log(event) //para gente ver o posicionamento do elemento (page x, page y)

    const onMouseMove = {
      toolTip: '',
      handleEvent(event) {
        toolTip.style.top = `${event.pageY + 20}px`; // aqui dá um valor inteiro, temos que somar com px para funcionar
        toolTip.style.left = `${event.pageX + 20}px`; // o 20 é pra desgrudar do ponteiro e n ficar piscando
      },
    };

    onMouseMove.toolTip = toolTip;
    this.addEventListener('mousemove', onMouseMove);

    const removeTip = {
      element: '',
      toolTip: '',
      handleEvent() { // ativa o método quando passamos no eventListener como uma função de callback
        this.toolTip.remove(); // remove o elemento do Dom; //this no caso é o toolTip que está aqui
        this.element.removeEventListener('mouseleave', removeTip); // usei pra remover o eventListener
        this.element.removeEventListener('mousemove', onMouseMove);
      },
    };
    removeTip.element = this; // o this é o item
    removeTip.toolTip = toolTip; // setei o valor da propriedade toolTip do objeto

    this.addEventListener('mouseleave', removeTip); 
  }

  toolTips.forEach((item) => {
    item.addEventListener('mouseover', funcMouseOver);
  });

  // funçao cria a div, estiliza ela, adiciona texto e coloca na página
}

