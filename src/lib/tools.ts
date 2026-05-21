import fs from "fs";
import path from "path";

export interface Tool {
  name: string;
  category: string;
  description: string;
  url: string;
  tags: string[];
}

export function getAllTools(): Tool[] {
  const filePath = path.join(process.cwd(), "content", "tools", "tools.json");
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as Tool[];
}

export function getCategories(): string[] {
  const tools = getAllTools();
  const categories = new Set(tools.map((tool) => tool.category));
  return Array.from(categories).sort();
}
