import {
  changeDBBook,
  getDBBooks,
  removeDBBook,
  addDBBook,
} from "../services/books.api";
import Book from "./book.class";
const NOTES = "Apunts";

export default class Books {
  constructor() {
    this.data = [];
  }
  async populate() {
    const libros = await getDBBooks();

    this.data = libros.map((item) => new Book(item)); //por el constructor de book que es distinto
  }
  async addBook(book) {
    const libro = await addDBBook(book);
    let libroNuevo = new Book(libro);
    this.data.push(libroNuevo);
    return libroNuevo;
  }
  async removeBook(id) {
    let libro = await removeDBBook(id);
    let posicion = this.getBookIndexById(id);
    this.data.splice(posicion, 1);
  }
  async changeBook(book) {
    const libroRM = await changeDBBook(book);
    let posicion = this.getBookIndexById(book.id);
    let libroNuevo = new Book(book);
    this.data.splice(posicion, 1, libroNuevo);
    return libroNuevo;
  }
  toString() {
    let cadenaVacia = "";
    this.data.forEach((element) => {
      cadenaVacia += this.data.toString();
    });
    return cadenaVacia;
  }

  getBookById(number) {
    let libro = this.data.find((libro) => libro.id === number);
    if (!libro) {
      throw "No existe ningún libro con ese ID.";
    }
    return libro;
  }

  getBookIndexById(number) {
    let libro = this.data.findIndex((libro) => libro.id === number);
    if (libro === -1) {
      throw "No existe ningún libro con ese ID.";
    }
    return libro;
  }

  bookExists(userId, moduleCode) {
    let libro = this.data.find(
      (libro) => libro.userId === userId && libro.moduleCode === moduleCode
    );
    if (libro) {
      return true;
    }
    return false;
  }

  booksFromUser(userId) {
    let libros = this.data.filter((libro) => libro.userId === userId);
    if (!libros) {
      throw "Este usuario no tiene ningún libro.";
    }
    return libros;
  }

  booksFromModule(moduleCode) {
    let libros = this.data.filter((libro) => libro.moduleCode === moduleCode);
    if (!libros) {
      throw "No existe ningún libro con este código de módulo.";
    }
    return libros;
  }

  booksCheeperThan(price) {
    let libros = this.data.filter((libro) => libro.price <= price);
    if (!libros) {
      throw "No existen libros con un precio menor que " + price + ".";
    }
    return libros;
  }

  booksWithStatus(status) {
    let libros = this.data.filter((libro) => libro.status === status);
    if (!libros) {
      throw "No existen libros en este estado.";
    }
    return libros;
  }

  averagePriceOfBooks() {
    let totalPrecio = this.data.reduce(
      (total, libro) => (total += libro.price),
      0
    );
    let media = totalPrecio / this.data.length;
    if (this.data.length === 0) {
      return "0.00 €";
    }
    return media.toFixed(2) + " €";
  }

  booksOfTypeNotes() {
    let libros = this.data.filter((libro) => libro.publisher === NOTES);
    if (!libros) {
      throw "No hay ningún libro de apuntes.";
    }
    return libros;
  }

  booksNotSold() {
    let libros = this.data.filter((libro) => libro.soldDate === "");
    if (!libros) {
      throw "Todos los libros han sido vendidos.";
    }
    return libros;
  }
}
