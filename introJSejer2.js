/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

let dataField = ["Nombre: ", "Edad: ", "Eres DEV? ", "Fecha Nac: ", "Libro Favorito? "];
let bookFav = "Atomic Habitis by James Clear, 2018, URL: https://jamesclear.com/atomic-habits";
let dataContent = ["Rene Massana", "41", false, "1981-10-02"];

console.log(dataField[0], dataContent[0]);
console.log(dataField[1], dataContent[1]); 
console.log(dataField[2], dataContent[2]);
console.log(dataField[3], dataContent[3]);
console.log(dataField[4], bookFav);