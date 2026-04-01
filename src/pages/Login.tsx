import { z } from "zod";
import { Button, Input } from "../components/ui";
import { useAuthStore } from "../store/auth.store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().min(3, "Min 3 chars"),
  password: z.string().min(3, "Min 3 chars"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const setToken = useAuthStore((s) => s.setToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setToken("access_token_demo", "refresh_token_demo");
  };

  return (
    <div className="flex w-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 flex flex-col gap-2   justify-start bg-white"
      >
        <Input {...register("username")} placeholder="Username" />
        <p>{errors.username?.message}</p>

        <Input {...register("password")} placeholder="Password" />
        <p>{errors.password?.message}</p>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
