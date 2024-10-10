import { getDBModules } from "../services/modules.api";
import Module from "./module.class";

export default class Modules {
  constructor() {
    this.data = [];
  }
  async populate() {
    const modulos = await getDBModules();

    this.data = modulos.map(
      (item) =>
        new Module(item.code, item.cliteral, item.vliteral, item.courseId)
    );
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
