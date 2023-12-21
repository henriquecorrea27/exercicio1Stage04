function soma(numero1, numero2) {
  let result = Number(numero1) + Number(numero2);
  alert(result);
}

function subtr(numero1, numero2) {
  let result = Number(numero1) - Number(numero2);
  alert(result);
}

function multi(numero1, numero2) {
  let result = Number(numero1) * Number(numero2);
  alert(result);
}

function divi(numero1, numero2) {
  let result = Number(numero1) / Number(numero2);
  alert(result);
}

function resto(numero1, numero2) {
  let result = Number(numero1) % Number(numero2);
  alert(result);
}

function parImpar(numero1, numero2) {
  let result = Number(numero1) + Number(numero2);
  if (result % 2 == 0) {
    alert("A soma é par");
  } else {
    alert("A soma é ímpar");
  }
}

function igualDif(numero1, numero2) {
  if (numero1 == numero2) {
    alert("Os números são iguais");
  } else {
    alert("Os números são diferentes");
  }
}

let numero1 = prompt("Insira o primeiro número:");
let numero2 = prompt("Insira o segundo número:");

soma(numero1, numero2);
subtr(numero1, numero2);
multi(numero1, numero2);
divi(numero1, numero2);
resto(numero1, numero2);
parImpar(numero1, numero2);
igualDif(numero1, numero2);
