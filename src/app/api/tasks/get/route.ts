import { getXataClient } from "@/xata";
import { NextResponse } from "next/server";

const xata = getXataClient();

export async function GET() {
  try {
    const tasks = await xata.db.tasks.getAll();
    return NextResponse.json(tasks);
  } catch (error: any) {
    console.error("Error getting tasks:", error);
    return NextResponse.json(
      { message: "Failed to get tasks", error: error.message },
      { status: 500 }
    );
  }
}
