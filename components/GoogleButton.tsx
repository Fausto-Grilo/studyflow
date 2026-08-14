"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function GoogleButton() {
  const [loading, setLoading] = useState(false);

  async function handleGoogleLogin() {
    setLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",

      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });

    if (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 border border-zinc-800 bg-transparent px-4 py-3 text-sm text-zinc-300 transition hover:border-[#8fbd9d] hover:bg-white/[0.02] disabled:opacity-50"
    >
      <GoogleIcon />

      {loading ? "CONNECTING..." : "CONTINUE WITH GOOGLE"}
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.93v2.79h3.14c1.84-1.7 2.92-4.2 2.92-7.75Z"
      />

      <path
        fill="#34A853"
        d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.79c-.87.58-1.99.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.88A9.75 9.75 0 0 0 12 21.75Z"
      />

      <path
        fill="#FBBC05"
        d="M6.54 13.49a5.87 5.87 0 0 1 0-3.76V6.85H3.3a9.75 9.75 0 0 0 0 9.52l3.24-2.88Z"
      />

      <path
        fill="#EA4335"
        d="M12 5.48c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 2.58 14.63 1.75 12 1.75a9.75 9.75 0 0 0-8.7 5.1l3.24 2.88C7.31 7.2 9.46 5.48 12 5.48Z"
      />
    </svg>
  );
}