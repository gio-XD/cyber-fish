import useMintPass from "@/lib/hooks/useMintPass";
import LoadingButton from "./LoadingButton";

function MintPassButton() {
  const { handleMint, isClaiming } = useMintPass();

  return (
    <LoadingButton
      variant="secondary"
      className=" w-[150px] h-[40px]"
      loading={isClaiming}
      onClick={handleMint}
    >
      Mint Pass
    </LoadingButton>
  );
}

export default MintPassButton;
