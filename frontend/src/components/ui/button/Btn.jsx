"use client";

import { Loader2 } from "lucide-react";

export default function Btn({
  text = "Submit",
  loadingText = "Please wait...",
  loading = false,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
}) {
  const isDisabled = loading || disabled;

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      aria-disabled={isDisabled}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-2.5 rounded-lg
        font-medium
        transition-all duration-300
        active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === "left" && <Icon size={18} />}
          <span>{text}</span>
          {Icon && iconPosition === "right" && <Icon size={18} />}
        </>
      )}
    </button>
  );
}
