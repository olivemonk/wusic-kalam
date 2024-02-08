import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const uiFriendlyColors: string[] = [
  "#3498db", // Blue
  "#e74c3c", // Red
  "#2ecc71", // Green
  "#f39c12", // Orange
  "#9b59b6", // Purple
  "#1abc9c", // Teal
  "#34495e", // Dark Gray/Blue
  "#e67e22", // Dark Orange
];



export function getRandomColor(colors: string[]): string {
  if (colors.length === 0) {
    throw new Error('color array is empty.');
  }

  const randomIndex = Math.floor(Math.random() * colors.length);

  const randomColor = colors[randomIndex];

  return randomColor;
}