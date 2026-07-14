"use client";

interface ScrollToLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
}

export function ScrollToLink({ targetId, children, className, onNavigate }: ScrollToLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (onNavigate) {
      onNavigate();
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
