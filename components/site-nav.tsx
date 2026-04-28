"use client";

import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { CommandPalette } from "@/components/command-palette";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  ["Lab", "#lab"],
  ["Overview", "#overview"],
  ["Future", "#future"],
  ["Stack", "#stack"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export function SiteNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-3 z-40 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <nav className="flex items-center justify-between gap-3 rounded-lg border bg-card/75 p-2 shadow-soft backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-2 rounded-md px-2 py-1.5 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="hidden sm:block">Abde1 Design</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <CommandPalette />
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
