import { api } from "@/service/api";

export default function useIsAdmin() {
  const { data } = api.useAccount();
  return false;
}
