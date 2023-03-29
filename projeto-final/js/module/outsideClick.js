export default function outsideClick(element, events, callback) { // necessário pra fechar quando eu clicar fora
  const html = document.documentElement; // seleciona o html
  const dataAtribute = 'atribute-outside';

  function handleClickOut(event) {
    if (!element.contains(event.target)) { // se está do lado de fora do elemento, é condição verdadeira
      element.removeAttribute(dataAtribute);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClickOut); // ativado pelo efeito bubbling
      });
      callback(); // ativa a função que foi passada como callback
    }
  }

  if (!element.hasAttribute(dataAtribute)) {
    events.forEach((userEvent) => {
      setTimeout(() => { // evita que o código abaixo seja ativado por efeito bubbling pois é um método assincrono
        html.addEventListener(userEvent, handleClickOut); // não ativa a função de callback direto pois ela entra na fila, acontece o bubbling e depois ela
      });
    });
    element.setAttribute(dataAtribute, ''); // adicionei o atributo atribute-outside no elemento ;  dois parametros no metodos nome e valor
  }
}
