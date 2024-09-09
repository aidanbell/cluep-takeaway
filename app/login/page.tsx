"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GoogleIcon } from "../ui/Icons";

export default function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <main className="flex mx-auto mt-auto mb-0 center items-center justify-center rounded-lg border overflow-hidden border-gray-300">
      <button onClick={() => signIn("google", { callbackUrl: "/" })} className="w-full p-2 bg-gray-300 rounded-lg hover:bg-gray-400 hover:text-white transition-color duration-200">
        <GoogleIcon className="w-6 h-6" size={24} />
        Log in with Google
      </button>
    </main>
  );
}
