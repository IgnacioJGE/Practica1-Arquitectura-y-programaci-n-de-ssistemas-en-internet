let palabras = [
  "sinuoso",
  "platano",
  "finalizar",
  "piedra",
  "exterior",
  "irritable",
];
const Palabraseparada = (entrada: string[]): string => {
  let palabra: string = ""; //creo la palabra que voy a devolver
  palabras = palabras.sort(); //ordeno el array
  const chars = palabras[0].split(""); // divido en caracteres la primera palabra del arrayt ordenado
  for (let i: number = 0; i < (chars.length); i++) {
    if (i == (chars.length - 1)) { //creo este caso para que no haya ningún espacio al final
      palabra = palabra + chars[i];
    } else {
      palabra = palabra + chars[i] + " "; // concateno mi palabra con los caracteres de la palabra y espacios entre medias
    }
  }
  return palabra;
};
console.log(Palabraseparada(palabras));
