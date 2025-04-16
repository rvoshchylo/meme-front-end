import { z } from "zod";

export const editMemeSchema = z.object({
  name: z
    .string()
    .min(3, "Name is too short")
    .max(100, "Name is too long")
    .regex(/^[A-Za-z0-9\s]+$/, "Name must contain only letters and spaces"),

  image: z
    .string()
    .url("Invalid image URL")
    .refine((val) => val.startsWith("https://") && /\.jpg/i.test(val), {
      message: "URL must start with https:// and contain .jpg",
    }),

  likes: z.coerce.number().min(0).max(99),
  id: z.string(),
});

export type EditMemeSchema = z.infer<typeof editMemeSchema>;
