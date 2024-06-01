"use client";

import { ACCESS_TOKEN_KEY } from "@/service/api";
import { AccountFragment } from "@/service/generated/graphql";
import { atom } from "recoil";

const getDefaultToken = () => {
  try {
    return typeof global.window !== undefined && typeof window !== undefined
      ? (window.localStorage.getItem(ACCESS_TOKEN_KEY) as string)
      : undefined;
  } catch (error) {
    return undefined;
  }
};

export const Account = atom<AccountFragment | undefined>({
  key: "globalAccount",
  default: undefined,
});

export const AccessToken = atom<string | undefined>({
  key: "accessToken",
  default: getDefaultToken(),
});
