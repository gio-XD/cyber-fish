import { api } from "@/service/api";
import { TaskStatus } from "@/service/generated/graphql";
import { refreshList } from "@/state";
import Image from "next/image";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import CardGrid from "./CardGrid";
import TaskCard1 from "./Static/TaskCard1";
import TaskCard2 from "./Static/TaskCard2";
import TaskCard from "./TaskCard";

function TaskList(props: { status: TaskStatus }) {
  const { data, mutate } = api.useTasks({
    status: props.status,
  });

  const updateRefresh = useSetRecoilState(refreshList);

  useEffect(() => {
    if (props.status === TaskStatus.InProgress) {
      updateRefresh((state) => mutate);
    }
  }, [props.status]);

  return (
    <CardGrid>
      {data?.tasks.list.map((task) => (
        <TaskCard refresh={mutate} key={task.id} data={task} />
      ))}

      {props.status === TaskStatus.InProgress ? (
        <>
          <TaskCard1 key="2" />
          <TaskCard2 key="3" />
          <div key="1" className=" relative w-full h-full">
            <Image
              src="/bgs/orgTask.png"
              alt=""
              fill
              className=" object-contain"
            />
          </div>
        </>
      ) : null}
    </CardGrid>
  );
}

export function InPublicTaskList() {
  const { data, mutate } = api.useTasks({
    status: TaskStatus.PublicReview,
  });

  const { data: review, mutate: reviewMutate } = api.useTasks({
    status: TaskStatus.CommitteeReview,
  });

  const progressList = data?.tasks.list || [];
  const reviewList = review?.tasks.list || [];

  return (
    <CardGrid>
      {[...progressList, ...reviewList].map((task) => (
        <TaskCard
          refresh={() => {
            mutate();
            reviewMutate();
          }}
          key={task.id}
          data={task}
        />
      ))}
    </CardGrid>
  );
}

export default TaskList;
