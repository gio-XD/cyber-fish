"use client";

import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Flex from "./Flex";
import Link3Logo from "./Link3Logo";

function Header() {
  return (
    <Flex className="h-[54px] fixed top-0 left-0 w-full bg-white px-4 border-b-[1px] z-50">
      <Flex className="w-[110px] gap-2">
        <Link3Logo />
        <span className={cn("text-lg font-bold")}>Club</span>
      </Flex>
      {/* <ConnectButton /> */}
      <ConnectButton />
    </Flex>
  );
}

export default Header;
