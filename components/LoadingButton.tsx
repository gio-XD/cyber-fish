import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button, ButtonProps } from "./ui/button";

type TLoadingButtonProps = {
  loading?: boolean;
} & ButtonProps;

function LoadingButton(props: TLoadingButtonProps) {
  const { loading, children, className, ...buttonProps } = props;
  return (
    <Button
      disabled={loading}
      className={cn(className, "gap-2")}
      {...buttonProps}
    >
      {loading && <ReloadIcon className="animate-spin" />}
      {children}
    </Button>
  );
}

export default LoadingButton;
