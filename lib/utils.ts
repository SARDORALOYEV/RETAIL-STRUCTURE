import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tailwind's scanner needs fully static class strings (no template interpolation),
// so each color's classes are spelled out literally.
export const PALETTE = [
  {
    name: "emerald",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700",
    text: "text-emerald-600 dark:text-emerald-400",
    solid: "bg-emerald-500",
  },
  {
    name: "orange",
    bg: "bg-orange-50 dark:bg-orange-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700",
    text: "text-orange-600 dark:text-orange-400",
    solid: "bg-orange-500",
  },
  {
    name: "blue",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700",
    text: "text-blue-600 dark:text-blue-400",
    solid: "bg-blue-500",
  },
  {
    name: "violet",
    bg: "bg-violet-50 dark:bg-violet-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-700",
    text: "text-violet-600 dark:text-violet-400",
    solid: "bg-violet-500",
  },
  {
    name: "teal",
    bg: "bg-teal-50 dark:bg-teal-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-teal-300 dark:hover:border-teal-700",
    text: "text-teal-600 dark:text-teal-400",
    solid: "bg-teal-500",
  },
  {
    name: "pink",
    bg: "bg-pink-50 dark:bg-pink-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-pink-300 dark:hover:border-pink-700",
    text: "text-pink-600 dark:text-pink-400",
    solid: "bg-pink-500",
  },
  {
    name: "amber",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-amber-300 dark:hover:border-amber-700",
    text: "text-amber-600 dark:text-amber-400",
    solid: "bg-amber-500",
  },
  {
    name: "cyan",
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-cyan-300 dark:hover:border-cyan-700",
    text: "text-cyan-600 dark:text-cyan-400",
    solid: "bg-cyan-500",
  },
  {
    name: "indigo",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700",
    text: "text-indigo-600 dark:text-indigo-400",
    solid: "bg-indigo-500",
  },
  {
    name: "rose",
    bg: "bg-rose-50 dark:bg-rose-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-rose-300 dark:hover:border-rose-700",
    text: "text-rose-600 dark:text-rose-400",
    solid: "bg-rose-500",
  },
  {
    name: "lime",
    bg: "bg-lime-50 dark:bg-lime-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-lime-300 dark:hover:border-lime-700",
    text: "text-lime-600 dark:text-lime-400",
    solid: "bg-lime-500",
  },
  {
    name: "sky",
    bg: "bg-sky-50 dark:bg-sky-500/10",
    border: "border-gray-200 dark:border-gray-800 hover:border-sky-300 dark:hover:border-sky-700",
    text: "text-sky-600 dark:text-sky-400",
    solid: "bg-sky-500",
  },
];

export function paletteFor(index: number) {
  return PALETTE[((index % PALETTE.length) + PALETTE.length) % PALETTE.length];
}

// Semantic status recipes (success / warning / danger / neutral)
export const SEMANTIC = {
  success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  warning: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  danger: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
  neutral: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};
