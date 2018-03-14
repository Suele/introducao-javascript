

var tituloPrincipal = document.querySelector('.titulo');
tituloPrincipal.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector('#primeiro-paciente');

var tdPesso = paciente.querySelector('.info-peso');
var peso = tdPesso.textContent;
console.log(peso);

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;
console.log(altura);

var pesoEValido = true;
var alturaEValida = true;

if ((peso <= 0) || (peso >= 400)) {
  pesoEValido = false;
  tdPesso.textContent = 'Pesso inválido';
}

if (altura <= 0 || altura > 2.90) {
  alturaEValida = false;
  tdAltura.textContent = 'Altura inválida.'
}

if (alturaEValida && peso) {
  var imc = (peso / (altura * altura));
  console.log(imc);
  var totalIMC = paciente.querySelector('.info-imc');
  totalIMC.textContent = imc;
}
