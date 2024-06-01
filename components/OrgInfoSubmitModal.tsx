import { cn } from "@/lib/utils";
import { PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
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

type TFormValue = {
  handle: string;
  xHandle: string;
  email: string;
  website: string;
};

const VALIDATE_EMAIL = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

const FormHelpText = (props: PropsWithChildren) => {
  return (
    <span className="text-red-500 text-sm absolute top-[calc(100% + 4px)]">
      {props.children}
    </span>
  );
};

function OrgInfoSubmitModal() {
  const [isOpen, toggleIsOpen] = useState(false);

  const { register, handleSubmit, formState } = useForm<TFormValue>();

  const submit = handleSubmit((e) => {
    console.log(e);
  });

  const errors = formState.errors;

  return (
    <Dialog open={isOpen} onOpenChange={toggleIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cyberid" className="text-right">
              CyberID
            </Label>
            <Input
              {...register("handle", {
                required: "handle is required",
              })}
              placeholder="cyberID"
              prefix="link3.to/"
              id="cyberid"
              className={cn(
                "col-span-3",
                errors.handle ? "border-red-500" : ""
              )}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="xhandle" className="text-right">
              X handle
            </Label>
            <Input
              {...register("xHandle", {
                required: "X handle is required",
              })}
              placeholder="X handle"
              id="xhandle"
              className={cn(
                "col-span-3",
                errors.xHandle ? "border-red-500" : ""
              )}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              {...register("email", {
                required: "email is required",
                validate(v) {
                  return VALIDATE_EMAIL.test(v) || "invalid email";
                },
              })}
              id="Email"
              className={cn("col-span-3", errors.email ? "border-red-500" : "")}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="website" className="text-right">
              Website
            </Label>
            <Input
              {...register("website", {
                required: "website is required",
              })}
              id="website"
              className={cn(
                "col-span-3",
                errors.website ? "border-red-500" : ""
              )}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={submit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default OrgInfoSubmitModal;
