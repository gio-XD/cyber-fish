import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

function CardGrid(props: PropsWithChildren) {
  return <div className={cn("grid grid-cols-4 gap-12")}>{props.children}</div>;
}

export default CardGrid;
