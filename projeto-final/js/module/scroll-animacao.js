export default function initScroll() {
  const sections = document.querySelectorAll('[data-scroll="scroll"]');
  // sections[0].classList.add('anima'); //para aparecer quando o usuario entra no site ou usar metodo de chamar a função la embaixo
  const metadeWindow = window.innerHeight * 0.5; // faz conta pra que o elemento anime quando estiver mais ou menos no meio da tela e n apenas quando o elemento bate no topo

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - metadeWindow) < 0;
      if (isSectionVisible) {
        section.classList.add('anima');
      } else if (section.classList.contains('anima')) {
        section.classList.remove('anima'); // assim n fica adicionado ou removendo de todos dependente de estarem visiveis ou n
      }
    });
  }

  if (sections.length) { // verifica se section existe
    window.addEventListener('scroll', animaScroll);
    animaScroll(); // ativa a função uma vez assim que o site iniciou
  }
}
