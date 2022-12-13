let readlineSync = require("readline-sync");
let funcaoEscolhida = readlineSync.question(
  "Escolha a sua funcao: Digite Soma ou Subtracao: "
);
let param1 = parseInt(readlineSync.question("Valor 1: "));
let param2 = parseInt(readlineSync.question("Valor 2: "));
FuncaoSelecionada();

function Adicionar() {
    return param1 + param2;
    
}

function Subtracao() {
    return param1 - param2;
}

function FuncaoSelecionada() {
  let result;
  if (funcaoEscolhida = 'Soma') {
    result = console.log (Adicionar());
  } else if (funcaoEscolhida = 'Subtracao') {
    result = console.log ( Subtracao());
  }
  return result
}
