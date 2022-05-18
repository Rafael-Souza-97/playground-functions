// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2var re = /\s*;\s*/;
function calcArea(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  let primeiroItem = string[0];
  let ultimoItem = string[string.length - 1];
  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const pontuacao = wins * 3 + ties * 1;
  return pontuacao;
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maiorNum = array[0];
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] > maiorNum) {
      maiorNum = array[index];
    }
  }
  for (let index2 = 0; index2 <= array.length; index2 += 1) {
    if (array[index2] === maiorNum) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
