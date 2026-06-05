import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");

const entries = [
  ["images", "images"],
  ["styles.css", "styles.css"],
  ["script.js", "script.js"],
];

await mkdir(dist, { recursive: true });

await Promise.all(
  entries.map(([from, to]) =>
    cp(resolve(root, from), resolve(dist, to), {
      recursive: true,
      force: true,
    }),
  ),
);
