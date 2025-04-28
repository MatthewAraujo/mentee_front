import Cookies from "js-cookie";

export const saveToken = (token: string, expiresIn: number = 7) => {
  Cookies.set("token", token, { expires: expiresIn, path: "/" });
};

export const getToken = (): string | undefined => {
  return Cookies.get("token");
};

export const removeToken = () => {
  Cookies.remove("token", { path: "/" });
};

