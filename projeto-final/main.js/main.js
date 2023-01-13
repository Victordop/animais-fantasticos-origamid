/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/module/abre-modal-login.js":
/*!***************************************!*\
  !*** ./js/module/abre-modal-login.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ abreModalLogin)\n/* harmony export */ });\nfunction abreModalLogin() {\n  // aqui selecionei o container e os botões relacionados a ele\n  var botaoLogin = document.querySelector('[data-modal=abrir]');\n  var container = document.querySelector('[data-modal=container]');\n  var botaoFechar = document.querySelector('[data-modal=fechar]');\n\n  // essa parte do código vai adicionar a classe ativo ao modal quando clicamos no botao login\n  // e excluir a classe ativo quando clicamos no x do modal\n\n  if (botaoLogin && container && botaoFechar) {\n    // vai criar e executar as funções apenas se os elementos selecionados existirem\n    var toggleModal = function toggleModal(event) {\n      event.preventDefault(); // previne ir pra outra página, comportamento padrão\n      container.classList.toggle('ativo');\n    };\n    var cliqueForaModal = function cliqueForaModal(event) {\n      // aplica a função de fechar modal ; coloquei o event pra n dar erro\n      if (event.target === this) {\n        toggleModal(event);\n      }\n\n      // console.log(event.target) //é o container todo\n      // console.log(this) //também é o container todo => this é o elemento pai\n    };\n\n    botaoLogin.addEventListener('click', toggleModal);\n    container.addEventListener('click', cliqueForaModal); // ao clicar no container, que é o que envolve tudo\n    botaoFechar.addEventListener('click', toggleModal);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/abre-modal-login.js?");

/***/ }),

/***/ "./js/module/accordion-faq-animacao.js":
/*!*********************************************!*\
  !*** ./js/module/accordion-faq-animacao.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AccordionFaq)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar AccordionFaq = /*#__PURE__*/function () {\n  function AccordionFaq(list) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AccordionFaq);\n    this.listaAcordion = document.querySelectorAll(list);\n    this.classeAtivo = 'ativo'; // como repetimos muito, bom colocar em uma var, fica mais fácil mudar no futuro\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AccordionFaq, [{\n    key: \"addEventListener\",\n    value: function addEventListener() {\n      var _this = this;\n      this.listaAcordion.forEach(function (dt) {\n        dt.addEventListener('click', function () {\n          return _this.accordionToggle(dt);\n        }); // o this volta a ser a ojeto da classe ao invés do item\n      });\n    }\n  }, {\n    key: \"accordionToggle\",\n    value: function accordionToggle(dt) {\n      dt.classList.toggle(this.classeAtivo);\n      dt.nextElementSibling.classList.toggle(this.classeAtivo);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.listaAcordion.length) {\n        //  se true significa que a lista de accordion existe.\n        this.accordionToggle(this.listaAcordion[0]);\n        this.addEventListener();\n      }\n      return this;\n    }\n  }]);\n  return AccordionFaq;\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/accordion-faq-animacao.js?");

/***/ }),

