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
function encode(string) {
  let cript = '';
  for (let index = 0; index < string.length; index += 1) {
    if (
      string[index] === 'a'
      || string[index] === 'e'
      || string[index] === 'i'
      || string[index] === 'i'
      || string[index] === 'u'
    ) {
      cript = string
        .replace(/a/gi, 1)
        .replace(/e/gi, 2)
        .replace(/i/gi, 3)
        .replace(/o/gi, 4)
        .replace(/u/gi, 5);
    }
  }
  return cript;
}

function decode(string1) {
  let criptD = '';
  if (
    string1.includes(1)
    || string1.includes(2)
    || string1.includes(3)
    || string1.includes(4)
    || string1.includes(5)
  ) {
    criptD = string1
      .replace(/1/g, 'a')
      .replace(/2/g, 'e')
      .replace(/3/g, 'i')
      .replace(/4/g, 'o')
      .replace(/5/g, 'u');
  }
  return criptD;
}

// Desafio 10
function techList(array, string) {
  array = array.sort();
  if (array !== undefined) {
    for (let key in array) {
      array[key] = {
        tech: array[key],
        name: string,
      }
    }
  } else {
    return 'Vazio!';
  }
  return array;
}

// return objeto;

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
