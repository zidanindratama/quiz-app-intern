"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import useUserData from "@/hooks/useUserData";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

const LoginPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { userData, loading } = useUserData();

  if (userData !== null) {
    router.push("/take-quiz");
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      username: "zidan",
      password: "zidan123",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Welcome to Quizzy!",
      description: "Now you can take some quizzes",
    });
    localStorage.setItem("userData", JSON.stringify(values));
    router.push("/take-quiz");
  }

  return (
    <div className="bg-white">
      <div className="p-6 h-screen flex flex-col items-center justify-center mx-auto w-full max-w-5xl">
        <div className="grid md:grid-cols-2 gap-20 items-center w-full mx-auto">
          <div>
            <Image src={"/login.png"} alt="hero" width={500} height={500} />
          </div>
          <div className="w-full">
            <h1 className="font-bold text-3xl">Join Us Now!</h1>
            <div className="mt-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-6"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Username..." {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="*******"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button>Login</Button>
                  <div>
                    <Link href={"/"} className="underline">
                      Take me back to homepage
                    </Link>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
