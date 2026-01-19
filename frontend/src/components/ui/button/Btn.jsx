"use client";

import { Loader2 } from "lucide-react";

export default function Btn({
  text,
  loadingText = "Please wait...",
  loading = false,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon: Icon,
  iconPosition = "left", // ⬅️ NEW
  fullWidth = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-2.5 rounded-lg
        font-medium
        transition-all duration-300
        active:scale-95
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
          {/* Icon on LEFT */}
          {Icon && iconPosition === "left" && <Icon size={18} />}

          <span>{text}</span>

          {/* Icon on RIGHT */}
          {Icon && iconPosition === "right" && <Icon size={18} />}
        </>
      )}
    </button>
  );
}
