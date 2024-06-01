import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

function Tag(props: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        props.className,
        " text-sm border-[1px] px-4 py-1 border-[#000] rounded-sm"
      )}
    >
      {props.children}
    </span>
  );
}

export default Tag;
