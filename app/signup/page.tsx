"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar";
import GoogleButton from "@/components/GoogleButton";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();
  const router = useRouter();

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
        data: {
        name,
        },
    },
    });

    if (error) {
    setError(error.message);
    setLoading(false);
    return;
    }

    router.push("/dashboard");
    router.refresh();

    setMessage(
      "Account created! Check your email to confirm your account."
    );

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080d11] px-6 py-12 text-[#e8e8e8]">

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
            // CREATE ACCOUNT
          </p>

          <h1 className="mt-4 text-3xl tracking-tight">
            Start your study flow.
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Create an account and start organizing your academic life.
          </p>
        </div>

        <GoogleButton />

        <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />

        <span className="text-[10px] text-zinc-600">
            OR CONTINUE WITH EMAIL
        </span>

        <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <form
          onSubmit={handleSignup}
          className="mt-5 space-y-5"
        >
          {/* NAME */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs text-zinc-400"
            >
              NAME
            </label>

            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full border border-zinc-800 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-zinc-700 focus:border-[#8fbd9d]"
            />
          </div>

          {/* EMAIL */}
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

          {/* PASSWORD */}
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

          {/* CONFIRM PASSWORD */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-xs text-zinc-400"
            >
              CONFIRM PASSWORD
            </label>

            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-zinc-800 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-zinc-700 focus:border-[#8fbd9d]"
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="border border-red-900/50 bg-red-950/20 p-3 text-xs text-red-400">
              {error}
            </p>
          )}

          {/* SUCCESS */}
          {message && (
            <p className="border border-[#8fbd9d]/30 bg-[#8fbd9d]/10 p-3 text-xs text-[#8fbd9d]">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full border border-[#8fbd9d] bg-[#8fbd9d] px-4 py-3 text-sm text-[#080d11] transition hover:bg-transparent hover:text-[#8fbd9d] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "CREATING ACCOUNT..."
              : "CREATE ACCOUNT →"}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#8fbd9d] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}