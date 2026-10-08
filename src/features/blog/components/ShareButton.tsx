"use client";

import { useState } from "react";
import { TbLink, TbCheck } from "react-icons/tb";

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled the native share sheet, fall through to copy
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable, silently do nothing
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center gap-1.5 text-xs text-s-color/70 hover:text-sky-500 transition-colors"
    >
      {copied ? <TbCheck size={14} /> : <TbLink size={14} />}
      {copied ? "Copied" : "Share"}
    </button>
  );
}