"use client";

import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const commands = [
  { label: "Hero / Profile", href: "#home" },
  { label: "Development Lab", href: "#lab" },
  { label: "Overview", href: "#overview" },
  { label: "Future Engineer", href: "#future" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog Notes", href: "#notes" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(
    () => commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <>
      <Button variant="outline" className="hidden min-w-44 justify-between text-muted-foreground sm:inline-flex" onClick={() => setOpen(true)}>
        <span className="inline-flex items-center gap-2">
          <Search className="h-4 w-4" />
          Search
        </span>
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">Ctrl K</kbd>
      </Button>
      <Button variant="outline" size="icon" className="sm:hidden" onClick={() => setOpen(true)} aria-label="Open search">
        <Search className="h-4 w-4" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle className="sr-only">Command palette</DialogTitle>
          <DialogDescription className="sr-only">Search and jump to portfolio sections.</DialogDescription>
          <div className="flex items-center gap-3 border-b pb-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search sections..."
              className="h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="mt-3 grid gap-2">
            {filtered.map((command) => (
              <a
                key={command.href}
                href={command.href}
                onClick={() => setOpen(false)}
                className="rounded-md border bg-muted/40 px-3 py-3 text-sm transition hover:border-primary/40 hover:bg-primary/10"
              >
                {command.label}
              </a>
            ))}
            {filtered.length === 0 ? <p className="px-3 py-8 text-center text-sm text-muted-foreground">No section found.</p> : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
