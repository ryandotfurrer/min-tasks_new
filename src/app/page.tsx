import { TaskList } from "@/components/task-list";
import { TaskForm } from "@/components/task-form";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto p-4 grid">
      <header>
        <h1 className="text-3xl font-bold">min tasks</h1>
      </header>
      <main className="">
        <TaskList />
        <TaskForm />
      </main>
      <footer></footer>
    </div>
  );
}
