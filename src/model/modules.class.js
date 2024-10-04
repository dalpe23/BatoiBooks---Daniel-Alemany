import Module from "./module.class";
export default class Modules {
  constructor() {
    this.data = [];
  }
  populate(modules) {
    for (let i = 0; i < modules.length; i++) {
      this.data[i] = new Module(modules[i].code, modules[i].cliteral, modules[i].vliteral, modules[i].courseId);
    }
  }
  addModule(module) {
    const codigoNuevo = this.data.reduce((maximo, modulo) => (modulo.code > maximo ? modulo.code : maximo),0) + 1;
    let moduloAAnadir = new Module(codigoNuevo, module.cliteral, module.vliteral, module.coursecode);
    this.data.push(moduloAAnadir);
    return moduloAAnadir;
  }
  removeModule(code) {
    let moduloEncontrado = this.data.findIndex((modulo) => modulo.code === code);
    if (moduloEncontrado == -1) {
      throw "no se ha encontrado modulo";
    } else {
      let borrado = this.data.splice(moduloEncontrado, 1);
    }
  }
  changeModule(module) {
    let moduloEncontrado = this.data.findIndex(
      (modulo) => modulo.code === module.code
    );
    if (moduloEncontrado == -1) {
      throw "no se ha encontrado modulo";
    } else {
      this.data.splice(moduloEncontrado, 1, module);
      return module;
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
  getModuleByCode(codigoModulo) {
    let modulo = this.data.find((modulo) => modulo.code === codigoModulo);
    if (!modulo) {
      throw "El modulo no existe";
    } else {
      return modulo;
    }
  }
}
