import Book from "./book.class"
const NOTES = "Apunts";
export default class Books {
    constructor() {
        this.data = []
    }
    populate(array) {
        for(let i = 0; i < array.length; i++) {
            this.data[i] = new Book(array[i]);
        }
    }
    addBook(book) {
        const nuevaId = this.data.reduce((maximo, libro) => (libro.id > maximo ? libro.id : maximo),0) + 1;
        let libroAAnadir = new Book({...book, id: nuevaId});
        this.data.push(libroAAnadir);
        return libroAAnadir;
      }
      removeBook(id) {
        let libroEncontrado = this.data.findIndex((libro) => libro.id === id);
        if (libroEncontrado == -1) {
          throw "no se ha encontrado el libro";
        } else {
          let borrado = this.data.splice(libroEncontrado, 1);
        }
      }
      changeBook(book) {
        let libroEncontrado = this.data.findIndex(
          (libro) => libro.id === book.id
        );
        if (libroEncontrado == -1) {
          throw "no se ha encontrado el libro";
        } else {
          this.data.splice(libroEncontrado, 1, book);
          return book;
        }
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
    
    bookExists( userId, moduleCode) {
        let libro = this.data.find((libro) => libro.userId === userId && libro.moduleCode === moduleCode);
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
        let totalPrecio = this.data.reduce((total, libro) => (total += libro.price), 0);
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
    
    incrementPriceOfbooks(percentatge) {
        return this.data.map((libro) => ({...libro, price: Math.round(libro.price * (1 + percentatge) * 100) / 100}));
    }

}
