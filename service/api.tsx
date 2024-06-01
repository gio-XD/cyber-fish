import { GraphQLClient } from "graphql-request";
import { getSdkWithHooks } from "./generated/graphql";

export const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";

const getAccessToken = () =>
  window.localStorage.getItem(ACCESS_TOKEN_KEY) || "";

const client = new GraphQLClient(
  "https://api.stg.cyberconnect.dev/cyber-fish/",
  {
    requestMiddleware(request) {
      const headers: any = {
        ...request.headers,
        "Content-Type": "application/json",
      };

      const token = getAccessToken();

      if (token) {
        headers.Authorization = token;
      }
      return {
        ...request,
        headers,
      };
    },
  }
);

export const api = getSdkWithHooks(client);
