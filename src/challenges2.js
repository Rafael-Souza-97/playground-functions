// Desafio 11 PR
function generatePhoneNumber(array) {
 
  
    for ( let index = 0; index < array.length; index += 1) {
      let contador = 1;
    for ( let index2 = 0; index2 <= index; index2 += 1) {
      if ( array[index] === array[index2] ) {
        contador += 1;
      } else if ( array[index] > 9 || array[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else if ( array.length !== 11) {
        return 'Array com tamanho incorreto.';
      }else if ( contador > 2) {
        return 'não é possível gerar um número de telefone com esses valores';  
      }
    }
  }  
 return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
} 
console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]))
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
