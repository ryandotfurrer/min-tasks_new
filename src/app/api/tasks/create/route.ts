import { getXataClient } from "@/xata";
import { NextRequest, NextResponse } from "next/server";

const xata = getXataClient();

export async function POST(req: NextRequest) {
  try {
    const { taskName } = await req.json();
    const newTask = await xata.db.tasks.create({
      taskCompleted: false,
      taskName: taskName,
    });
    return NextResponse.json(newTask);
  } catch (error) {
    console.error("Error adding task: ", error);
    return NextResponse.json(
      { message: "Failed to add task" },
      { status: 500 }
    );
  }
}
