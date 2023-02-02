export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) { // geralmente o que vai aqui são variaveis ou propriedades que contém string
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementaNumero(numero) { // ela não precisa do objeto para funcionar, sendo um método do construtor
    const valor = +numero.innerText; // posso usar em qualquer numero do meu site, é tipo um Array.from();
    let start = 0;
    const incremento = valor / 100;
    const animaNumero = setInterval(() => {
      start += incremento;
      numero.innerText = Math.floor(start);

      if (start > valor) {
        numero.innerText = valor;
        clearInterval(animaNumero);
      }
    }, 10 * Math.random()); /* deixa o código mais orgânico, vai fazer cada vez cada número com uma velocidade diferente */
  }

  initAnimaNumeros() {
    this.numeros.forEach((elementoNumero) => {
      this.constructor.incrementaNumero(elementoNumero); // função estatica n depende do objeto, logo passar o construtor
    });
  }

  handleMutation(mutation) { // função de callback ; mutation é tipo um event do observer
    // console.log(mutation);  //array like com informações como target, o tipo de mutação monitorada etc
    // console.log(mutation[0].target) //é um array like, tem só um item no caso
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect(); // quando ocorre a mutação ela para de ser observada com esse método disconnect
      this.initAnimaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation); // é um objeto que recebe uma função de callback
    // que é ativada na mudança

    this.observer.observe(this.observerTarget, {
      attributes: true,
    }); // método do objeto que diz qual target deve ser
    // .observe(target,o que vai ser observado no target, no caso acima a mudança de atributos)
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }

  /* temos um problema: o código já é iniciado assim que abrimos a pg, o user n vai chegar na sessao */
  /* devemos usar um observador pra corrigir, assim que um atributo muda no que está sendo observado esse obj */
  /* irá agir */

  // ocorreu um problema que estava ativando msm quando estavamos com a barra lá em cima da página
  // nosso código de animar o scroll estava sempre adicionando ou removendo classe com scroll
  // causa a mudança (mutação) e ativa o método, pra consertar  => remover apenas se a sessão
  // tiver a classe ativo. (script scroll-animaçao)
}
