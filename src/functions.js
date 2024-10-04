//(funciones corregidas en otro fichero)
function getBookById(arrayLibro, idLibro) {
  let libroADevolver = arrayLibro.find((libro) => libro.id === idLibro);
  if (!libroADevolver) {
    throw "El libro no existe";
  } else {
    return libroADevolver;
  }
}

function getBookIndexById(arrayLibro, idLibro) {
  let libroADevolver = arrayLibro.findIndex((libro) => libro.id === idLibro);
  if (libroADevolver === -1) {
    throw "El libro no existe";
  } else {
    return libroADevolver;
  }
}

function bookExists(arrayLibro, idUsuario, numeroModulo) {
  let libro = arrayLibro.find(
    (libro) => libro.userId === idUsuario && libro.moduleCode === numeroModulo
  );
  if (!libro) {
    return false;
  } else {
    return true;
  }
}

function booksFromUser(arrayLibro, idUsuario) {
  let libroADevolver = arrayLibro.filter((libro) => libro.userId === idUsuario);
  if (!libroADevolver) {
    throw "El libro no existe";
  } else {
    return libroADevolver;
  }
}

function booksFromModule(arrayLibro, codigoModulo) {
  let libroADevolver = arrayLibro.filter(
    (libro) => libro.moduleCode === codigoModulo
  );
  if (!libroADevolver) {
    throw "El libro no existe";
  } else {
    return libroADevolver;
  }
}

function booksCheeperThan(arrayLibro, precio) {
  let libroADevolver = arrayLibro.filter((libro) => libro.price <= precio);
  if (!libroADevolver) {
    throw "El libro no existe";
  } else {
    return libroADevolver;
  }
}

function booksWithStatus(arrayLibro, estado) {
  let libroADevolver = arrayLibro.filter((libro) => libro.status === estado);
  if (!libroADevolver) {
    throw "El libro no existe";
  } else {
    return libroADevolver;
  }
}

function averagePriceOfBooks(arrayLibro) {
  let precioADevolver = arrayLibro.reduce(
    (total, libro) => (total += libro.price),
    0
  );
  let mediaPrecio = precioADevolver / arrayLibro.length;
  if (arrayLibro.length === 0) {
    return "0.00 €";
  } else {
    return mediaPrecio.toFixed(2) + " €";
  }
}

function booksOfTypeNotes(arrayLibro) {
  let apuntes = arrayLibro.filter((libro) => libro.publisher == "Apunts");
  if (!apuntes) {
    throw "El libro no existe";
  } else {
    return apuntes;
  }
}

function booksNotSold(arrayLibro) {
  let librosNoVendidos = arrayLibro.filter((libro) => libro.soldDate == "");
  if (!librosNoVendidos) {
    throw "El libro no existe";
  } else {
    return librosNoVendidos;
  }
}

function incrementPriceOfbooks(arrayLibro, porcentaje) {
  return arrayLibro.map((libro) => ({
    ...libro, price: Math.round(libro.price * (1 + porcentaje) * 100) / 100
  }));
}

function getUserById(arrayUsuarios, idUsuario) {
  let usuario = arrayUsuarios.find((usuario) => usuario.id === idUsuario);
  if (!usuario) {
    throw "El usuario no existe";
  } else {
    return usuario;
  }
}

function getUserIndexById(arrayUsuarios, idUsuario) {
  let usuario = arrayUsuarios.findIndex((usuario) => usuario.id === idUsuario);
  if (usuario === -1) {
    throw "El usuario no existe";
  } else {
    return usuario;
  }
}

function getUserByNickName(arrayUsuarios, nombre) {
  let usuario = arrayUsuarios.find((usuario) => usuario.nick === nombre);
  if (!usuario) {
    throw "El usuario no existe";
  } else {
    return usuario;
  }
}

function getModuleByCode(arrayModulos, codigoModulo) {
  let modulo = arrayModulos.find((modulo) => modulo.code === codigoModulo);
  if (!modulo) {
    throw "El modulo no existe";
  } else {
    return modulo;
  }
}

export {
  getBookById,
  getBookIndexById,
  bookExists,
  booksFromUser,
  booksFromModule,
  booksCheeperThan,
  booksWithStatus,
  averagePriceOfBooks,
  booksOfTypeNotes,
  booksNotSold,
  incrementPriceOfbooks,
  getUserById,
  getUserIndexById,
  getUserByNickName,
  getModuleByCode,
};
