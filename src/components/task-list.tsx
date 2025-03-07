"use client";

import React from "react";
import useSWR from "swr";
import { mutate } from "swr";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function TaskList() {
  const { data: tasks, error } = useSWR("/api/tasks", fetcher);

  if (error) return <div>Failed to load tasks</div>;
  if (!tasks) return <div>Loading...</div>;

  const toggleComplete = async (task: any) => {
    try {
      const response = await fetch(`/api/tasks/${task.xata_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !task.taskCompleted }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Revalidate the tasks data to update the UI
      mutate("/api/tasks");
    } catch (error) {}
  };

  return (
    <ul className="*:mb-4">
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task: any) => (
          <li key={task.xata_id}>
            <div className="flex gap-2 items-center">
              <Label htmlFor={task.taskName}>
                <Checkbox
                  id={task.taskName}
                  checked={task.taskCompleted || false}
                  onCheckedChange={() => toggleComplete(task)}
                />
                {task.taskName}
              </Label>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export { TaskList };
