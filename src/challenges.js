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
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let palavras = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      palavras.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      palavras.push('fizz');
    } else if (array[index] % 5 === 0) {
      palavras.push('buzz');
    } else {
      palavras.push('bug!');
    }
  }
  return palavras;
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
