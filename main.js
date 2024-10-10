import './style.css'
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
await libros.populate()

let modulos = new Modules()
await modulos.populate()

let usuarios = new Users()
await usuarios.populate();

console.log(libros.booksFromModule("5021"))
console.log(libros.booksWithStatus("new"))
