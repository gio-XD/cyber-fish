import { cn } from "@/lib/utils";
import { api } from "@/service/api";
import { Account } from "@/state";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import LoadingButton from "./LoadingButton";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type TFormValue = {
  amount: number;
};

function StakeModal() {
  const [isOpen, toggleIsOpen] = useState(false);
  const updateAccount = useSetRecoilState(Account);

  const { register, handleSubmit, formState } = useForm<TFormValue>();

  const submit = handleSubmit(async (e) => {
    const res = await api.stake({
      amount: Number(e.amount),
    });

    // if (res.stake.status === StakeResponse_Status.Success) {
    const userRes = await api.account();

    if (userRes.me) {
      updateAccount(userRes.me);
    }
    toggleIsOpen(false);
    // }
  });

  const errors = formState.errors;

  return (
    <Dialog open={isOpen} onOpenChange={toggleIsOpen}>
      <DialogTrigger>
        <Button
          variant="secondary"
          className=" w-[150px] h-[40px]"
          onClick={() => toggleIsOpen(true)}
        >
          Stake Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Stake</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="cyberid" className="text-right">
            Amount
          </Label>
          <Input
            {...register("amount", {
              validate(v) {
                return v > 0 || "amount must be greater than 0";
              },
            })}
            placeholder="cyberID"
            prefix="link3.to/"
            id="cyberid"
            type="number"
            className={cn("col-span-3", errors.amount ? "border-red-500" : "")}
          />
        </div>

        <DialogFooter>
          <LoadingButton loading={formState.isSubmitting} onClick={submit}>
            Stake
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default StakeModal;
