var tituloPrincipal = document.querySelector('.titulo');
tituloPrincipal.textContent = 'Aparecida Nutricionista';

// Busca uma lista de pacientes
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var tdPesso = pacientes[i].querySelector('.info-peso');
  var peso = tdPesso.textContent;

  var tdAltura = pacientes[i].querySelector('.info-altura');
  var altura = tdAltura.textContent;

  var pesoEValido = true;
  var alturaEValida = true;

  // Verifica o peso se é valido.
  if ((peso <= 0) || (peso >= 400)) {
    pesoEValido = false;
    tdPesso.textContent = 'Pesso inválido'
  }

  // Verifica a altura se é valida.
  if (altura <= 0 || altura > 2.90) {
    alturaEValida = false;
    tdAltura.textContent = 'Altura inválida.';
  }

  // Se a altura e o peso forem validos então
  // calculo do IMC sera feito.
  if (alturaEValida && peso) {
    var imc = (peso / (altura * altura));
    var totalIMC = pacientes[i].querySelector('.info-imc');
    totalIMC.textContent = imc.toFixed(2);
  }

}