/***/ "./js/module/anima-numeros.js":
/*!************************************!*\
  !*** ./js/module/anima-numeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNumeros)\n/* harmony export */ });\nfunction animaNumeros() {\n  var numeros = document.querySelectorAll('[data-numero]');\n  function initAnimaNumeros() {\n    numeros.forEach(function (elementoNumero) {\n      var valor = +elementoNumero.innerText;\n      var start = 0;\n      var incremento = valor / 100; /* para contagem chegar mais rápido, porém gera um incremento quebrado, da número errado */\n      /* quando coloco no elementoNumero */\n      /* para resolver => quando start>valor => elementoNumero.innerText = valor */\n      var animaNumero = setInterval(function () {\n        start += incremento;\n        elementoNumero.innerText = Math.floor(start); /* arredonda pra inteiro */\n\n        if (start > valor) {\n          elementoNumero.innerText = valor;\n          clearInterval(animaNumero);\n        }\n      }, 10 * Math.random()); /* deixa o código mais orgânico, vai fazer cada vez cada número com uma velocidade diferente */\n    });\n  }\n\n  var observer;\n  function handleMutation(mutation) {\n    // função de callback ; mutation é tipo um event do observer\n    // console.log(mutation);  //array like com informações como target, o tipo de mutação monitorada etc\n    // console.log(mutation[0].target) //é um array like, tem só um item no caso\n    if (mutation[0].target.classList.contains('anima')) {\n      observer.disconnect(); // quando ocorre a mutação ela para de ser observada com esse método disconnect\n      initAnimaNumeros();\n    }\n  }\n  observer = new MutationObserver(handleMutation); // é um objeto que recebe uma função de callback\n  // que é ativada na mudança\n\n  var observerTarget = document.querySelector('.grid-section.numeros');\n  observer.observe(observerTarget, {\n    attributes: true\n  }); // método do objeto que diz qual target deve ser\n  // .observe(target,o que vai ser observado no target, no caso acima a mudança de atributos)\n}\n\n/* temos um problema: o código já é iniciado assim que abrimos a pg, o user n vai chegar na sessao */\n/* devemos usar um observador pra corrigir, assim que um atributo muda no que está sendo observado esse obj */\n/* irá agir */\n\n// ocorreu um problema que estava ativando msm quando estavamos com a barra lá em cima da página\n// nosso código de animar o scroll estava sempre adicionando ou removendo classe com scroll\n// causa a mudança (mutação) e ativa o método, pra consertar  => remover apenas se a sessão\n// tiver a classe ativo. (script scroll-animaçao)\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/anima-numeros.js?");

/***/ }),

/***/ "./js/module/clique-imagem-section-animacao.js":
/*!*****************************************************!*\
  !*** ./js/module/clique-imagem-section-animacao.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabNav)\n/* harmony export */ });\nfunction tabNav() {\n  var lista = document.querySelectorAll('.js-tabmenu li');\n  var conteudo = document.querySelectorAll('.js-tabcontent section');\n  function activeTab(index) {\n    conteudo.forEach(function (section) {\n      section.classList.remove('ativo');\n    });\n    var datasetAnimacao = conteudo[index].dataset.anime; // dataset é uma propriedade, um objeto do construtor de html -> permite adicionarmos\n    conteudo[index].classList.add('ativo', datasetAnimacao); // um atributo na tag e converte-lo hem classe\n  }\n\n  if (lista.length && conteudo.length) {\n    conteudo[0].classList.add('ativo');\n    lista.forEach(function (imagem, index) {\n      imagem.addEventListener('click', function () {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/clique-imagem-section-animacao.js?");

/***/ }),

/***/ "./js/module/dropdown-menu.js":
/*!************************************!*\
  !*** ./js/module/dropdown-menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/module/outsideClick.js\");\n\n\n/* minha solução\n\nexport default function dropDownMenu(){\n\nconst botaoSobre = document.querySelectorAll('[data-dropdown] ');\nconst menuDropDown = document.querySelector('.dropdown-menu');\n\nconst abreMenuDropDown ={\nhandleEvent(event){\nevent.preventDefault();\nmenuDropDown.classList.add('menu-ativado');\n}\n\n}\nconst fechaMenuDropDown ={\nhandleEvent(){\nmenuDropDown.classList.remove('menu-ativado');\n}\n}\n\nbotaoSobre.addEventListener('click',abreMenuDropDown);\nmenuDropDown.addEventListener('mouseleave',fechaMenuDropDown);\n\n}\n\n//só com o :hover fica bugado se a pessoa não tiver o mouse\n//solução é abrir o menu caso a pessoa clique e feche quando ela sai do quadradinho\n*/\n\n// solução professor\nfunction dropDownMenu() {\n  var dropDownMenus = document.querySelectorAll('[data-dropdown] ');\n  dropDownMenus.forEach(function (menu) {\n    function handleClick(event) {\n      var _this = this;\n      // função de callback\n      event.preventDefault();\n      this.classList.add('menu-ativado');\n      (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], function () {\n        _this.classList.remove('menu-ativado');\n      });\n    }\n    ['touchstart', 'click'].forEach(function (userEvent) {\n      // maneira mais sucinta de escrever\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/dropdown-menu.js?");

/***/ }),

