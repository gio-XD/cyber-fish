"use client";

import AccontBanner from "@/components/AccontBanner";
import TaskList, { InPublicTaskList } from "@/components/TaskList";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/service/api";
import { TaskStatus } from "@/service/generated/graphql";
import { TabsContent } from "@radix-ui/react-tabs";

export default function Page() {
  const { data } = api.useTasks();

  return (
    <div className="flex flex-col gap-2 bg-[#EEF3F5]">
      <AccontBanner />

      <Tabs defaultValue="ongoing" className=" px-4">
        <TabsList className="grid w-[400px] mx-auto grid-cols-3 mb-10 bg-[#EEF3F5]">
          <TabsTrigger value="ongoing">ongoing</TabsTrigger>
          <TabsTrigger value="announcement">Announcement</TabsTrigger>
          <TabsTrigger value="end">end</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing" className="px-10">
          <TaskList key="ongoing" status={TaskStatus.InProgress} />
        </TabsContent>

        <TabsContent value="announcement" className="px-10">
          <InPublicTaskList key="announcement" />
        </TabsContent>

        <TabsContent value="end" className="px-10">
          <TaskList key="end" status={TaskStatus.End} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
