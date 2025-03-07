// src/app/api/tasks/[id]/route.ts
import { getXataClient } from "@/xata";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

const xata = getXataClient();

interface Params {
  id: string;
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params; // Extract the ID from params
    const { completed } = await req.json();
    const user = await currentUser();
    const clerkUserId = user?.id;

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json(
        { message: "Task ID is required" },
        { status: 400 }
      );
    }

    if (typeof completed !== "boolean") {
      return NextResponse.json(
        { message: "Completed must be a boolean" },
        { status: 400 }
      );
    }

    await xata.db.tasks.update(id, {
      taskCompleted: completed,
    });

    return NextResponse.json(
      { message: "Task updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    // Explicitly type error
    console.error("Error updating task:", error);
    return NextResponse.json(
      {
        message: "Failed to update task",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
