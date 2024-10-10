const SERVER = import.meta.env.VITE_URL_API;

async function getDBBooks() {
  try {
    const response = await fetch(SERVER + "/books");
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function getDBBook(code) {
  try {
    const response = await fetch(SERVER + "/books?code=" + code);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function addDBBook(book) {
  try {
    const response = await fetch(SERVER + "/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function removeDBBook(id) {
  try {
    const response = await fetch(SERVER + "/books/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function changeDBBook(book) {
  try {
    const response = await fetch(SERVER + "/books/" + book.id, {
      method: "PUT",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export { getDBBooks, getDBBook, addDBBook, removeDBBook, changeDBBook };
