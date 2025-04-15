import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Too short")
    .max(32, "Too long")
    .regex(
      /^[A-Za-z0-9]+$/,
      "Only letters and numbers are allowed, no spaces or symbols",
    ),
});
