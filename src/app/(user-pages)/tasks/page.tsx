"use client";

import { TaskList } from "@/components/task-list";
import { TaskForm } from "@/components/task-form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Home() {
  return (
    <div className="">
      <header className="pb-24">
        <h1 className="text-3xl font-bold">min tasks</h1>
        <p>a minimal task list to get shit done</p>
      </header>
      <main className="">
        <TaskList />
        <Drawer>
          <div className="flex">
            <DrawerTrigger asChild className="place-self-end">
              <Button variant="outline" className="ml-auto">
                Add Task
                <Plus />
              </Button>
            </DrawerTrigger>
          </div>
          <DrawerContent>
            <div className="mx-auto w-full max-w-screen-sm px-4">
              <DrawerHeader>
                <DrawerTitle>Create a new task</DrawerTitle>
                <DrawerClose />
              </DrawerHeader>
              <DrawerDescription asChild>
                <TaskForm />
              </DrawerDescription>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </main>
    </div>
  );
}
