// app/api/tasks/[id]/route.ts
import { getXataClient } from "@/xata"; // Adjust path as needed
import { NextRequest, NextResponse } from "next/server";

const xata = getXataClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { completed } = await req.json();

    console.log("Updating task with ID:", id, "to completed:", completed); // Debugging log

    if (!id) {
      return NextResponse.json(
        { message: "Task ID is required" },
        { status: 400 }
      );
    }

    await xata.db.tasks.update(id, {
      taskCompleted: completed,
    });

    console.log("Task updated successfully in database"); // Debugging log

    return NextResponse.json(
      { message: "Task updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { message: "Failed to update task" },
      { status: 500 }
    );
  }
}
