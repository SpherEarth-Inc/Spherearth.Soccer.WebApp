export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
