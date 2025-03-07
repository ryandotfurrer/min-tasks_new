// src/app/api/tasks/create/route.ts
import { getXataClient } from "@/xata";
import { NextRequest, NextResponse } from "next/server";

const xata = getXataClient();

export async function POST(req: NextRequest) {
  try {
    const { taskName } = await req.json();

    if (!taskName || typeof taskName !== "string" || taskName.trim() === "") {
      return NextResponse.json(
        { message: "Task name is required" },
        { status: 400 }
      );
    }

    const newTask = await xata.db.tasks.create({
      taskCompleted: false,
      taskName: taskName.trim(), // Trim whitespace
    });

    return NextResponse.json(newTask, { status: 201 }); // Explicitly set status to 201 (Created)
  } catch (error: any) {
    // Explicitly type 'error'
    console.error("Error creating task:", error);

    return NextResponse.json(
      {
        message: "Failed to add task",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
