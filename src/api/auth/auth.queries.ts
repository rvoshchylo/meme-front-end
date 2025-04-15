import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login } from "./auth.api";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (username: string) => {
      const response = await login(username);

      return response.data;
    },
    onSuccess: () => {
      navigate("/table");
    },
  });
};
