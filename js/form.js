let botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  let form = document.querySelector('#form-adiciona')

  obtemValoresDoFormulario(form)

  let pacienteTr = document.createElement('tr')
  let nomeTd = document.createElement('td')
  let pesoTd = document.createElement('td')
  let alturaTd = document.createElement('td')
  let gorduraTd = document.createElement('td')
  let imcTd = document.createElement('td')

  nomeTd.textContent = nome
  pesoTd.textContent = peso
  alturaTd.textContent = altura
  gorduraTd.textContent = gordura
  imcTd.textContent = calculaIMC(peso, altura)

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  let tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)
})

// função que cria um objeto paciente
// com os dados inseridos no formulario.
function obtemValoresDoFormulario (form) {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value
  }
  return paciente
}
