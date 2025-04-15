const authUrl = {
  login: "/auth",
};

const memesUrl = {
  getMemes: "/memes",
  updateMemes: (id: string) => `/memes/${id}`,
};

const userUrl = {
  getUser: "/user",
};

const likeUrl = {
  like: (id: string) => `/like/${id}/like`,
};

export const requestUrl = {
  authUrl,
  memesUrl,
  userUrl,
  likeUrl,
};
