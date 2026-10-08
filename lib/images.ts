import { existsSync } from "node:fs";
import path from "node:path";

const EXT = ["webp", "jpg", "jpeg", "png"];

/**
 * Cek saat build: apakah ada file public/images/<name>.(webp|jpg|jpeg|png)?
 * Kalau ada, kembalikan URL-nya. Kalau tidak, null (komponen tampil tanpa gambar).
 */
export function findImage(name: string): string | null {
  for (const ext of EXT) {
    if (existsSync(path.join(process.cwd(), "public/images", `${name}.${ext}`))) {
      return `/images/${name}.${ext}`;
    }
  }
  return null;
}
