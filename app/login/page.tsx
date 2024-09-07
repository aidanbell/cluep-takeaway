"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      redirect: false,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    if (res?.error) {
      setErrorMessage(res.error as string);
      console.error(res.error as string);
    } else if (res?.ok) {
      router.push("/");
    }
  }

  return (
    <main className="flex mx-auto mt-auto mb-0 center items-center justify-center rounded-lg border overflow-hidden border-gray-300">
      <form onSubmit={handleSubmit} className="space-y-3 flex flex-col relative w-1/2">
        <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                autoComplete="off"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <button className="mt-4 p-2 w-full bg-gray-300 rounded-lg hover:bg-gray-400 hover:text-white transition-color duration-200">Log in</button>
        <div className="flex h-8 items-end space-x-1">
          {errorMessage && (
            <>
              <p className="text-red-500 text-sm">{errorMessage}</p>
            </>
          )}
        </div>
      </form>
    </main>
  );
}
