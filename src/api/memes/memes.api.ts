import { requestUrl } from "../requestUrls";
import { api } from "../axiosInstance";

import { to } from "@/utils/to";
import { UpdateMeme } from "@/types/meme";

export const getMemes = async () => {
  const [err, res] = await to(api.get(requestUrl.memesUrl.getMemes));

  if (err || !res) {
    throw new Error(err?.message || "Failed to get memes");
  }

  return res.data;
};

export const updateMemes = async (id: string, data: UpdateMeme) => {
  const [err, res] = await to(
    api.patch(requestUrl.memesUrl.updateMemes(id), data),
  );

  if (err || !res) {
    throw new Error(err?.message || "Failed to update memes");
  }

  return res.data;
};
