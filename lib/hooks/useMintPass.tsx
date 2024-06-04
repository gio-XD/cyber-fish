import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/service/api";
import { Account } from "@/state";
import abi from "@/static/abi.json";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { WriteContractErrorType } from "viem";
import { useAccount, useWriteContract } from "wagmi";

const CONTRACT_ADDRESS = "0x9005384C0EEDCBAaD96b1EE532976e4210b6f076";

const sleep = (ms: number) =>
  new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, ms);
  });

function useMintPass() {
  const { address } = useAccount();

  const updateAccount = useSetRecoilState(Account);

  const { toast } = useToast();
  const { writeContractAsync } = useWriteContract();

  const [isClaiming, toggleIsClaiming] = useState(false);

  const polling = async () => {
    let minted = false;

    do {
      await sleep(3000);
      const res = await api.account();

      if (res.me?.cyberClubPass.minted) {
        minted = true;

        updateAccount(res.me);
        // window.location.reload();
        break;
      }
    } while (!minted);

    return minted;
  };

  const handleMint = async () => {
    if (!address) return;
    try {
      toggleIsClaiming(true);

      const access = await api.check();

      if (!access.checkAccess.isStake) {
        toast({
          variant: "destructive",
          title: "You must stake at least 1000 tokens!",
          description: "You must stake at least 1000 tokens!",
          action: <ToastAction altText="Close">Close</ToastAction>,
        });

        throw new Error("not enough stake");
      }

      if (!access.checkAccess.isVerified) {
        toast({
          variant: "destructive",
          title: "You are not eligible!",
          description: "You are not eligible!",
          action: <ToastAction altText="Close">Close</ToastAction>,
        });

        throw new Error("not eligigle");
      }

      const tx = await writeContractAsync({
        abi,
        functionName: "mint",
        args: [address],
        address: CONTRACT_ADDRESS,
      });

      if (tx) {
        const minted = await polling();

        if (minted) {
          toast({
            title: "Mint Successfully!",
            description: "Mint Successfully.....",
            action: <ToastAction altText="Got it">Got it</ToastAction>,
          });
        }
      }
    } catch (error) {
      const _error = error as WriteContractErrorType;

      if (_error.name === "TransactionExecutionError") {
        toast({
          variant: "destructive",
          title: "User rejected transaction!",
          description: "User rejected transaction!",
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
      }
    } finally {
      toggleIsClaiming(false);
    }
  };
  return { handleMint, isClaiming };
}

export default useMintPass;
