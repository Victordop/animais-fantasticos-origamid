// import $ from 'jquery'; // como estou usando node n preciso colocar js
// import _ from 'lodash';

import ScrollSuave from './module/scroll-suave.js';
import ScrollAnima from './module/scroll-anima.js';
import AccordionFaq from './module/accordion-faq-animacao.js';
import fetchAnimais from './module/fetch-animais.js';
import TabNav from './module/clique-imagem-section-animacao.js';
import AbreModalLogin from './module/abre-modal-login.js';
import ToolTip from './module/tooltip.js';
import DropDownMenu from './module/dropdown-menu.js';
import MenuMobile from './module/menu-mobile.js';
import Funcionamento from './module/objeto-date.js';
// import fetchBtc from './module/fetch-bitcoin.js';

const accordion = new AccordionFaq('.faq-accordion dt');
accordion.init();

const tabNav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabNav.initTabNav();

const modal = new AbreModalLogin('[data-modal=abrir]', '[data-modal=container]', '[data-modal=fechar]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

// modal é aquela telinha que aparece no site quando apertamos pra fazer o login, p ex
// ou uma propaganda que aparece do nada

// html do modal geralmente fica lá para baixo no index.html

// tooltip geralmente é uma telinha que abre explicando o que acontece se vc clicar, por exemplo
// na tag html se eu coloco o atributo title="" aparece o que colocamos dentro da string quando passamos
// o mouse por cima
// aria-label dá na mesma para o leitor de tela mas quando mouse passa em cima a caixinha n aparece

const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-scroll="scroll"]');
scrollAnima.init();
// scrollAnima.stop();

const dropMenu = new DropDownMenu('[data-dropdown]');
dropMenu.init();

const menuMobile = new MenuMobile('[data-menu=button]', '[data-menu=list]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

fetchAnimais('./numeroAnimaisApi.json', '.numeros-grid');
// fetchBtc('https://blockchain.info/ticker');

// usando npm e webpack podemos importar scripts externos com facilidade
// $('nav').hide();

// const diferenca = _.difference(['banana', 'maçã'], ['banana', 'uva']);
// console.log(diferenca);
