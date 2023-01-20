// import $ from 'jquery'; // como estou usando node n preciso colocar js
// import _ from 'lodash';

import ScrollSuave from './module/scroll-suave.js';
import initScroll from './module/scroll-animacao.js';
import AccordionFaq from './module/accordion-faq-animacao.js';
import initToolTip from './module/tooltip.js';
import dropDownMenu from './module/dropdown-menu.js';
import menuMobile from './module/menu-mobile.js';
import initHorarioFuncionamento from './module/objeto-date.js';
import fetchAnimais from './module/fetch-animais.js';
import TabNav from './module/clique-imagem-section-animacao.js';
import AbreModalLogin from './module/abre-modal-login.js';

const accordion = new AccordionFaq('.faq-accordion dt');
accordion.init();

const tabNav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabNav.initTabNav();

const modal = new AbreModalLogin('[data-modal=abrir]', '[data-modal=container]', '[data-modal=fechar]');
modal.init();

// modal é aquela telinha que aparece no site quando apertamos pra fazer o login, p ex
// ou uma propaganda que aparece do nada

// html do modal geralmente fica lá para baixo no index.html

// tooltip geralmente é uma telinha que abre explicando o que acontece se vc clicar, por exemplo
// na tag html se eu coloco o atributo title="" aparece o que colocamos dentro da string quando passamos
// o mouse por cima
// aria-label dá na mesma para o leitor de tela mas quando mouse passa em cima a caixinha n aparece

const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"');
scrollSuave.init();

initScroll();
initToolTip();
dropDownMenu();
menuMobile();
initHorarioFuncionamento();
fetchAnimais();

// usando npm e webpack podemos importar scripts externos com facilidade
// $('nav').hide();

// const diferenca = _.difference(['banana', 'maçã'], ['banana', 'uva']);
// console.log(diferenca);
