const SERVER = import.meta.env.VITE_URL_API;

async function getDBUsers() {
  try {
    const response = await fetch(SERVER + "/users");
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function getDBUser(code) {
  try {
    const response = await fetch(SERVER + "/users?id=" + code);
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function addDBUser(user) {
  try {
    const response = await fetch(SERVER + "/users", {
      method: "POST",
      body: JSON.stringify(user),
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

async function removeDBUser(id) {
  try {
    const response = await fetch(SERVER + "/users/" + id, {
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

async function changeDBUser(user) {
  try {
    const response = await fetch(SERVER + "/users/" + user.id, {
      method: "PUT",
      body: JSON.stringify(user),
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

async function changeDBUserPassword(id, contrasenya) {
    try {
        const response = await fetch(SERVER + "/users/" + id, {
          method: "PATCH",
          body: JSON.stringify({password: contrasenya}),
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

export {
  getDBUsers,
  getDBUser,
  addDBUser,
  removeDBUser,
  changeDBUser,
  changeDBUserPassword,
};
