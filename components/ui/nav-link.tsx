"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "motion/react";

interface NavLinkProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

/**
 * NavLink - Navigation link with animated gradient underline on hover
 * The underline starts small and expands to full width with a gradient effect
 */
export function NavLink({ children, className, ...props }: NavLinkProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.a
      className={cn(
        "relative inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-all duration-300",
        "hover:text-foreground hover:[text-shadow:0_0_12px_rgba(0,0,0,0.15)]",
        "cursor-pointer px-4 py-2",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}

      {/* Animated gradient underline */}
      <motion.span
        className="absolute bottom-1 left-1/2 h-[2px] rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)",
        }}
        initial={{ width: 0, x: "-50%" }}
        animate={{
          width: isHovered ? "80%" : 0,
          x: "-50%",
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.a>
  );
}

/**
 * NavButton - Same as NavLink but renders as a button
 */
export function NavButton({
  children,
  className,
  ...props
}: Omit<HTMLMotionProps<"button">, "children"> & {
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-all duration-300",
        "hover:text-foreground hover:[text-shadow:0_0_12px_rgba(0,0,0,0.15)]",
        "cursor-pointer px-4 py-2",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}

      {/* Animated gradient underline */}
      <motion.span
        className="absolute bottom-1 left-1/2 h-[2px] rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)",
        }}
        initial={{ width: 0, x: "-50%" }}
        animate={{
          width: isHovered ? "80%" : 0,
          x: "-50%",
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.button>
  );
}

export default NavLink;
