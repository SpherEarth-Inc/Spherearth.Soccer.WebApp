"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { formFieldClass } from "@/components/forms/form-field-styles";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { redirectToGoogleSignIn, signInWithPassword } from "@/lib/auth/sign-in";
import { asset } from "@/lib/asset";
import { images } from "@/lib/content/assets";
import { siteConfig } from "@/lib/content/site";
import { cn } from "@/lib/utils";

const loginSchema = z.object({
  username: z.string().min(1, "Email or username is required"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean(),
});

type LoginFormData = z.infer<typeof loginSchema>;

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { remember: false },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithPassword(data);
      toast.success("Signed in successfully.");
    } catch (error) {
      if (error instanceof Error && error.message === "AUTH_NOT_CONFIGURED") {
        toast.info("Sign-in will be available once the academy portal is connected.");
        return;
      }
      toast.error("Unable to sign in. Check your email or username and password.");
    }
  });

  const handleGoogleSignIn = () => {
    try {
      redirectToGoogleSignIn();
    } catch {
      toast.info("Google sign-in will be available once the academy portal is connected.");
    }
  };

  return (
    <div className="mx-auto w-full max-w-md border bg-background p-8 shadow-sm">
      <div className="text-center">
        <AppLink href="/" className="inline-flex justify-center" aria-label={`${siteConfig.shortName} home`}>
          <Image
            src={asset(images.logo)}
            alt={siteConfig.shortName}
            width={180}
            height={48}
            className="h-11 w-auto"
            priority
          />
        </AppLink>
        <h1 className="mt-6 text-2xl font-bold uppercase md:text-3xl">Sign In</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Access the {siteConfig.shortName} portal with your academy account.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div>
          <Label htmlFor="username">Email or username</Label>
          <div className="relative mt-2">
            <User
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="username"
              type="text"
              autoComplete="username"
              className={cn(formFieldClass, "pl-10")}
              {...register("username")}
            />
          </div>
          {errors.username && (
            <p className="mt-1 text-sm text-destructive">{errors.username.message}</p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor="password">Password</Label>
            <AppLink
              href="/enquiry/"
              className="text-xs font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              Forgot password?
            </AppLink>
          </div>
          <div className="relative mt-2">
            <Lock
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              className={cn(formFieldClass, "pl-10")}
              {...register("password")}
            />
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-destructive">{errors.password.message}</p>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            className="size-4 rounded border-input accent-brand-green"
            {...register("remember")}
          />
          Remember me
        </label>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-none bg-brand-green text-base font-bold uppercase tracking-wide hover:bg-brand-green/90"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Or
        </span>
        <Separator className="flex-1" />
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={handleGoogleSignIn}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-none text-base font-semibold"
      >
        <GoogleIcon className="size-5 shrink-0" />
        Continue with Google
      </Button>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Need an account?{" "}
        <AppLink
          href="/admissions/apply/"
          className="font-semibold text-red-600 transition-colors hover:text-red-700"
        >
          Apply to the academy
        </AppLink>
        .
      </p>
    </div>
  );
}
