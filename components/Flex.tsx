import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

function Flex(props: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("flex justify-between items-center", props.className)}>
      {props.children}
    </div>
  );
}

export default Flex;
