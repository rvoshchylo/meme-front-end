import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import DefaultLayout from "@/layouts/default";
import { useLogin } from "@/api/auth/auth.queries";
import { title } from "@/components/primitives";
import { loginSchema } from "@/schemas/login.schema";

type FormData = z.infer<typeof loginSchema>;

export default function IndexPage() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    mutate(data.username);
  };

  console.log(import.meta.env.VITE_API_URL, "assadassa");

  return (
    <DefaultLayout>
      <Form
        className="w-full max-w-sm mx-auto flex items-center flex-col gap-6 p-6 shadow-md rounded-xl dark:bg-gray-100 bg-zinc-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2
          className={`${title()} font-bold text-center text-gray-100 dark:text-zinc-800`}
        >
          Login
        </h2>

        <div className="relative w-full">
          <Input
            label="Username"
            placeholder="Enter your username"
            {...register("username")}
          />
          {errors.username && (
            <span className="absolute text-red-500 text-sm bottom-[-2] left-1">
              {errors.username.message}
            </span>
          )}
        </div>

        <Button className="w-full" isLoading={isPending} type="submit">
          Login
        </Button>
      </Form>
    </DefaultLayout>
  );
}
