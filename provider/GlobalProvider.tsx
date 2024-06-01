"use client";

import { ACCESS_TOKEN_KEY, api } from "@/service/api";
import { AccountFragment } from "@/service/generated/graphql";
import { AccessToken, Account } from "@/state";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRecoilState } from "recoil";

type TGlobalCtx = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  toggleIsLoggedIn?: (s: boolean) => void;
  account?: AccountFragment;
};

const defaultCtx: TGlobalCtx = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const GlobalCtx = createContext<TGlobalCtx>(defaultCtx);

function GlobalProvider(props: PropsWithChildren) {
  const [isLoggedIn, toggleIsLoggedIn] = useState(false);

  const [account, updateAccount] = useRecoilState(Account);

  const [accessToken, setToken] = useRecoilState(AccessToken);

  const { openConnectModal } = useConnectModal();

  useEffect(() => {
    toggleIsLoggedIn(!!accessToken);

    if (accessToken) {
      api.account().then((res) => updateAccount(res.me as AccountFragment));
    }
  }, [accessToken]);

  return (
    <GlobalCtx.Provider
      value={{
        account,
        isLoggedIn,
        toggleIsLoggedIn,
        login: () => openConnectModal?.(),
        logout: () => {
          updateAccount(undefined);
          setToken(undefined);
          window.localStorage.removeItem(ACCESS_TOKEN_KEY);
        },
      }}
    >
      {props.children}
    </GlobalCtx.Provider>
  );
}

export const useGlobal = () => useContext(GlobalCtx);

export default GlobalProvider;
