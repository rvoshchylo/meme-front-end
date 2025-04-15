import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getMemes, updateMemes } from "./memes.api";

import { UpdateMeme } from "@/types/meme";

export const useGetMemes = () => {
  return useQuery({
    queryKey: ["memes"],
    queryFn: async () => {
      const res = await getMemes();

      return res;
    },
  });
};

export const useUpdateMeme = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateMeme }) => {
      const res = await updateMemes(id, data);

      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memes"] });
    },
  });
};
