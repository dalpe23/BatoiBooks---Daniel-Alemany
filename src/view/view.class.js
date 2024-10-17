export default class View {
    constructor(){
        this.bookList = document.getElementById("list");
        this.bookForm = document.getElementById("bookForm")
        this.remove = document.getElementById("remove")
    }

    renderModulesOptions(modules){ //foreach que carga todas las opciones
        modules.forEach(module => {
        const option = document.createElement("option");
        option.innerHTML = module.cliteral;     
        
        const select = document.getElementById("id-module");
        select.appendChild(option);
        });
    }

    renderBook(book){   //creamos el div lo rellenamos con los datos de book y lo metemos al final de la lista
        const div = document.createElement('div')
        div.innerHTML += `<h1>Libro: ${book.id}</h1><p>Cod. Módulo: ${book.moduleCode}<p><p>Editorial: ${book.publisher}<p><p>Precio: ${book.price}<p><p>Páginas: ${book.pages}<p><p>Estado: ${book.status}<p><p>Vendido el: ${book.soldDate}<p><p>Comentarios: ${book.comments}<p>`

        this.bookList.append(div)
    }

    removeBook(bookId){ //busca en el documento el libro con la id que entra y lo elimina de la lista
        const libro = document.getElementById(bookId)
        this.bookList.remove(libro)
    }

    renderMessage(message, tipo){
        const mensajes = document.getElementById('messages')
        mensajes.innerHTML += `<div class="${tipo} alert alert-danger alert-dismissible" role="alert">  ${message}  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button></div>`
    }

    setBookSubmitHandler(callback) { //coge los datos y los manda a quien le llame(controller)
        this.bookForm.addEventListener('submit', (event) => {
           event.preventDefault()
           // a continuación recoge los datos del formulario y los guarda en un objeto 
           // por último llama a la función recibida pasándole dicho objeto
            const price = document.getElementById('price').value
            const moduleCode = document.getElementById('id-module').value
            const publisher = document.getElementById('publisher').value
            const pages = document.getElementById('pages').value
            const status = document.getElementById('status').value
            const comments = document.getElementById('comments').value

            const book = {
                publisher: publisher,
                price: price,
                moduleCode: moduleCode,
                pages: pages,
                status: status,
                comments: comments         
            }
           callback(book)
        })
       }
       
       setBookRemoveHandler(callback) {
         this.remove.addEventListener('click', () => {
            const idLibroEliminar = document.getElementById('id-remove').value
            this.removeBook(idLibroEliminar)
           // recoge la id del libro a borrar y la pasa a la fn
           callback(idLibroEliminar)
         })
       }
}