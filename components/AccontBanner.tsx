import { truncateAddress } from "@/lib/address";
import { useGlobal } from "@/provider/GlobalProvider";
import Image from "next/image";
import ConnectButton from "./ConnectButton";
import CreateTaskModal from "./CreateTaskModal";
import EmojiAvatar from "./EmojiAvatar";
import Flex from "./Flex";
import MintPassButton from "./MintPassButton";
import StakeModal from "./StackModal";
import { Card } from "./ui/card";

const Score = (props: { title: string; score: number }) => {
  const { title, score } = props;

  return (
    <Flex className="flex-col  gap-2  items-start">
      <span className=" leading-[1] font-thin text-[80px] text-white text-left">
        {score}
      </span>
      <span className=" mt-[-10px] font-normal opacity-75 text-white text-left pl-2">
        {title}
      </span>
    </Flex>
  );
};

function AccontBanner() {
  const { isLoggedIn, account } = useGlobal();

  const renderRight = () => {
    if (!isLoggedIn) {
      return (
        <Flex className=" w-full justify-end">
          <ConnectButton />
        </Flex>
      );
    } else {
      return (
        <Flex className="justify-between w-full pl-10">
          <Flex className="flex-col gap-4  items-start">
            <span className=" text-lg text-left text-white">
              {truncateAddress(account?.address)}
            </span>

            <svg
              width="318"
              height="2"
              viewBox="0 0 318 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H318" stroke="url(#paint0_linear_17_1381)" />
              <defs>
                <linearGradient
                  id="paint0_linear_17_1381"
                  x1="159"
                  y1="1.5"
                  x2="318"
                  y2="1.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <Flex className="gap-4">
              <Score
                title={"reputation"}
                score={account?.cyberClubPass.reputations || 0}
              />

              <Score title={"points"} score={account?.points || 0} />
            </Flex>
          </Flex>
          <Flex className="gap-2 flex-col justify-start">
            <StakeModal />

            {account?.cyberClubPass.minted ? (
              <CreateTaskModal />
            ) : (
              <MintPassButton />
            )}
          </Flex>
        </Flex>
      );
    }
  };
  return (
    <Card className=" relative p-[40px] h-[306px] flex items-center justify-between gap-[80px] bg-black rounded-none">
      <Flex className=" flex-col gap-4 w-[120px] flex-shrink-0">
        <EmojiAvatar size={100} address={account?.address} />

        <Image
          className="absolute top-2 left-[30px] z-0"
          alt="avatar-bg"
          width={235}
          height={267}
          src="/bgs/avatar-bg.png"
        />
      </Flex>

      <Flex className="flex-col items-start w-full">{renderRight()}</Flex>
    </Card>
  );
}

export default AccontBanner;
