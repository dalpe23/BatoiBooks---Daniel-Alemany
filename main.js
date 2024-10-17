import "./style.css";
import batoiLogo from "/logoBatoi.png";
import Controller from "./src/controller/controller.class";

document.querySelector("#app").innerHTML = `
  <header>
    <img src="${batoiLogo}" alt="Logo Batoi" />
    <h1>BatoiBooks</h1>
    <h3>Control de libros</h3>
    </header>

    <nav>
      <ul>
        <li><a href="#list">Ver Libros</a></li>
        <li><a href="#form">Añadir Libro</a></li>
        <li><a href="#about">Acerca de...</a></li>
      </ul>
    </nav>
    <div id="messages"></div>
    <div>
    <div id="list"></div>
    <div id="form>
    <div>
      <label for="id-remove">Id:</label>
      <input type="number" id="id-remove">
      <button id="remove">Borrar libro</button>
    </div>

    <form id="bookForm">
      <div>
        <label for="id-module">Módulo:</label>
        <select id="id-module">
          <option>- Selecciona un módulo -</option>
        </select>
      </div>

      <div>
        <label for="publisher">Editorial:</label>
        <input type="text" id="publisher" required>
      </div>

      <div>
        <label for="price">Precio:</label>
        <input type="number" id="price">
      </div>

      <div>
        <label for="pages">Páginas:</label>
        <input type="number" id="pages">
      </div>

        <div>
            <label>Estado:</label>
            <label for="good">
            <input type="radio" id="status" name="estado" value="good">Good</label>
            <label for="new">
            <input type="radio" id="status" name="estado" value="new">New</label>
            <label for="bad">
            <input type="radio" id="status" name="estado" value="bad">Bad</label>
          </div>

      <div>
        <label for="comments">Comentarios:</label>
        <textarea id="comments"></textarea>
      </div>

      <button type="submit">Añadir</button>
      <button type="reset">Reset</button>

    </form>
    <br>

    <div id="about"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sunt ratione, delectus sequi nihil cupiditate blanditiis quia dolorum saepe consequuntur, possimus expedita ex rem vero ducimus autem qui dolore nisi?</p></div>
    
    </div>

    <footer>
    Daniel Alemany
    </footer>
   
  
`;
document.addEventListener("DOMContentLoaded", () => {
  const myController = new Controller();
  myController.init();
});
