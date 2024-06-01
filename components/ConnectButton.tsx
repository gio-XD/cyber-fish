import { useGlobal } from "@/provider/GlobalProvider";
import { Button } from "./ui/button";

function ConnectButton() {
  const { isLoggedIn, login, logout } = useGlobal();

  return (
    <Button
      className="w-[150px] h-[40px]"
      onClick={isLoggedIn ? logout : login}
    >
      {isLoggedIn ? "Disconnect" : "Connect"}
    </Button>
  );
}

export default ConnectButton;
