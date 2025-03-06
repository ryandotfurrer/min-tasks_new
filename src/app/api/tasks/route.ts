// app/api/tasks/route.ts
import { getXataClient } from "@/xata"; // Adjust path as needed
import { NextResponse } from "next/server";

const xata = getXataClient();

export async function GET() {
  try {
    const tasks = await xata.db.tasks.getAll();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}