/***/ "./js/module/fetch-animais.js":
/*!************************************!*\
  !*** ./js/module/fetch-animais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/module/anima-numeros.js\");\n\n\n // problema: a animação dos números estava acontecendo antes do fetch\n// solução importar o module para cá ao invés de importar pro script\n\nfunction fetchAnimais() {\n  function requisitaAnimais(_x) {\n    return _requisitaAnimais.apply(this, arguments);\n  }\n  function _requisitaAnimais() {\n    _requisitaAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animaisResponse, animaisJSON, secaoNumeroAnimais, createAnimal;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            createAnimal = function _createAnimal(animal) {\n              // estou recriando a parte do html pelo script\n              // console.log(animal)\n\n              var div = document.createElement('div');\n              div.classList.add('numero-animal');\n              div.innerHTML = \"<h3>\".concat(animal.especie, \"</h3><span data-numero>\").concat(animal.quantidade, \"</span>\");\n              return div;\n            };\n            _context.next = 3;\n            return fetch(url);\n          case 3:\n            animaisResponse = _context.sent;\n            _context.next = 6;\n            return animaisResponse.json();\n          case 6:\n            animaisJSON = _context.sent;\n            // retorna um array com objetos\n            // console.log(animaisJSON);\n            secaoNumeroAnimais = document.querySelector('.numeros-grid');\n            animaisJSON.forEach(function (animal) {\n              var divAnimal = createAnimal(animal); // é o retorno da função createAnimal\n              secaoNumeroAnimais.appendChild(divAnimal);\n              (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // acontece depois que rolou o fetch\n            });\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return _requisitaAnimais.apply(this, arguments);\n  }\n  requisitaAnimais('./numeroAnimaisApi.json');\n}\n\n// vai fazer fetch podemos usar then ou async/await\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/fetch-animais.js?");

/***/ }),

/***/ "./js/module/menu-mobile.js":
/*!**********************************!*\
  !*** ./js/module/menu-mobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/module/outsideClick.js\");\n// menu mobile é aquele que apertamos no hamburguer e ele mostra um menuzinho\n\n// aria-expanded=\"false\" => acessibilidade => diz que o botão não está expandido\n// aria-controls =\"menu\" => controla o botão\n\n\nfunction menuMobile() {\n  var botaoMenu = document.querySelector('[data-menu=button]');\n  var menuSandwich = document.querySelector('[data-menu=list]');\n  var eventos = ['touchstart', 'click'];\n  function ativaMenuMobile() {\n    botaoMenu.classList.add('ativar');\n    menuSandwich.classList.add('ativar');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuSandwich, eventos, function () {\n      botaoMenu.classList.remove('ativar');\n      menuSandwich.classList.remove('ativar');\n    });\n  }\n  // problemas : a função de callback tá sendo ativada quando clico\n  // ela é ativada quando clicamos fora porque o botão não está na li\n\n  if (botaoMenu) {\n    // verifica se eu selecionei o elemento corretamente senão dá erro\n    eventos.forEach(function (evento) {\n      return botaoMenu.addEventListener(evento, ativaMenuMobile);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/menu-mobile.js?");

/***/ }),

