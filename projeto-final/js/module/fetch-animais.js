import AnimaNumeros from './anima-numeros.js'; // problema: a animação dos números estava acontecendo antes do fetch
// solução importar o module para cá ao invés de importar pro script

export default function fetchAnimais() {
  async function requisitaAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json(); // retorna um array com objetos

    // console.log(animaisJSON);
    const secaoNumeroAnimais = document.querySelector('.numeros-grid');

    function createAnimal(animal) { // estou recriando a parte do html pelo script
      // console.log(animal)

      const div = document.createElement('div');
      div.classList.add('numero-animal');

      div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.quantidade}</span>`;

      return div;
    }

    animaisJSON.forEach((animal) => {
      const divAnimal = createAnimal(animal); // é o retorno da função createAnimal
      secaoNumeroAnimais.appendChild(divAnimal);
      const animaNumeros = new AnimaNumeros('[data-numero]','.grid-section.numeros' ,'anima'); // acontece depois que rolou o fetch
      animaNumeros.init();
    });
  }

  requisitaAnimais('./numeroAnimaisApi.json');
}

// vai fazer fetch podemos usar then ou async/await
