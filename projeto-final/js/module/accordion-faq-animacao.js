export default function accordionFaq() { //colocar o código dentro de uma função tira ele do escopo global
  const listaAcordion = document.querySelectorAll('.faq-accordion dt');
  const classeAtivo = 'ativo'; // como repetimos muito, bom colocar em uma var, fica mais fácil mudar no futuro

  function accordionEvent() {
    this.classList.toggle(classeAtivo);
    this.nextElementSibling.classList.toggle(classeAtivo);
  }

  if (listaAcordion.length) { // se true significa que a lista de accordion existe.
    listaAcordion[0].classList.add(classeAtivo); // mostra para o usuário que ali tem texto
    listaAcordion[0].nextElementSibling.classList.add(classeAtivo);

    listaAcordion.forEach((dt) => {
      dt.addEventListener('click', accordionEvent);
    });
  }
}
