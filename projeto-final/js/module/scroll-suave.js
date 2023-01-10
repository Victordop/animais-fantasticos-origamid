export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="menu"] a[href^="#"');
  function scrollSuave(event) {
    event.preventDefault();
    const href = this.getAttribute('href'); // faz referencia ao elemento que está sofrendo ação
    const section = document.querySelector(href);

    section.scrollIntoView({ // dá scroll até o elemento ; ponto positivo: n precisamos calcular offsetTop ;
      behavior: 'smooth',
      block: 'start', // alinha o bloco no começo, ou seja, no topo da pagina
    });
  }
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollSuave);
    });
  }
}
