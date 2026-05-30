import React from "react";
import { cn } from "../../lib/utils.js";

export function Button({
  className = "",
  variant = "default",
  type = "button",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-[#111] text-white hover:bg-black/80",
    outline:
      "border border-black/20 bg-transparent text-[#171717] hover:bg-black/5",
  };

  return (
    <button
      type={type}
      className={cn(base, variants[variant] || variants.default, className)}
      {...props}
    >
      {children}
    </button>
  );
}