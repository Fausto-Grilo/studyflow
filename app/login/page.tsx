"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";
import GoogleButton from "@/components/GoogleButton";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080d11] px-6 text-[#e8e8e8]">

        <Navbar/>
      <div className="w-full max-w-md border border-zinc-800 bg-[#0b1116] p-8 sm:p-10 mt-10">

        <Link
          href="/"
          className="text-lg font-medium tracking-wider"
        >
          STUDYFLOW<span className="text-[#8fbd9d]">_</span>
        </Link>

        <div className="mt-12 mb-5">
          <p className="text-xs tracking-widest text-[#8fbd9d]">
            // WELCOME BACK
          </p>

          <h1 className="mt-4 text-3xl tracking-tight">
            Sign in to your account.
          </h1>
        </div>

        <GoogleButton />

        <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />

        <span className="text-[10px] text-zinc-600">
            OR CONTINUE WITH EMAIL
        </span>

        <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <form onSubmit={handleLogin} className="">
        {/* Your existing login fields */}
        </form>

        <form
          onSubmit={handleLogin}
          className="mt-5 space-y-5"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs text-zinc-400"
            >
              EMAIL
            </label>

            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-zinc-800 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-zinc-700 focus:border-[#8fbd9d]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-xs text-zinc-400"
            >
              PASSWORD
            </label>

            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-zinc-800 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-zinc-700 focus:border-[#8fbd9d]"
            />
          </div>

          {error && (
            <p className="border border-red-900/50 bg-red-950/20 p-3 text-xs text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full border border-[#8fbd9d] bg-[#8fbd9d] px-4 py-3 text-sm text-[#080d11] transition hover:bg-transparent hover:text-[#8fbd9d] disabled:opacity-50"
          >
            {loading ? "SIGNING IN..." : "SIGN IN →"}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-zinc-500">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-[#8fbd9d] hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}