"use client";
import { useState } from "react";
import { profile } from "@/content/profile";
import { trackEvent } from "@/lib/analytics/client";
import { useLanguage } from "./language-provider";
export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { copy } = useLanguage();
  return (
    <button
      className="copy-email"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(profile.email);
          setStatus("success");
          trackEvent("email_copy", { placement: "contact" });
        } catch {
          setStatus("error");
        }
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" />
        <path d="M15 9V4H4v11h5" stroke="currentColor" />
      </svg>
      <span aria-live="polite">{copy.clipboard[status]}</span>
    </button>
  );
}
