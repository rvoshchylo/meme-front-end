import { api } from "../axiosInstance";
import { requestUrl } from "../requestUrls";

import { setTokenFromResponse } from "@/utils/tokens";
import { to } from "@/utils/to";

export const login = async (username: string) => {
  const [err, res] = await to(
    api.post(requestUrl.authUrl.login, { name: username }),
  );

  if (err || !res) {
    throw new Error(err?.message || "Failed to sign in");
  }
  const { accessToken } = res.data;

  setTokenFromResponse(accessToken);

  return res.data;
};
