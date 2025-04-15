export interface UpdateMeme {
  image?: string;
  name?: string;
}

export interface Meme {
  id: string;
  name: string;
  image: string;
  likes: number;
  createdAt: string;
  isLiked: boolean;
}
