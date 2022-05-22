// Desafio 11 PR
function generatePhoneNumber(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let contador = 0;
    for (let index2 = 1; index2 <= index; index2 += 1) {
      if (array[index] === array[index2]) {
        contador += 1;
      }
    }
    if (contador > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let result = array.join('');
  return `(${result.substring(0, 2)}) ${result.substring(2, 7)}-${result.substring(7, 11)}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let numberOfString = /\d+/g;
  let result = string.match(numberOfString);
  let soma = 0;
  for (let index in result) {
    soma += parseInt(result[index]);
  } if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

console.log(hydrate('1 cachaça'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
