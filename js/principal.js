console.log("Estou sendo carregado de um arquivo externo.");

var tituloPrincipal = document.querySelector(".titulo");
tituloPrincipal.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPesso = paciente.querySelector(".info-peso");
var peso = tdPesso.textContent;
console.log(peso);

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var imc = (peso / (altura * altura));
console.log(imc);

var totalIMC = paciente.querySelector(".info-imc");
totalIMC.textContent = imc;
