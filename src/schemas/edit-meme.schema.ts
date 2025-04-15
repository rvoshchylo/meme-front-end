import { z } from "zod";

export const editMemeSchema = z.object({
  name: z
    .string()
    .min(3, "Name is too short")
    .max(100, "Name is too long")
    .regex(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"),

  image: z
    .string()
    .url("Invalid image URL")
    .refine((val) => /\.jpg$/i.test(val.split("?")[0]), {
      message: "Image must end with .jpg",
    }),

  likes: z.coerce.number().min(0).max(99),
  id: z.string(),
});

export type EditMemeSchema = z.infer<typeof editMemeSchema>;
