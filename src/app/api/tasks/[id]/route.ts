import { getXataClient } from "@/xata"; // Adjust path as needed
import { NextRequest, NextResponse } from "next/server";

const xata = getXataClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } } // Correctly type the second argument
): Promise<NextResponse> {
  try {
    const { completed } = await req.json();
    const { id } = params; // Extract id directly from params

    if (!id) {
      return NextResponse.json(
        { message: "Task ID is required" },
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
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update task" },
      { status: 500 }
    );
  }
}
