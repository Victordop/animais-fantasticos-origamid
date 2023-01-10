// menu mobile é aquele que apertamos no hamburguer e ele mostra um menuzinho

// aria-expanded="false" => acessibilidade => diz que o botão não está expandido
// aria-controls ="menu" => controla o botão

import outsideClick from './outsideClick.js';

export default function menuMobile() {
  const botaoMenu = document.querySelector('[data-menu=button]');
  const menuSandwich = document.querySelector('[data-menu=list]');
  const eventos = ['touchstart', 'click'];

  function ativaMenuMobile() {
    botaoMenu.classList.add('ativar');
    menuSandwich.classList.add('ativar');

  
    outsideClick(menuSandwich, eventos, () => {
      botaoMenu.classList.remove('ativar');
      menuSandwich.classList.remove('ativar');
    });
  }
  // problemas : a função de callback tá sendo ativada quando clico
  // ela é ativada quando clicamos fora porque o botão não está na li

  if (botaoMenu) {  // verifica se eu selecionei o elemento corretamente senão dá erro
    eventos.forEach((evento) => botaoMenu.addEventListener(evento, ativaMenuMobile));
  }
}
