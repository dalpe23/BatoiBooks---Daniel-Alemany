import User from "./user.class";
export default class Users {
  constructor() {
    this.data = [];
  }
  populate(users) {
    for (let i = 0; i < users.length; i++) {
      this.data[i] = new User(users[i].id, users[i].nick, users[i].email, users[i].password);
    }
  }
  addUser(user) {
    const idNueva = this.data.reduce((maximo, usuario) => (usuario.id > maximo ? usuario.id : maximo),0) + 1;
    let usuarioAAnadir = new User(idNueva, user.nick, user.email, user.password);
    this.data.push(usuarioAAnadir);
    return usuarioAAnadir;
  }
  removeUser(id) {
    let usuarioEncontrado = this.data.findIndex((usuario) => usuario.id === id);
    if (usuarioEncontrado == -1) {
      throw "no se ha encontrado usuario";
    } else {
      let borrado = this.data.splice(usuarioEncontrado, 1);
    }
  }
  changeUser(user) {
    let usuarioEncontrado = this.data.findIndex(
      (usuario) => usuario.id === user.id
    );
    if (usuarioEncontrado == -1) {
      throw "no se ha encontrado usuario";
    } else {
      this.data.splice(usuarioEncontrado, 1, user);
      return user;
    }
  }
  toString() {
    let cadenaVacia = "";
    this.data.forEach((element) => {
      cadenaVacia += this.data.toString();
    });
    return cadenaVacia;
  }
  //en las funciones me quito el array de datos y el parametro de este, y llamo directamente dentro a this.data
  getUserById(idUsuario) {
    let usuario = this.data.find((usuario) => usuario.id === idUsuario);
    if (!usuario) {
      throw "El usuario no existe";
    } else {
      return usuario;
    }
  }

  getUserIndexById(idUsuario) {
    let usuario = this.data.findIndex((usuario) => usuario.id === idUsuario);
    if (usuario === -1) {
      throw "El usuario no existe";
    } else {
      return usuario;
    }
  }

  getUserByNickName(nombre) {
    let usuario = this.data.find((usuario) => usuario.nick === nombre);
    if (!usuario) {
      throw "El usuario no existe";
    } else {
      return usuario;
    }
  }
}
