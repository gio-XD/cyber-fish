import axios from "axios";

export const siwe = (params: {
  address: string;
  nonce: string;
  chainId: number;
  domain: string;
  uri: string;
}) => {
  return axios.post("https://stg.api.link3.to/api/siwe", params);
};
