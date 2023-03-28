import outsideClick from './outsideClick.js';

/* minha solução

export default function dropDownMenu(){

const botaoSobre = document.querySelectorAll('[data-dropdown] ');
const menuDropDown = document.querySelector('.dropdown-menu');

const abreMenuDropDown ={
handleEvent(event){
event.preventDefault();
menuDropDown.classList.add('menu-ativado');
}

}
const fechaMenuDropDown ={
handleEvent(){
menuDropDown.classList.remove('menu-ativado');
}
}

botaoSobre.addEventListener('click',abreMenuDropDown);
menuDropDown.addEventListener('mouseleave',fechaMenuDropDown);

}

//só com o :hover fica bugado se a pessoa não tiver o mouse
//solução é abrir o menu caso a pessoa clique e feche quando ela sai do quadradinho
*/

// solução professor
export default class DropDownMenu {
  constructor(menu, events) {
    this.dropDownMenus = document.querySelectorAll(menu);
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.activeClass = 'menu-ativado';
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
  }

  activeDropDownMenu(event) { // função de callback
    event.preventDefault();
    const element = event.CurrentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropDownMenuEvent() {
    this.events.forEach((userEvent) => { // maneira mais sucinta de escrever
      this.events.addEventListener(userEvent, this.activeDropDownMenu);
    });
  }

  init() {
    if (this.dropDownMenus.lenght) {
      this.addDropDownMenuEvent();
    }
    return this;
  }
}
