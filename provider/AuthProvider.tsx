"use client";

import { siwe } from "@/lib/siwe";
import { ACCESS_TOKEN_KEY, api } from "@/service/api";
import { AccessToken, Account } from "@/state";
import {
  AuthenticationStatus,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
  createAuthenticationAdapter,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { SWRConfig } from "swr";
import { WagmiProvider, useAccount, useChainId } from "wagmi";
import { Chain } from "wagmi/chains";

const cyberTestNet: Chain = {
  blockExplorers: {
    default: {
      name: "default",
      url: "https://cyber-testnet.socialscan.io/",
    },
  },
  id: 111557560,
  name: "Cyber TestNet",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://cyber-testnet.alt.technology"],
      webSocket: undefined,
    },
  },
};

const config = getDefaultConfig({
  appName: "Cyber O",
  projectId: "d8b0a4922c26dd2cd322c42c89d97b44",
  chains: [cyberTestNet],
  ssr: true,
});

const getNonce = () => {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return Buffer.from(arr)
    .toString("base64")
    .replaceAll(/[+=\/]/g, "");
};

const queryClient = new QueryClient();

const AuthProvider = (props: PropsWithChildren<{}>) => {
  return (
    <RecoilRoot>
      <SWRConfig>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowAdapter>{props.children}</RainbowAdapter>
          </QueryClientProvider>
        </WagmiProvider>
      </SWRConfig>
    </RecoilRoot>
  );
};

const RainbowAdapter = (props: PropsWithChildren) => {
  const { address } = useAccount();
  const chainId = useChainId();

  const updateAccount = useSetRecoilState(Account);

  const addr = useRef<string>(address || "");
  const updateToken = useSetRecoilState(AccessToken);

  const [authStatus, setAuthStatus] =
    useState<AuthenticationStatus>("unauthenticated");

  useEffect(() => {
    addr.current = address || "";
  }, [address]);

  const authenticationAdapter = createAuthenticationAdapter({
    getNonce: async () => {
      await new Promise((r) => setTimeout(r, 100));

      const nonce = getNonce();
      const siweMessage = (
        await siwe({
          nonce,
          address: addr.current,
          chainId: chainId!,
          domain: window.location.host,
          uri: window.location.origin,
        })
      ).data?.message;
      return new Promise((resolve, reject) => {
        if (siweMessage) {
          resolve(siweMessage);
        } else {
          reject("");
        }
      });
    },

    createMessage: ({ nonce: siweMessage, address, chainId }) => {
      return siweMessage;
    },

    getMessageBody: ({ message }) => {
      return message;
    },

    verify: async ({ signature, message }) => {
      const res = await api.login({
        request: {
          signedMessage: message,
          address,
          chainId,
          signature,
        },
      });

      if (res.login.data?.accessToken) {
        setAuthStatus("authenticated");
        const accessToken = res.login.data.accessToken;
        window.localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        updateToken(accessToken);
        updateAccount(res.login.data);

        return new Promise((resolve) => {
          resolve(true);
        });
      } else {
        return new Promise((resolve) => {
          resolve(false);
        });
      }
    },

    signOut: async () => {},
  });
  return (
    <RainbowKitAuthenticationProvider
      adapter={authenticationAdapter}
      status={authStatus}
    >
      <RainbowKitProvider>{props.children}</RainbowKitProvider>
    </RainbowKitAuthenticationProvider>
  );
};
export default AuthProvider;
