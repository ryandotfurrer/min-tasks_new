// src/app/api/tasks/route.ts
import { getXataClient } from "@/xata";
import { NextResponse } from "next/server";

const xata = getXataClient();

export async function GET() {
  try {
    const tasks = await xata.db.tasks.getAll();
    return NextResponse.json(tasks);
  } catch (error: any) {
    console.error("Error fetching tasks:", error); // Include error logging

    // More informative error response (optional)
    return NextResponse.json(
      {
        message: "Failed to fetch tasks",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