/***/ "./js/module/objeto-date.js":
/*!**********************************!*\
  !*** ./js/module/objeto-date.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHorarioFuncionamento)\n/* harmony export */ });\n/* o construtor Date constrói objetos contendo datas e horas.\n\nconst objetoDate = new Date();  //se não passo parâmetro => cria objeto com datas e horários da execução do js\nconsole.log(objetoDate);\n\n//propriedades e métodos que posso utilizar quando crio um objeto com o construtor Date\nconsole.log(objetoDate.getDay()); //0 a 5 =>dias da semana começando 0 domingo\nconsole.log(objetoDate.getDate()); //dia do mês\nconsole.log(objetoDate.getMonth()); //qual mês, janeiro é 0\nconsole.log(objetoDate.getFullYear()); //qual ano\nconsole.log(objetoDate.getHours()); //qual é a hora\nconsole.log(objetoDate.getMinutes()); //quais são os minutos\nconsole.log(objetoDate.getTime()); //ms desde 1970\nconsole.log(objetoDate.getUTCHours()-3) //hora conforme o horário de brasilia, não conforme a hora interna do\n                                        //computador da pessoa\n                                        //exemplo aplicabilidade: promoção vai ate 9 hrs do horário de brasilia\n                                        //mas pc de outra  pessoa em outro pais ainda n deu 9 horas, precisamos dessa\n                                        //config para setar o horário de brasilia independente da máquina\n\nexport default function initHorarioFuncionamento(){\nconst agora = new Date();\nconsole.log(agora);\n\nconst futuro = new Date('10 21 2023'); //cria um objeto date com uma data do futuro ; posso preencher com as config\nconsole.log(futuro )\n\n//.getTime() pega o tempo em ms de 01/01/70 até agora\n\n//exercicio: ver quanto tempo falta da data armazenada no agora até a data armazenada no futuro\n\n// const diferencaTempo = Math.floor((futuro.getTime()-agora.getTime())/(24*60*60*1000));\n// console.log(diferencaTempo)\n\nfunction converteMsEmDias(milisegundos){\n   return  milisegundos/(24*60*60*1000); //se eu quiser saber em horas é só apagar o 24\n}\n\nconst diferencaDias = Math.floor(converteMsEmDias(futuro.getTime())-converteMsEmDias(agora.getTime()));\nconsole.log(diferencaDias);\n\n}\n*/\n\nfunction initHorarioFuncionamento() {\n  var funcionamento = document.querySelector('[data-semana]');\n  // console.log(funcionamento.dataset.semana)\n  // const diasFuncionmaneto = funcionamento.dataset.semana; //para converter string em array =>split\n  // const diasFuncionmaneto = funcionamento.dataset.semana.split(','); para converter um array de números em string em um array de numero numero, aplicar map com Number\n  var diasFuncionmaneto = funcionamento.dataset.semana.split(',').map(Number);\n  var horariosFuncionamento = funcionamento.dataset.horario.split(',').map(Number);\n  // console.log(diasFuncionmaneto, horariosFuncionamento);\n\n  var agora = new Date();\n  var horaAgora = agora.getHours();\n  var diaSemanaAgora = agora.getDay();\n  // console.log(horaAgora,diaSemanaAgora);\n\n  // comparando o dia de agora com os dias de funcionamento\n\n  // console.log([1,2,3,4,5].indexOf(6)); //quando não tem o número no array o index é -1\n\n  var diaEstaFuncionando = diasFuncionmaneto.indexOf(diaSemanaAgora) !== -1; // true\n\n  var horaEmpresaEstaAberta = horaAgora >= horariosFuncionamento[0] && horaAgora < horariosFuncionamento[1];\n  if (diaEstaFuncionando && horaEmpresaEstaAberta) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/objeto-date.js?");

/***/ }),

/***/ "./js/module/outsideClick.js":
/*!***********************************!*\
  !*** ./js/module/outsideClick.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  // necessário pra fechar quando eu clicar fora\n  var html = document.documentElement; // seleciona o html\n  var dataAtribute = 'atribute-outside';\n  function handleClickOut(event) {\n    if (!element.contains(event.target)) {\n      // se está do lado de fora do elemento, é condição verdadeira\n      element.removeAttribute(dataAtribute);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleClickOut); // ativado pelo efeito bubbling\n      });\n\n      callback(); // ativa a função que foi passada como callback\n    }\n  }\n\n  if (!element.hasAttribute(dataAtribute)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        // evita que o código abaixo seja ativado por efeito bubbling pois é um método assincrono\n        html.addEventListener(userEvent, handleClickOut); // não ativa a função de callback direto pois ela entra na fila, acontece o bubbling e depois ela\n      });\n    });\n\n    element.setAttribute(dataAtribute, ''); // adicionei o atributo atribute-outside no elemento ;  dois parametros no metodos nome e valor\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/outsideClick.js?");

/***/ }),

/***/ "./js/module/scroll-animacao.js":
/*!**************************************!*\
  !*** ./js/module/scroll-animacao.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScroll)\n/* harmony export */ });\nfunction initScroll() {\n  var sections = document.querySelectorAll('[data-scroll=\"scroll\"]');\n  // sections[0].classList.add('anima'); //para aparecer quando o usuario entra no site ou usar metodo de chamar a função la embaixo\n  var metadeWindow = window.innerHeight * 0.5; // faz conta pra que o elemento anime quando estiver mais ou menos no meio da tela e n apenas quando o elemento bate no topo\n\n  function animaScroll() {\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - metadeWindow < 0;\n      if (isSectionVisible) {\n        section.classList.add('anima');\n      } else if (section.classList.contains('anima')) {\n        section.classList.remove('anima'); // assim n fica adicionado ou removendo de todos dependente de estarem visiveis ou n\n      }\n    });\n  }\n\n  if (sections.length) {\n    // verifica se section existe\n    window.addEventListener('scroll', animaScroll);\n    animaScroll(); // ativa a função uma vez assim que o site iniciou\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/scroll-animacao.js?");

/***/ }),

