import { LoginForm } from "@/components/forms/login-form";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "Sign In",
  description:
    "Sign in to the SpherEarth Football Academy portal with your academy account or Google.",
  path: "/app/login/",
});

export default function AppLoginPage() {
  return (
    <section className="flex flex-1 items-center bg-muted/30 section-padding">
      <div className="container mx-auto container-padding">
        <LoginForm />
      </div>
    </section>
  );
}
