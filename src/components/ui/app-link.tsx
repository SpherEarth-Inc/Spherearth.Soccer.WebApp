import type { ComponentProps, ReactNode } from "react";

type AppLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  children: ReactNode;
};

/** Plain anchor for static export — avoids client router issues on Apache/cPanel hosts. */
export function AppLink({ href, children, ...props }: AppLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
