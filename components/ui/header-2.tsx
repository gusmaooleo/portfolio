"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "./menu-toggle-icon";
import { useScroll } from "./use-scroll";
import NavLink from "./nav-link";
import { useActiveSection } from "./use-active-section";
import { LanguageSelectorDropdown } from "./language-selector-dropdown";
import { Sun } from "lucide-react";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    {
      label: "About me",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Stack",
      href: "#stack",
    },
    {
      label: "Contact-me",
      href: "#contact",
    },
  ];

  const activeSection = useActiveSection(
    links.map((link) => link.href.replace("#", "")),
  );

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky font-sans top-0 z-50 mx-auto px-8 w-full max-w-full border border-transparent md:rounded-full md:transition-all md:duration-500 md:ease-out",
        {
          // Estado normal - transparente
          "bg-transparent": !scrolled && !open,

          // Estado scrolled - luz de cima, sombra elegante
          "bg-background/80 supports-[backdrop-filter]:bg-background/10 backdrop-blur-xl \
           border-[rgba(0,0,0,0.06)] \
           shadow-[0_-1px_0_rgba(255,255,255,0.8),0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] \
           md:top-4 md:max-w-4xl": scrolled && !open,

          // Mobile menu aberto
          "bg-background": open,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-14 md:px-3 md:transition-all md:ease-out",
          {
            "md:px-4": scrolled,
          },
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="font-bold text-lg text-muted-foreground">le</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, i) => (
            <NavLink
              key={i}
              href={link.href}
              className={buttonVariants({
                variant:
                  activeSection === link.href.replace("#", "")
                    ? "innerShadow"
                    : "nav",
                className: "rounded-full",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-4">
            <LanguageSelectorDropdown />
            <Sun className="w-5 h-5 text-neutral-500 hover:text-black cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Mobile: CTA + Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setOpen(!open)}
            className="shrink-0"
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-14 z-50 flex flex-col overflow-hidden bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div
          data-slot={open ? "open" : "closed"}
          className={cn(
            "data-[slot=open]:animate-in data-[slot=open]:fade-in-0 data-[slot=open]:slide-in-from-top-2 ease-out duration-300",
            "flex h-full w-full flex-col justify-between p-6",
          )}
        >
          {/* Navigation Links */}
          <div className="flex flex-col gap-1 pt-4">
            {links.map((link) => (
              <a
                key={link.label}
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "justify-start text-lg font-medium h-12",
                })}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom Actions - Full Width */}
          <div className="flex flex-col gap-3 pb-8">
            <div className="flex items-center gap-4">
              <LanguageSelectorDropdown />
              <Sun className="w-5 h-5 text-neutral-500 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
