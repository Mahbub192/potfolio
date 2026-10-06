export type ClassValue = string | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}

export const containerCx = "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8";

export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
