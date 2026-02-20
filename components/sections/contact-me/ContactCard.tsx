"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { useDictionary } from "@/components/dictionary-provider";

type SendState = "idle" | "sending" | "sent";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:leogusmaocf@gmail.com",
    icon: Mail,
    handle: "leogusmaocf@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gusmaooleo/",
    icon: Linkedin,
    handle: "/in/gusmaooleo",
  },
  {
    label: "GitHub",
    href: "https://github.com/gusmaooleo",
    icon: Github,
    handle: "/gusmaooleo",
  },
];

export function ContactCard() {
  const [message, setMessage] = useState("");
  const [sendState, setSendState] = useState<SendState>("idle");
  const sendingTimeoutRef = useRef<number | null>(null);
  const resetTimeoutRef = useRef<number | null>(null);
  const { contact } = useDictionary();

  useEffect(
    () => () => {
      if (sendingTimeoutRef.current !== null) {
        window.clearTimeout(sendingTimeoutRef.current);
      }
      if (resetTimeoutRef.current !== null) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    },
    [],
  );

  const handleSend = useCallback(() => {
    if (!message.trim() || sendState !== "idle") return;

    setSendState("sending");

    // Simulate sending — mailto fallback
    sendingTimeoutRef.current = window.setTimeout(() => {
      setSendState("sent");
      window.location.href = `mailto:leonardo@example.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;

      resetTimeoutRef.current = window.setTimeout(() => {
        setSendState("idle");
        setMessage("");
      }, 2500);
    }, 1500);
  }, [message, sendState]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-md mx-auto p-6 md:p-8 rounded-2xl
        bg-zinc-100/50 dark:bg-zinc-900/50
        border border-zinc-200/60 dark:border-zinc-800/50
        backdrop-blur-md
        shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
    >
      <div className="mb-6">
        <span className="font-mono text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600 uppercase block mb-2">
          {contact.card.label}
        </span>
        <h3 className="font-serif italic text-2xl md:text-3xl text-zinc-900 dark:text-zinc-100 tracking-tight">
          {contact.card.title}
        </h3>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-3 rounded-xl
              border border-zinc-200/60 dark:border-zinc-800/60
              bg-white/40 dark:bg-zinc-800/40
              hover:border-orange-400/60 dark:hover:border-orange-400/40
              hover:shadow-[0_0_16px_rgba(255,160,79,0.12)]
              dark:hover:shadow-[0_0_16px_rgba(255,160,79,0.08)]
              transition-all duration-300 cursor-pointer"
          >
            <link.icon className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-orange-500 transition-colors duration-300" />
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
              [{link.label}]
            </span>
            <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 ml-auto">
              {link.handle}
            </span>
          </a>
        ))}
      </div>

      <div className="mb-6">
        <label className="font-mono text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600 uppercase block mb-2">
          {contact.card.quickMessageLabel}
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={contact.card.placeholder}
            disabled={sendState !== "idle"}
            className="flex-1 px-4 py-2.5 rounded-xl font-mono text-xs
              bg-white/60 dark:bg-zinc-800/60
              border border-zinc-200/60 dark:border-zinc-800/60
              text-zinc-700 dark:text-zinc-300
              placeholder:text-zinc-400 dark:placeholder:text-zinc-600
              focus:outline-none focus:border-orange-400/50 dark:focus:border-orange-400/30
              focus:shadow-[0_0_12px_rgba(255,160,79,0.08)]
              transition-all duration-300
              disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!message.trim() || sendState !== "idle"}
            className="px-4 py-2.5 rounded-xl font-mono text-xs
              bg-zinc-900 dark:bg-zinc-100
              text-zinc-100 dark:text-zinc-900
              hover:bg-zinc-800 dark:hover:bg-zinc-200
              disabled:opacity-30 disabled:cursor-not-allowed
              transition-all duration-200
              flex items-center gap-1.5"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="h-5 mt-2">
          <AnimatePresence mode="wait">
            {sendState === "sending" && (
              <motion.span
                key="sending"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="font-mono text-[10px] text-orange-500 tracking-wider"
              >
                {contact.card.sending}
              </motion.span>
            )}
            {sendState === "sent" && (
              <motion.span
                key="sent"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="font-mono text-[10px] text-green-500 tracking-wider"
              >
                {contact.card.sent}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {contact.card.cta}{" "}
        <span className="text-zinc-700 dark:text-zinc-300 font-medium">
          {contact.card.ctaBold}
        </span>
      </p>
    </motion.div>
  );
}
