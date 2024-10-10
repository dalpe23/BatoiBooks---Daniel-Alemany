import {
  addDBUser,
  changeDBUser,
  changeDBUserPassword,
  getDBUsers,
  removeDBUser,
} from "../services/users.api";
import User from "./user.class";

export default class Users {
  constructor() {
    this.data = [];
  }
  async populate() {
    const usuarios = await getDBUsers();

    this.data = usuarios.map(
      (item) => new User(item.id, item.nick, item.email, item.password)
    );
  }
  async addUser(user) {
    const usuario = await addDBUser(user);
    let usuarioAAnadir = new User(
      usuario.id,
      usuario.nick,
      usuario.email,
      usuario.password
    );
    this.data.push(usuarioAAnadir);
    return usuarioAAnadir;
  }
  async removeUser(id) {
    const usuario = await removeDBUser(id);
    let usuarioEncontrado = this.getUserIndexById(id);
    this.data.splice(usuarioEncontrado, 1);
    return usuario;
  }
  async changeUser(user) {
    const usuarioRM = await changeDBUser(user);
    let posicion = this.getUserIndexById(user.id);
    let usuarioNuevo = new User(
      usuarioRM.id,
      usuarioRM.nick,
      usuarioRM.email,
      usuarioRM.password
    );
    this.data.splice(posicion, 1, usuarioNuevo);
    return usuarioNuevo;
  }
  toString() {
    let cadenaVacia = "";
    this.data.forEach((element) => {
      cadenaVacia += this.data.toString();
    });
    return cadenaVacia;
  }

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
  async changeUserPassword(id, contrasenya) {
    const usuario = await changeDBUserPassword(id, contrasenya);
    let posicion = this.getUserIndexById(id);
    let usuarioNuevo = new User(
      usuario.id,
      usuario.nick,
      usuario.email,
      contrasenya
    );
    this.data.splice(posicion, 1, usuarioNuevo);
    return usuarioNuevo;
  }
}
