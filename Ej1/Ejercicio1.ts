const numeros: number[] = [
  2,
  5,
  67,
  89,
  23,
  56,
  345,
  234,
  556,
  7,
  875,
  9,
  8,
  0,
  123,
  234,
  546,
  98,
  124,
];
export const quickSort = (numeros: number[]): number[] => {
  if (numeros.length == 0) return []; // cuando ya no hay numeros mayores o menores devuelvo el array vacío y que no concatene nada
  const mayores: number[] = []; //creo dos arrays para guardar los numeros mayores y menores que el pivote
  const menores: number[] = [];
  const exit: number[] = [];
  for (let i: number = 1; i < numeros.length; i++) { //recorro el array y hago un push dependiendo de si son mayores o menores que el pivote
    if (numeros[0] > numeros[i]) {
      menores.push(numeros[i]);
    } else {
      mayores.push(numeros[i]);
    }
  }
  return exit.concat(quickSort(mayores)).concat(numeros[0]).concat(
    quickSort(menores),
  ); //concateno la llamada recursiva de mayores y menores con el pivote en el centro
};
console.log(quickSort(numeros));
