"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-background"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative h-24 w-24 rounded-lg border bg-card shadow-glow">
            <motion.div
              className="absolute inset-3 rounded-md bg-primary"
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 0.86, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 grid place-items-center font-mono text-xs font-bold text-primary-foreground">
              A1
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
