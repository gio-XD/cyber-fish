import { cn } from "@/lib/utils";
import { api } from "@/service/api";
import {
  CreateTaskResponse_Status,
  TaskInput,
  TaskType,
} from "@/service/generated/graphql";
import { getUnixTime } from "date-fns";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "./DatePicker";
import LoadingButton from "./LoadingButton";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const VALIDATE_EMAIL = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

function CreateTaskModal() {
  const [isOpen, toggleIsOpen] = useState(false);

  const { register, handleSubmit, formState, control, reset } =
    useForm<TaskInput>({
      defaultValues: {
        endTime: new Date(),
        taskType: TaskType.BinaryDecision,
      },
    });

  const submit = handleSubmit(async (e) => {
    const res = await api.createTask({
      input: {
        ...e,

        rewards: Number(e.rewards),
        taskType: TaskType.BinaryDecision,
        startTime: getUnixTime(new Date()) + 10,
        endTime: getUnixTime(e.endTime),
      },
    });

    if (res.createTask.status === CreateTaskResponse_Status.Success) {
      toggleIsOpen(false);
    }
  });

  const errors = formState.errors;

  useEffect(() => {
    if (!isOpen) {
      return () => {
        reset({
          endTime: new Date(),
          taskType: TaskType.BinaryDecision,
        });
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={toggleIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className=" w-[150px] h-[40px]">
          Create Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cyberid" className="text-right">
              Title
            </Label>
            <Input
              {...register("title", {
                required: "title is required",
              })}
              placeholder="title"
              prefix="link3.to/"
              id="cyberid"
              className={cn("col-span-3", errors.title ? "border-red-500" : "")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              {...register("description", {
                required: "description is required",
              })}
              placeholder="description"
              id="description"
              className={cn(
                "col-span-3",
                errors.description ? "border-red-500" : ""
              )}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rewards" className="text-right">
              Rewards
            </Label>
            <Input
              {...register("rewards", {
                required: "rewards is required",
              })}
              type="number"
              id="rewards"
              className={cn(
                "col-span-3",
                errors.rewards ? "border-red-500" : ""
              )}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taskType" className="text-right">
              TaskType
            </Label>
            <Input
              {...register("taskType", {
                required: "taskType is required",
              })}
              disabled
              value={TaskType.BinaryDecision}
              id="taskType"
              className={cn(
                "col-span-3",
                errors.taskType ? "border-red-500" : ""
              )}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endTime" className="text-right">
              End Date
            </Label>
            <Controller
              control={control}
              name="endTime"
              render={({ field: { value, onChange } }) => (
                <DatePicker value={value} onChange={onChange} />
              )}
            />
          </div>
        </div>
        <DialogFooter>
          <LoadingButton
            loading={formState.isSubmitting}
            onClick={submit}
            className="gap-2"
          >
            Create
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTaskModal;
