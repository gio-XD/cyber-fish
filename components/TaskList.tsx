import { api } from "@/service/api";
import { TaskStatus } from "@/service/generated/graphql";
import Image from "next/image";
import CardGrid from "./CardGrid";
import TaskCard from "./TaskCard";

function TaskList(props: { status: TaskStatus }) {
  const { data, mutate } = api.useTasks({
    status: props.status,
  });

  return (
    <CardGrid>
      {data?.tasks.list.map((task) => (
        <TaskCard refresh={mutate} key={task.id} data={task} />
      ))}

      {props.status === TaskStatus.InProgress ? (
        <>
          <Image
            quality={100}
            alt=""
            src="/bgs/task1.png"
            width={250}
            height={340}
          />
          <Image
            quality={100}
            alt=""
            src="/bgs/task2.png"
            width={234}
            height={340}
          />
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
