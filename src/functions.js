function getBookById(arrayLibro, idLibro) {
   
      let libroADevolver = arrayLibro.find(libro => libro.id  === idLibro);
     if(!libroADevolver){
      throw 'El libro no existe';
     } else {
     return libroADevolver;
     }
   }

function getBookIndexById(arrayLibro, idLibro) {
   
      let libroADevolver = arrayLibro.findIndex(libro => libro.id  === idLibro);
     if(libroADevolver === -1){
      throw 'El libro no existe';
     } else {
     return libroADevolver;
     }
}

export {
   getBookById,
   getBookIndexById

}