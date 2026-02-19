"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Code2, Database, Layout, Smartphone } from "lucide-react";

export function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-66.66%"]);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      if (v < 0.35) setCurrentSlide(1);
      else if (v < 0.65) setCurrentSlide(2);
      else setCurrentSlide(3);
    });
  }, [smoothProgress]);

  return (
    <section
      id="about-me"
      ref={containerRef}
      className="relative h-[300vh] bg-zinc-50 dark:bg-zinc-950 -mt-16"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex">
        <div className="hidden md:flex flex-col justify-between w-[25%] lg:w-[20%] h-full p-8 lg:p-12 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 z-20">
          <div className="space-y-2">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
              About
            </h2>
            <p className="font-serif italic text-2xl lg:text-3xl text-zinc-900 dark:text-zinc-100">
              Me, Myself
              <br />& I
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-6xl font-sans font-bold text-zinc-200 dark:text-zinc-800 overflow-hidden relative h-20">
              <motion.div
                key={currentSlide}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0"
              >
                0{currentSlide}
              </motion.div>
            </div>
            <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-zinc-900 dark:bg-zinc-100"
                style={{
                  width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                }}
              />
            </div>
            <div className="flex justify-between text-xs font-mono text-zinc-500 mt-2">
              <span>START</span>
              <span>END</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[75%] lg:w-[80%] h-full relative overflow-hidden">
          <motion.div style={{ x }} className="flex h-full w-[300%]">
            <div className="w-1/3 h-full flex items-center justify-center p-8 md:p-16 lg:p-24 border-r border-zinc-100 dark:border-zinc-900/50">
              <div className="max-w-2xl space-y-8">
                <div className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-mono mb-4">
                  FULLSTACK BACKGROUND
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                  Building bridges between{" "}
                  <span className="italic text-zinc-500">code</span> &{" "}
                  <span className="italic text-zinc-500">business value</span>.
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed max-w-prose">
                  Starting as a Fullstack developer gave me the technical depth
                  to understand <span className="font-semibold">how</span>{" "}
                  things works. Transitioning to Product Engineering allowed me
                  to focus on <span className="font-semibold">why</span> we
                  build them. I don't just write code; I architect solutions
                  that scale businesses.
                </p>
              </div>
            </div>

            <div className="w-1/3 h-full flex flex-col md:flex-row items-center border-r border-zinc-100 dark:border-zinc-900/50">
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center gap-8">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-mono w-fit">
                  PRODUCT ENGINEERING
                </div>
                <h3 className="text-3xl md:text-4xl font-sans font-medium">
                  Optimizing for impact,
                  <br />
                  not just output.
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-4xl font-mono font-bold text-zinc-900 dark:text-zinc-100">
                      -40%
                    </p>
                    <p className="text-sm text-zinc-500">
                      Latency in core services via architectural refactoring
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-mono font-bold text-zinc-900 dark:text-zinc-100">
                      2x
                    </p>
                    <p className="text-sm text-zinc-500">
                      User retention through revamped UX/UI flows
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="relative z-10 w-3/4 h-3/4 bg-white dark:bg-zinc-950 rounded-lg shadow-2xl border border-zinc-200 dark:border-zinc-800 p-4 transition-transform duration-500 group-hover:scale-105">
                  <div className="w-full h-8 border-b border-zinc-100 dark:border-zinc-800 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-3/4 h-4 bg-zinc-100 dark:bg-zinc-800 rounded animate-pulse"></div>
                    <div className="w-full h-32 bg-zinc-50 dark:bg-zinc-900 rounded border border-dashed border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-mono">
                      System Architecture Diagram
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
                      <div className="h-8 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
                      <div className="h-8 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/3 h-full flex items-center justify-center bg-zinc-900 text-zinc-100">
              <div className="max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-mono border border-zinc-700">
                    STACKS & SCALABILITY
                  </div>
                  <h3 className="text-4xl font-serif italic text-white">
                    Tech that scales.
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Leveraging modern ecosystems to build resilient
                    applications. My toolbox is selected for performance,
                    developer experience, and long-term maintainability.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {[
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Node.js",
                      "TailwindCSS",
                      "PostgreSQL",
                      "AWS",
                      "Docker",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-sm font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Smartphone,
                      label: "Mobile First",
                      desc: "Responsive & Adaptive",
                    },
                    {
                      icon: Database,
                      label: "Data Driven",
                      desc: "Optimized Queries",
                    },
                    {
                      icon: Code2,
                      label: "Clean Code",
                      desc: "Maintainable Architecture",
                    },
                    { icon: Layout, label: "UI/UX", desc: "Pixel Perfect" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-colors"
                    >
                      <item.icon className="w-8 h-8 mb-4 text-zinc-400" />
                      <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                      <p className="text-xs text-zinc-500 font-mono">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
