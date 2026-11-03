"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — no-op
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex items-center gap-3 text-foreground transition-opacity hover:opacity-70 cursor-pointer"
      aria-label="Copy email address"
    >
      <span>{email}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.18 }}
          className="flex items-center"
        >
          {copied ? (
            <Check size={22} strokeWidth={1.5} />
          ) : (
            <Copy
              size={22}
              strokeWidth={1.5}
              className="opacity-0 transition-opacity group-hover:opacity-100"
            />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
