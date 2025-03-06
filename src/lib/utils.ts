import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { XataClient } from "@/xata";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const xata = new XataClient({
  apiKey: process.env.XATA_API_KEY,
  branch: process.env.XATA_BRANCH,
});

export async function createTask(title: string) {
  // Use Xata client to create the task
  const newTask = await xata.db.tasks.create({
    title: title,
    completed: false,
    createdAt: new Date().toISOString(),
  });

  return newTask;
}
