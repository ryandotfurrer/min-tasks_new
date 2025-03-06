// components/TaskForm.tsx
"use client";

import React, { useState } from "react";

interface TaskFormProps {
  onTaskCreated?: (newTask: any) => void;
}

function TaskForm({ onTaskCreated }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/tasks/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taskName: title }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const newTask = await response.json();
      onTaskCreated?.(newTask);
      setTitle("");
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Task"}
      </button>
    </form>
  );
}

export { TaskForm };
