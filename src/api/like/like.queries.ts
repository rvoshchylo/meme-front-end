import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toggleLike } from "./like.api";

export const useToggleLike = (memeId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => toggleLike(memeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memes"] });
    },
  });
};
