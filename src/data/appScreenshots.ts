import unicornsmatch1 from "@/assets/apps/unicornsmatch-1.webp";
import unicornsmatch2 from "@/assets/apps/unicornsmatch-2.webp";
import unicornsmatch3 from "@/assets/apps/unicornsmatch-3.webp";
import unicorntreats1 from "@/assets/apps/unicorntreats-1.webp";
import unicorntreats2 from "@/assets/apps/unicorntreats-2.webp";
import unicorntreats3 from "@/assets/apps/unicorntreats-3.webp";
import zombiewar1 from "@/assets/apps/zombiewar-1.webp";
import zombiewar2 from "@/assets/apps/zombiewar-2.webp";
import zombiewar3 from "@/assets/apps/zombiewar-3.webp";
import fnfstudio1 from "@/assets/apps/fnfstudio-1.webp";
import fnfstudio2 from "@/assets/apps/fnfstudio-2.webp";
import fnfstudio3 from "@/assets/apps/fnfstudio-3.webp";
import woodbolts1 from "@/assets/apps/woodbolts-1.webp";

export const screenshotMap: Record<string, string> = {
  "unicornsmatch-1": unicornsmatch1,
  "unicornsmatch-2": unicornsmatch2,
  "unicornsmatch-3": unicornsmatch3,
  "unicorntreats-1": unicorntreats1,
  "unicorntreats-2": unicorntreats2,
  "unicorntreats-3": unicorntreats3,
  "zombiewar-1": zombiewar1,
  "zombiewar-2": zombiewar2,
  "zombiewar-3": zombiewar3,
  "fnfstudio-1": fnfstudio1,
  "fnfstudio-2": fnfstudio2,
  "fnfstudio-3": fnfstudio3,
  "woodbolts-1": woodbolts1,
};

export function getScreenshots(keys?: string[]): string[] {
  if (!keys) return [];
  return keys.map((k) => screenshotMap[k]).filter(Boolean);
}
