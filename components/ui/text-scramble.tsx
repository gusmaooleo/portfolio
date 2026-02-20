"use client";
import { type JSX, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, MotionProps } from "framer-motion";

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = "p",
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = useMemo(
    () => motion.create(Component as keyof JSX.IntrinsicElements),
    [Component],
  );
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimatingRef = useRef(false);

  const scramble = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const steps = duration / speed;
    let step = 0;

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      let scrambled = "";
      const progress = step / steps;

      for (let i = 0; i < children.length; i++) {
        if (children[i] === " ") {
          scrambled += " ";
          continue;
        }

        if (progress * children.length > i) {
          scrambled += children[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setDisplayText(children);
        isAnimatingRef.current = false;
        onScrambleComplete?.();
      }
    }, speed * 1000);
  }, [
    characterSet,
    children,
    duration,
    onScrambleComplete,
    speed,
  ]);

  useEffect(() => {
    if (!trigger) return;

    scramble();
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      isAnimatingRef.current = false;
    };
  }, [scramble, trigger]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
