"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin h-6 w-6 border-2 border-white/20 border-t-white rounded-full" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    try {
      if (isSignUp) {
        await signup(formData);
      } else {
        await login(formData);
      }
    } catch {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Subtle background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] mb-6">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-400"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>
          <h1 className="text-[28px] font-semibold text-white tracking-tight">
            Trading Journal
          </h1>
          <p className="text-zinc-500 text-sm mt-2">
            {isSignUp
              ? "Create an account to start tracking"
              : "Welcome back. Sign in to continue."}
          </p>
        </div>

        {/* Error / Success Messages */}
        {error && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
            {decodeURIComponent(error)}
          </div>
        )}

        {message && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center">
            {decodeURIComponent(message)}
          </div>
        )}

        {/* Login Form */}
        <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-8">
          <form action={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-zinc-400 text-sm font-normal"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  required={isSignUp}
                  className="h-11 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-600 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 transition-colors"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-zinc-400 text-sm font-normal"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="h-11 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-600 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-zinc-400 text-sm font-normal"
              >
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                minLength={6}
                className="h-11 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-zinc-600 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-white text-black font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-25"
                    />
                    <path
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      fill="currentColor"
                      className="opacity-75"
                    />
                  </svg>
                  {isSignUp ? "Creating account..." : "Signing in..."}
                </span>
              ) : isSignUp ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.06]" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-zinc-950 px-3 text-zinc-600">
                {isSignUp ? "Already have an account?" : "New to Trading Journal?"}
              </span>
            </div>
          </div>

          {/* Toggle Sign Up / Sign In */}
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsSignUp(!isSignUp)}
            className="w-full h-11 bg-transparent border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.04] hover:border-white/[0.12] transition-colors cursor-pointer"
          >
            {isSignUp ? "Sign In Instead" : "Create an Account"}
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-700 text-xs mt-8">
          Your data stays private. 100% secure with Supabase Auth.
        </p>
      </div>
    </div>
  );
}