/***/ "./js/module/scroll-suave.js":
/*!***********************************!*\
  !*** ./js/module/scroll-suave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        // como se fosse ScrollSuave.options = {..}\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this); // comentario 2\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      // este é um método dentro de uma classe e uma função de callback\n      // this não é o objeto e sim o elemento que recebe o eventListener\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute('href');\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n      if (this.linksInternos.length) {\n        this.linksInternos.forEach(function (link) {\n          // temos que usar this pois está dentro do objeto\n          link.addEventListener('click', _this.scrollToSection); // agora o this é cada um dos elementos que recebe o click e n mais  a classe\n          // link.addEventListener('click', (event) => this.scrollToSection(event)); // comentario 1\n        });\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        this.addLinkEvent();\n      }\n      return this; // importante para eu poder linkar outras funções quando chamo a função init, caso contrario tenho undefined\n    }\n  }]);\n  return ScrollSuave;\n}(); // this dentro da classe é a própria classe\n// quando adiciono um eventListener, o this passa a fazer referência ao elemento que recebe o evento\n// comentario1: quando uso arrow function, o this passa a ser o anterior, logo, deixa de ser o elemento clicado e volta a ser a classe\n// comentario2: bind de função de callback em classe => outra solução para o problema do this se tornando o elemento\n// agora posso remover o eventListener p.exemplo, pois o this faz referência a classe\n\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/scroll-suave.js?");

/***/ }),

