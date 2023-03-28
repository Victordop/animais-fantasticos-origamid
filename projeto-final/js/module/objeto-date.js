/* o construtor Date constrói objetos contendo datas e horas.

const objetoDate = new Date();  //se não passo parâmetro => cria objeto com datas e horários da execução do js
console.log(objetoDate);

//propriedades e métodos que posso utilizar quando crio um objeto com o construtor Date
console.log(objetoDate.getDay()); //0 a 5 =>dias da semana começando 0 domingo
console.log(objetoDate.getDate()); //dia do mês
console.log(objetoDate.getMonth()); //qual mês, janeiro é 0
console.log(objetoDate.getFullYear()); //qual ano
console.log(objetoDate.getHours()); //qual é a hora
console.log(objetoDate.getMinutes()); //quais são os minutos
console.log(objetoDate.getTime()); //ms desde 1970
console.log(objetoDate.getUTCHours()-3) //hora conforme o horário de brasilia, não conforme a hora interna do
                                        //computador da pessoa
                                        //exemplo aplicabilidade: promoção vai ate 9 hrs do horário de brasilia
                                        //mas pc de outra  pessoa em outro pais ainda n deu 9 horas, precisamos dessa
                                        //config para setar o horário de brasilia independente da máquina

export default function initHorarioFuncionamento(){
const agora = new Date();
console.log(agora);

const futuro = new Date('10 21 2023'); //cria um objeto date com uma data do futuro ; posso preencher com as config
console.log(futuro )

//.getTime() pega o tempo em ms de 01/01/70 até agora

//exercicio: ver quanto tempo falta da data armazenada no agora até a data armazenada no futuro

// const diferencaTempo = Math.floor((futuro.getTime()-agora.getTime())/(24*60*60*1000));
// console.log(diferencaTempo)

function converteMsEmDias(milisegundos){
   return  milisegundos/(24*60*60*1000); //se eu quiser saber em horas é só apagar o 24
}

const diferencaDias = Math.floor(converteMsEmDias(futuro.getTime())-converteMsEmDias(agora.getTime()));
console.log(diferencaDias);

}
*/

export default class Funcionamento {
  constructor(horarioFuncionamento) {
    this.funcionamento = document.querySelector(horarioFuncionamento);
    // console.log(funcionamento.dataset.semana)
    // const diasFuncionmaneto = funcionamento.dataset.semana; //para converter string em array =>split
    // const diasFuncionmaneto = funcionamento.dataset.semana.split(','); para converter um array de números em string em um array de numero numero, aplicar map com Number
    this.diasFuncionmaneto = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horariosFuncionamento = this.funcionamento.dataset.horario.split(',').map(Number);
    // console.log(diasFuncionmaneto, horariosFuncionamento);

    this.agora = new Date();
    this.horaAgora = this.agora.getHours();
    this.diaSemanaAgora = this.agora.getDay();
    // console.log(horaAgora,diaSemanaAgora);

    // comparando o dia de agora com os dias de funcionamento

    // console.log([1,2,3,4,5].indexOf(6)); //quando não tem o número no array o index é -1

    this.diaEstaFuncionando = this.diasFuncionmaneto.indexOf(this.diaSemanaAgora) !== -1; // true

    this.horaEmpresaEstaAberta = this.horaAgora >= this.horariosFuncionamento[0] && this.horaAgora < this.horariosFuncionamento[1];
  }

  addClasseAberto() {
    this.funcionamento.classList.add('aberto');
  }

  init() {
    if (this.diaEstaFuncionando && this.horaEmpresaEstaAberta) {
      this.addClasseAberto();
    }
    return this;
  }
}
