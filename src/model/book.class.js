export default class Book {
constructor(book){
    this.id = book.id
    this.userId = book.userId
    this.moduleCode = book.moduleCode
    this.publisher = book.publisher
    this.price = book.price
    this.pages = book.pages
    this.status = book.status
    this.photo = book.photo || ""
    this.comments = book.comments || ""
    this.soldDate = book.soldDate || ""
}    
toString(){
    return this.id + ', ' + this.userId + ', ' + this.publisher + ', ' + this.price + ', ' + this.pages + ', ' + this.status + ', ' + this.photo + ', ' + this.comments + ', ' + this.soldDate
}
}