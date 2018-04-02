let tituloPrincipal = document.querySelector('.titulo')
tituloPrincipal.textContent = 'Aparecida Nutricionista'

// Retorna um array de pacientes
let pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i < pacientes.length; i++) {
  let tdPesso = pacientes[i].querySelector('.info-peso')
  let peso = tdPesso.textContent

  let tdAltura = pacientes[i].querySelector('.info-altura')
  let altura = tdAltura.textContent

  let pesoEValido = true
  let alturaEValida = true

  // Verifica o peso se é valido.
  if ((peso <= 0) || (peso >= 400)) {
    pesoEValido = false
    tdPesso.textContent = 'Pesso inválido'
    pacientes[i].classList.add('paciente-invalido')
  }

  // Verifica a altura se é valida.
  if (altura <= 0 || altura > 2.90) {
    alturaEValida = false
    tdAltura.textContent = 'Altura inválida.'
    pacientes[i].classList.add('paciente-invalido')
  }

  // Se a altura e o peso forem validos então
  // calcula o IMC.
  if (alturaEValida && pesoEValido) {
    let totalIMC = (peso / (altura * altura))
    let imc = pacientes[i].querySelector('.info-imc')
    imc.textContent = totalIMC.toFixed(2)
  }
}
