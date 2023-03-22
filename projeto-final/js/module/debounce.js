export default function debounce(callback, delay) {
  let timer;

  return (...args) => { // com esta desestruturação, posso passar argumentos na minha função de callback
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args); // faz parte da desestrutuação acima
      timer = null;
    }, delay);
  };
}

// Debounce serve para o evento não ficar sendo ativado alucinadamente, ele filtra o número
// de vezes que o evento é ativado
// utiliza-lo para eventos de scroll e resize (muda tamanho da tela)
