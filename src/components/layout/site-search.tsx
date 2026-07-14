"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchEntries } from "@/lib/content/pages/search-index";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = query.trim()
    ? searchEntries.filter((entry) => {
        const q = query.toLowerCase();
        return (
          entry.title.toLowerCase().includes(q) ||
          entry.excerpt.toLowerCase().includes(q) ||
          entry.keywords?.some((k) => k.toLowerCase().includes(q))
        );
      })
    : [];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setOpen((v) => !v);
    }
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-50 flex size-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition-transform hover:scale-105"
        aria-label="Search site"
      >
        <Search className="size-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 p-4 pt-[10vh]">
      <div className="w-full max-w-lg rounded-none bg-background shadow-2xl">
        <div className="flex items-center gap-2 border-b p-4">
          <Search className="size-5 text-muted-foreground" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages... (Ctrl+K)"
            className="h-10 flex-1 rounded-none border-0 shadow-none focus-visible:ring-0"
          />
          <button
            type="button"
            onClick={() => { setOpen(false); setQuery(""); }}
            aria-label="Close search"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {query.trim() === "" && (
            <li className="p-4 text-center text-sm text-muted-foreground">
              Type to search academy pages
            </li>
          )}
          {query.trim() !== "" && results.length === 0 && (
            <li className="p-4 text-center text-sm text-muted-foreground">No results found</li>
          )}
          {results.map((entry) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                onClick={() => { setOpen(false); setQuery(""); }}
                className={cn(
                  "block rounded-md px-4 py-3 transition-colors hover:bg-muted"
                )}
              >
                <span className="font-semibold">{entry.title}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground line-clamp-2">
                  {entry.excerpt}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
