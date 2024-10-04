import './style.css'
import data from './src/services/datos';
import Books from './src/model/books.class.js';
import Modules from './src/model/modules.class';
import Users from './src/model/users.class';

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
let libros = new Books()
libros.populate(data.books)

let modulos = new Modules()
modulos.populate(data.modules)

let usuarios = new Users()
usuarios.populate(data.users);

console.log(libros.booksFromModule("5021"))
console.log(libros.booksWithStatus("new"))
console.log(libros.incrementPriceOfbooks(0.1));