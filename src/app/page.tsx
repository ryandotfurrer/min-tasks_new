import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { TaskList } from "@/components/task-list";
import { Button } from "@/components/ui/button";
import { TaskForm } from "@/components/task-form";
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
import { Plus } from "lucide-react";

export default async function Home() {
  const user = await currentUser();

  if (!user)
    return (
      <div className="">
        <header className="pb-24">
          <h1>get shit done</h1>
          <p>a minimal task list to get shit done</p>
        </header>
        <main className="space-y-12">
          <section className="space-y-4">
            <h2>Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              beatae quas iusto eaque dolorem, quia distinctio illo quisquam
              incidunt doloremque. Impedit cum quos saepe consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              deleniti repellendus excepturi repudiandae beatae ab.
            </p>
          </section>
          <section className="space-y-4">
            <h2>Pricing</h2>
            <p>Free during development moving to a SaaS when complete.</p>
          </section>
        </main>
      </div>
    );

  return (
    <div>
      <header>
        <p>Hello there!</p>
      </header>
      <main className="py-12">
        <TaskList />
      </main>
      <div>
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
      </div>
    </div>
  );
}