/***/ "./js/module/tooltip.js":
/*!******************************!*\
  !*** ./js/module/tooltip.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\n  var toolTips = document.querySelectorAll('[data-tooltip]');\n  function criaDivToolTip(elemento) {\n    var caixaToolTip = document.createElement('div');\n    caixaToolTip.classList.add('tooltip');\n    var texto = elemento.getAttribute('aria-label'); // o texto que está lá no html, funciona para leitor\n    // mas n aparece como tooltip\n    caixaToolTip.innerText = texto;\n    document.body.appendChild(caixaToolTip);\n    return caixaToolTip;\n  }\n  function funcMouseOver(event) {\n    var toolTip = criaDivToolTip(this);\n    // toolTip.style.top = event.pageY + \"px\"; //aqui dá um valor inteiro, temos que somar com px para funcionar\n    // toolTip.style.left = event.pageX + \"px\";\n\n    // console.log(toolTip.style)//mostra um objeto style com os estilos que posso alterar\n    // console.log(this) //this é o item!!!\n    // console.log(event) //para gente ver o posicionamento do elemento (page x, page y)\n\n    var onMouseMove = {\n      toolTip: '',\n      handleEvent: function handleEvent(event) {\n        toolTip.style.top = \"\".concat(event.pageY + 20, \"px\"); // aqui dá um valor inteiro, temos que somar com px para funcionar\n        toolTip.style.left = \"\".concat(event.pageX + 20, \"px\"); // o 20 é pra desgrudar do ponteiro e n ficar piscando\n      }\n    };\n\n    onMouseMove.toolTip = toolTip;\n    this.addEventListener('mousemove', onMouseMove);\n    var removeTip = {\n      element: '',\n      toolTip: '',\n      handleEvent: function handleEvent() {\n        // ativa o método quando passamos no eventListener como uma função de callback\n        this.toolTip.remove(); // remove o elemento do Dom; //this no caso é o toolTip que está aqui\n        this.element.removeEventListener('mouseleave', removeTip); // usei pra remover o eventListener\n        this.element.removeEventListener('mousemove', onMouseMove);\n      }\n    };\n    removeTip.element = this; // o this é o item\n    removeTip.toolTip = toolTip; // setei o valor da propriedade toolTip do objeto\n\n    this.addEventListener('mouseleave', removeTip);\n  }\n  toolTips.forEach(function (item) {\n    item.addEventListener('mouseover', funcMouseOver);\n  });\n\n  // funçao cria a div, estiliza ela, adiciona texto e coloca na página\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/module/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/scroll-suave.js */ \"./js/module/scroll-suave.js\");\n/* harmony import */ var _module_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/scroll-animacao.js */ \"./js/module/scroll-animacao.js\");\n/* harmony import */ var _module_accordion_faq_animacao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/accordion-faq-animacao.js */ \"./js/module/accordion-faq-animacao.js\");\n/* harmony import */ var _module_clique_imagem_section_animacao_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/clique-imagem-section-animacao.js */ \"./js/module/clique-imagem-section-animacao.js\");\n/* harmony import */ var _module_abre_modal_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/abre-modal-login.js */ \"./js/module/abre-modal-login.js\");\n/* harmony import */ var _module_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/tooltip.js */ \"./js/module/tooltip.js\");\n/* harmony import */ var _module_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/dropdown-menu.js */ \"./js/module/dropdown-menu.js\");\n/* harmony import */ var _module_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/menu-mobile.js */ \"./js/module/menu-mobile.js\");\n/* harmony import */ var _module_objeto_date_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/objeto-date.js */ \"./js/module/objeto-date.js\");\n/* harmony import */ var _module_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/fetch-animais.js */ \"./js/module/fetch-animais.js\");\n// import $ from 'jquery'; // como estou usando node n preciso colocar js\n// import _ from 'lodash';\n\n\n\n\n\n\n\n\n\n\n\nvar accordion = new _module_accordion_faq_animacao_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.faq-accordion dt');\naccordion.init();\n\n// modal é aquela telinha que aparece no site quando apertamos pra fazer o login, p ex\n// ou uma propaganda que aparece do nada\n\n// html do modal geralmente fica lá para baixo no index.html\n\n// tooltip geralmente é uma telinha que abre explicando o que acontece se vc clicar, por exemplo\n// na tag html se eu coloco o atributo title=\"\" aparece o que colocamos dentro da string quando passamos\n// o mouse por cima\n// aria-label dá na mesma para o leitor de tela mas quando mouse passa em cima a caixinha n aparece\n\nvar scrollSuave = new _module_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"menu\"] a[href^=\"#\"');\nscrollSuave.init();\n(0,_module_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_module_clique_imagem_section_animacao_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_module_abre_modal_login_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_module_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_module_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_module_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_module_objeto_date_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_module_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n// usando npm e webpack podemos importar scripts externos com facilidade\n// $('nav').hide();\n\n// const diferenca = _.difference(['banana', 'maçã'], ['banana', 'uva']);\n// console.log(diferenca);\n\n//# sourceURL=webpack://animais-fantasticos-final/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n    Op = Object.prototype,\n    hasOwn = Op.hasOwnProperty,\n    defineProperty = Object.defineProperty || function (obj, key, desc) {\n      obj[key] = desc.value;\n    },\n    $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n    iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n    asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n    toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n      generator = Object.create(protoGenerator.prototype),\n      context = new Context(tryLocsList || []);\n    return defineProperty(generator, \"_invoke\", {\n      value: makeInvokeMethod(innerFn, self, context)\n    }), generator;\n  }\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n    NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n          value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n      reject(record.arg);\n    }\n    var previousPromise;\n    defineProperty(this, \"_invoke\", {\n      value: function value(method, arg) {\n        function callInvokeWithMethodAndArg() {\n          return new PromiseImpl(function (resolve, reject) {\n            invoke(method, arg, resolve, reject);\n          });\n        }\n        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = \"suspendedStart\";\n    return function (method, arg) {\n      if (\"executing\" === state) throw new Error(\"Generator is already running\");\n      if (\"completed\" === state) {\n        if (\"throw\" === method) throw arg;\n        return doneResult();\n      }\n      for (context.method = method, context.arg = arg;;) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n        if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n          if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n          context.dispatchException(context.arg);\n        } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n        state = \"executing\";\n        var record = tryCatch(innerFn, self, context);\n        if (\"normal\" === record.type) {\n          if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        }\n        \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(delegate, context) {\n    var methodName = context.method,\n      method = delegate.iterator[methodName];\n    if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel;\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n          next = function next() {\n            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n            return next.value = undefined, next.done = !0, next;\n          };\n        return next.next = next;\n      }\n    }\n    return {\n      next: doneResult\n    };\n  }\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), defineProperty(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (val) {\n    var object = Object(val),\n      keys = [];\n    for (var key in object) keys.push(key);\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n          record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n            hasFinally = hasOwn.call(entry, \"finallyLoc\");\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos-final/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos-final/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-final/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://animais-fantasticos-final/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;