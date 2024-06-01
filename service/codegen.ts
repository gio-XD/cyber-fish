import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "./service/generated/graphql.ts": {
      schema: "https://api.stg.cyberconnect.dev/cyber-fish/",
      documents: ["./**/*.gql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
        "plugin-typescript-swr",
      ],
    },
  },
  config: {
    autogenSWRKey: true,
  },
};
export default config;
