//luego de ser llamada esta funcion pasara por consola mostrando los parametros
const desarrugar = (objetos) => {
  console.log('desarrugar ' + objetos);
}
//a la funcion se le agrega el parametro dado
function tenderCama(n) {
    //si n es diferente o mayor a 0 se seguira ejecutando
  if (n <= 0) return;
    //se imprimira el texto con el parametro dado
  console.log('Tender #' + n);
    //se le restara 1 y al parametro y se volvera a ejecutar  
  tenderCama(n - 1);
}

function tendida() {
    //se ejecutara el siguiente texto y saldra de la ejecucion
  console.log('tendida');
}

function hacerLaCama() {
    //esto es lo que sigue luego de la ejecucion y llama a la funcion desarrugar con el parametro
  desarrugar('forro');
    //se ejecutara igual que el anterior luego de que se ejecute
  desarrugar('sabana');
    //se ejecutara igual que el anterior luego de que se ejecute
  desarrugar('almohadas');
    //aqui se llamara a la funcion tenderCama con el parametro 1 para solo pasar 1 vez
  tenderCama(1);
   //cuando se de el ña condicion de TenderCama se llamara a la funcion tendida
  tendida();
} //final de la ejecucion
//en esta parte se comienza la ejecucion
hacerLaCama();