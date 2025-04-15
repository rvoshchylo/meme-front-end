import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, "Too short").max(32, "Too long"),
});
