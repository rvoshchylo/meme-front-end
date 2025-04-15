import Cookies from "js-cookie";

export const setTokenFromResponse = (accessToken: string) => {
  Cookies.set("accessToken", accessToken);
};

export const removeTokens = () => {
  Cookies.remove("accessToken");
};
