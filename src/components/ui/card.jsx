import React from "react";
import { cn } from "../../lib/utils.js";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-black/10 bg-white text-[#171717]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}