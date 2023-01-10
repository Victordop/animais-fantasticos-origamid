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
export default function dropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown] ');

  dropDownMenus.forEach((menu) => {
  
    function handleClick(event) { // função de callback
      event.preventDefault();
      this.classList.add('menu-ativado');
      outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('menu-ativado');
      });
    }

    ['touchstart', 'click'].forEach((userEvent) => { // maneira mais sucinta de escrever
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
