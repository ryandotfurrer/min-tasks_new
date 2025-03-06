"use client";

import React from "react";
import useSWR from "swr";
import { mutate } from "swr";

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
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <ul>
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task: any) => (
          <li key={task.xata_id}>
            <label
              style={{
                textDecoration: task.taskCompleted ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={task.taskCompleted || false}
                onChange={() => toggleComplete(task)}
              />
              {task.taskName}
            </label>
          </li>
        ))
      )}
    </ul>
  );
}

export { TaskList };
