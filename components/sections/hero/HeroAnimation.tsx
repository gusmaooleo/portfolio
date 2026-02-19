"use client";
import Spline from "@splinetool/react-spline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HeroAnimation() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themes = {
    light: "https://prod.spline.design/5d3aThI1ZbcyMkcY/scene.splinecode",
    dark: "https://prod.spline.design/SJFwGIu35r9dPG1I/scene.splinecode",
  };

  if (!mounted) return null;

  return (
    <main className="w-full h-full">
      <Spline
        scene={themes[(theme as "dark" | "light") || "dark"]}
        className="w-full h-full bg-transparent"
      />
    </main>
  );
}
