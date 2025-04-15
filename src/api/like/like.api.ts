import { api } from "../axiosInstance";
import { requestUrl } from "../requestUrls";

import { to } from "@/utils/to";

export const toggleLike = async (memeId: string) => {
  const [err, res] = await to(api.post(requestUrl.likeUrl.like(memeId)));

  if (err || !res) {
    throw new Error(err?.message || "Failed to like meme");
  }

  return res.data;
};
