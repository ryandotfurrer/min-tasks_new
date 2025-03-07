import { currentUser } from "@clerk/nextjs/server";
import { getXataClient } from "@/xata";
import { NextResponse } from "next/server";

const xata = getXataClient();

export async function GET() {
  const user = await currentUser();
  const clerkUserId = user?.id;

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const tasks = await xata.db.tasks
      .filter({ clerkUserId: clerkUserId })
      .getAll();
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
