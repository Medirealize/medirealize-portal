import fs from "node:fs/promises";
import path from "node:path";

export type DevLogEntry = {
  date: string;
  title: string;
  body: string;
  valueLink?: {
    href: string;
    label: string;
  };
};

export async function readDevLogEntries(): Promise<DevLogEntry[]> {
  const filePath = path.join(process.cwd(), "content", "dev-log", "entries.json");
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(raw) as DevLogEntry[];
    return parsed;
  } catch {
    return [];
  }
}

