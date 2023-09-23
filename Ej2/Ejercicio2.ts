const entrada: number = 10;

const multiplos = (entrada: number): number[] => {
  const arrayfinal: number[] = [];
  for (let i: number = 0; i <= entrada; i++) { // recorro el array comprobando si los números del 0 a entrada son multiplos de 3 o 5
    if (i % 5 == 0 || i % 3 == 0) arrayfinal.push(i);
  }
  return arrayfinal;
};

console.log(multiplos(entrada));
 