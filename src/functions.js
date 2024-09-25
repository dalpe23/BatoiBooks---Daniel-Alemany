function getBookById(arrayLibro, idLibro) {
   
      let libroADevolver = arrayLibro.find(libro => libro.id  === idLibro);
     if(!libroADevolver){
      throw 'El libro no existe';
     } else {
     return libroADevolver;
     }
   }

export {
   getBookById

}