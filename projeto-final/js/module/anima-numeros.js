export default function animaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  function initAnimaNumeros() {
    numeros.forEach((elementoNumero) => {
      const valor = +elementoNumero.innerText;
      let start = 0;
      const incremento = valor / 100; /* para contagem chegar mais rápido, porém gera um incremento quebrado, da número errado */
      /* quando coloco no elementoNumero */
      /* para resolver => quando start>valor => elementoNumero.innerText = valor */
      const animaNumero = setInterval(() => {
        start += incremento;
        elementoNumero.innerText = Math.floor(start); /* arredonda pra inteiro */

        if (start > valor) {
          elementoNumero.innerText = valor;
          clearInterval(animaNumero);
        }
      }, 10 * Math.random()); /* deixa o código mais orgânico, vai fazer cada vez cada número com uma velocidade diferente */
    });
  }

  let observer;

  function handleMutation(mutation) { // função de callback ; mutation é tipo um event do observer
    // console.log(mutation);  //array like com informações como target, o tipo de mutação monitorada etc
    // console.log(mutation[0].target) //é um array like, tem só um item no caso
    if (mutation[0].target.classList.contains('anima')) {
      observer.disconnect(); // quando ocorre a mutação ela para de ser observada com esse método disconnect
      initAnimaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation); // é um objeto que recebe uma função de callback
  // que é ativada na mudança

  const observerTarget = document.querySelector('.grid-section.numeros');
  observer.observe(observerTarget, { attributes: true }); // método do objeto que diz qual target deve ser
  // .observe(target,o que vai ser observado no target, no caso acima a mudança de atributos)
}

/* temos um problema: o código já é iniciado assim que abrimos a pg, o user n vai chegar na sessao */
/* devemos usar um observador pra corrigir, assim que um atributo muda no que está sendo observado esse obj */
/* irá agir */

// ocorreu um problema que estava ativando msm quando estavamos com a barra lá em cima da página
// nosso código de animar o scroll estava sempre adicionando ou removendo classe com scroll
// causa a mudança (mutação) e ativa o método, pra consertar  => remover apenas se a sessão
// tiver a classe ativo. (script scroll-animaçao)


