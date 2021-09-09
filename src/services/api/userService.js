import http from "..";

export const login = async (body) => {
  try {
    const { data } = await http.post("login-react/login.php", {
      data: body,
    });

    return data;
  } catch (error) {
    console.log("el error es", error);
  }
};

export const create = async (form) => {
  try {
    const { data } = await http.post("inventario/db/registrar.php", {
      data: form,
    });
    return data;
  } catch (error) {
    console.log("el error es", error);
  }
};

export const getElements = async () => {
  try {
    const {data} = await http.get("inventario/db/showall.php");
    return data;
  } catch (error) {
    console.log("el error en getElements", error);
  }
};
