import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getXataClient } from "@/xata";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const xata = getXataClient();

const newTask = await xata.db.tasks.create({
  xata_id: "id-40232288",
  taskCompleted: true,
  taskName: "longer text",
});
console.log(newTask);
