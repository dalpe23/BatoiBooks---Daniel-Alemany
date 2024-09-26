import './style.css'
import data from './src/services/datos';
import * as funciones from './src/functions'

document.querySelector('#app').innerHTML = `
  <div>
      <img src="./public/logoBatoi.png" class="logo" alt="Vite logo" />
    </a>
    <h1>BatoiBooks</h1>
    <p>
      Abre la consola para ver el resultado
    </p>
  </div>
`

let librosUsuario4 = funciones.booksFromUser(data.books, 4);
console.log(librosUsuario4);

let librosModulo5021 = funciones.booksFromModule(data.books, "5021");
let librosModulo5021Good = funciones.booksWithStatus(librosModulo5021, "good");

console.log(librosModulo5021Good);
funciones.averagePriceOfBooks(data.books);
