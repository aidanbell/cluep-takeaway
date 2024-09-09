"use client";
import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GoogleIcon } from "../ui/Icons";

export default function LoginForm() {
  const router = useRouter();

  return (
    <main className="flex flex-col mx-auto mt-auto mb-0 center items-center justify-center rounded-lg border overflow-hidden border-gray-300">
      <div className="w-2/5 bg-grey-100 border-lg border border-gray-300 h-4/6 p-14">
        <h2 className="text-lg">Please Log in to continue</h2>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full p-2 bg-gray-300 flex rounded-lg hover:bg-gray-400 hover:text-white transition-color duration-200">
          <GoogleIcon className="w-6 h-6 inline-block" size={24} />
          Google
        </button>
      </div>
    </main>
  );
}
