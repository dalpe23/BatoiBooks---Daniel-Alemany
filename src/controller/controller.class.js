import Books from "../model/books.class";
import Modules from "../model/modules.class";
import Users from "../model/users.class";
import View from "../view/view.class";

export default class Controller {
    constructor() {
        this.model = {
            modules: new Modules(),
            users: new Users(),
            books: new Books(),
        };
        this.view = new View();
    }

    async init(){
        this.view.setBookSubmitHandler(this.handleSubmitBook.bind(this))
        this.view.setBookRemoveHandler(this.handleRemoveBook.bind(this))

        try{

        await this.model.modules.populate()     //primero rellenamos
        await this.model.users.populate()
        await this.model.books.populate()

        this.view.renderModulesOptions(this.model.modules.data)     //cargamos las opciones de modulos
 
            this.model.books.data.forEach(libro => {    //renderizo por cada libro que muestre
            this.view.renderBook(libro)
        });

        } catch(error){
            this.view.renderMessage(error, 'fail')
        }
    }

    async handleSubmitBook(payload){      //me llega de la vista el objeto con datos y... 
        try {
            await this.model.books.addBook(payload)       //llamo al metodo del model y modifico la BBDD RECORDAR EL AWAIT PQ SALTA DIRECTO SINO
            //aqui no pongo metodo de la vista para actualizar pq la lista se actualiza sola en el init()
            this.view.renderMessage("Libro añadido correctamente", 'success')
        } catch (error) {
            this.view.renderMessage(error, 'fail')            
        }
        console.log(payload)
    }

    async handleRemoveBook(bookId){
        try {
            await this.model.books.removeBook(bookId)     //llamo al metodo del model y modifico la BBDD
            this.view.removeBook(bookId)            //llamo al metodo de la vista una vez va el de BBDD
            this.view.renderMessage("Se ha eliminado el libro con ID: " + bookId + " correctamente", 'success')
        } catch (error) {
            this.view.renderMessage(error, 'fail')
        }
    }
}