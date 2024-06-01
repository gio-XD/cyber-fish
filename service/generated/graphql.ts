import { ClientError, GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";

import useSWR, {
  SWRConfiguration as SWRConfigInterface,
  Key as SWRKeyInterface,
} from "swr";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  ChainId: { input: any; output: any };
  Cursor: { input: any; output: any };
  EVMAddress: { input: any; output: any };
  Timestamp: { input: any; output: any };
  TokenId: { input: any; output: any };
  Url: { input: any; output: any };
};

export type BinaryDecisionTask = Task & {
  __typename?: "BinaryDecisionTask";
  choice?: Maybe<Scalars["Boolean"]["output"]>;
  description: Scalars["String"]["output"];
  endTime: Scalars["Timestamp"]["output"];
  id: Scalars["ID"]["output"];
  result: Scalars["Boolean"]["output"];
  rewards: Scalars["Int"]["output"];
  right: Scalars["Int"]["output"];
  startTime: Scalars["Timestamp"]["output"];
  status: TaskStatus;
  taskType: TaskType;
  title: Scalars["String"]["output"];
  wrong: Scalars["Int"]["output"];
};

export type CancelTaskResponse = {
  __typename?: "CancelTaskResponse";
  status: CancelTaskResponse_Status;
};

export enum CancelTaskResponse_Status {
  InvalidParameter = "INVALID_PARAMETER",
  PermissionDenied = "PERMISSION_DENIED",
  Success = "SUCCESS",
  TaskNotFound = "TASK_NOT_FOUND",
}

export type CheckAccessResponse = {
  __typename?: "CheckAccessResponse";
  isStake: Scalars["Boolean"]["output"];
  isVerified: Scalars["Boolean"]["output"];
};

export type CreateTaskResponse = {
  __typename?: "CreateTaskResponse";
  status: CreateTaskResponse_Status;
};

export enum CreateTaskResponse_Status {
  InsufficientBalance = "INSUFFICIENT_BALANCE",
  InvalidParameter = "INVALID_PARAMETER",
  PermissionDenied = "PERMISSION_DENIED",
  Success = "SUCCESS",
}

export type CyberClubPass = {
  __typename?: "CyberClubPass";
  minted: Scalars["Boolean"]["output"];
  reputations: Scalars["Int"]["output"];
  role: UserRole;
};

export type DoTaskInput = {
  challenge: Scalars["Boolean"]["input"];
  result: Scalars["Boolean"]["input"];
  taskId: Scalars["ID"]["input"];
};

export type DoTaskResponse = {
  __typename?: "DoTaskResponse";
  status: DoTaskResponse_Status;
};

export enum DoTaskResponse_Status {
  AlreadyDone = "ALREADY_DONE",
  PermissionDenied = "PERMISSION_DENIED",
  Success = "SUCCESS",
  TaskExpired = "TASK_EXPIRED",
  TaskNotFound = "TASK_NOT_FOUND",
}

export type JoinResponse = {
  __typename?: "JoinResponse";
  status: JoinResponse_Status;
};

export enum JoinResponse_Status {
  NotEligible = "NOT_ELIGIBLE",
  Success = "SUCCESS",
}

export type LoginInput = {
  address: Scalars["EVMAddress"]["input"];
  chainId: Scalars["Int"]["input"];
  signature: Scalars["String"]["input"];
  signedMessage: Scalars["String"]["input"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  data?: Maybe<User>;
  message: Scalars["String"]["output"];
  status: LoginResponse_Status;
};

export enum LoginResponse_Status {
  AssignMnemonicUsernameFailed = "ASSIGN_MNEMONIC_USERNAME_FAILED",
  InvalidAddress = "INVALID_ADDRESS",
  InvalidChain = "INVALID_CHAIN",
  SignatureVerifyFailed = "SIGNATURE_VERIFY_FAILED",
  Success = "SUCCESS",
  UserNotFound = "USER_NOT_FOUND",
}

export type Mutation = {
  __typename?: "Mutation";
  cancelTask: CancelTaskResponse;
  checkAccess: CheckAccessResponse;
  createTask: CreateTaskResponse;
  doTask: DoTaskResponse;
  login: LoginResponse;
  stake: StakeResponse;
};

export type MutationCancelTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationCreateTaskArgs = {
  input: TaskInput;
};

export type MutationDoTaskArgs = {
  input: DoTaskInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationStakeArgs = {
  amount: Scalars["Int"]["input"];
};

/** The `OrderDirection` enum type provides sorting directions. */
export enum OrderDirection {
  /** `ASC` sort in ascending order. */
  Asc = "ASC",
  /** `DESC` sort in descending order. */
  Desc = "DESC",
}

/** The `PageInfo` type provides pagination info for lists. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** `endCursor` the cursor of the last item in the current page. */
  endCursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** `hasNextPage` whether there are results in the connection after the current page. */
  hasNextPage: Scalars["Boolean"]["output"];
  /** `hasPreviousPage` whether there are results in the connection before the current page.. */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** `startCursor` the cursor of the first item in the current page. */
  startCursor?: Maybe<Scalars["Cursor"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  me?: Maybe<User>;
  task: TaskResponse;
  tasks: TaskPage;
};

export type QueryTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTasksArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<TaskStatus>;
};

export type StakeResponse = {
  __typename?: "StakeResponse";
  status: StakeResponse_Status;
};

export enum StakeResponse_Status {
  InsufficientBalance = "INSUFFICIENT_BALANCE",
  Success = "SUCCESS",
}

export type Task = {
  description: Scalars["String"]["output"];
  endTime: Scalars["Timestamp"]["output"];
  id: Scalars["ID"]["output"];
  rewards: Scalars["Int"]["output"];
  startTime: Scalars["Timestamp"]["output"];
  status: TaskStatus;
  taskType: TaskType;
  title: Scalars["String"]["output"];
};

export type TaskInput = {
  description: Scalars["String"]["input"];
  endTime: Scalars["Timestamp"]["input"];
  rewards: Scalars["Int"]["input"];
  startTime: Scalars["Timestamp"]["input"];
  taskType: TaskType;
  title: Scalars["String"]["input"];
};

export type TaskPage = {
  __typename?: "TaskPage";
  list: Array<Task>;
  pageInfo: PageInfo;
};

export type TaskResponse = {
  __typename?: "TaskResponse";
  data?: Maybe<Task>;
  status: TaskResponse_Status;
};

export enum TaskResponse_Status {
  Success = "SUCCESS",
  TaskNotFound = "TASK_NOT_FOUND",
}

export enum TaskStatus {
  Cancelled = "CANCELLED",
  CommitteeReview = "COMMITTEE_REVIEW",
  End = "END",
  InProgress = "IN_PROGRESS",
  NotStart = "NOT_START",
  PublicReview = "PUBLIC_REVIEW",
}

export enum TaskType {
  BinaryDecision = "BinaryDecision",
  Questionnaire = "Questionnaire",
  Subjective = "Subjective",
}

export type UpdateTaskResponse = {
  __typename?: "UpdateTaskResponse";
  status: UpdateTaskResponse_Status;
};

export enum UpdateTaskResponse_Status {
  InvalidParameter = "INVALID_PARAMETER",
  PermissionDenied = "PERMISSION_DENIED",
  Success = "SUCCESS",
  TaskNotFound = "TASK_NOT_FOUND",
}

export type User = {
  __typename?: "User";
  accessToken: Scalars["String"]["output"];
  address: Scalars["EVMAddress"]["output"];
  cyberClubPass: CyberClubPass;
  myTasks: UserTaskPage;
  points: Scalars["Int"]["output"];
};

export type UserMyTasksArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum UserRole {
  Alien = "ALIEN",
  Committee = "COMMITTEE",
  Public = "PUBLIC",
}

export type UserTask = {
  __typename?: "UserTask";
  choice: Scalars["Boolean"]["output"];
  points: Scalars["Int"]["output"];
  reputations: Scalars["Int"]["output"];
  task: Task;
  win: Scalars["Boolean"]["output"];
};

export type UserTaskPage = {
  __typename?: "UserTaskPage";
  list: Array<UserTask>;
  pageInfo: PageInfo;
};

export type CancelTaskMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type CancelTaskMutation = {
  __typename?: "Mutation";
  cancelTask: {
    __typename?: "CancelTaskResponse";
    status: CancelTaskResponse_Status;
  };
};

export type CheckMutationVariables = Exact<{ [key: string]: never }>;

export type CheckMutation = {
  __typename?: "Mutation";
  checkAccess: {
    __typename?: "CheckAccessResponse";
    isVerified: boolean;
    isStake: boolean;
  };
};

export type DoTaskMutationVariables = Exact<{
  input: DoTaskInput;
}>;

export type DoTaskMutation = {
  __typename?: "Mutation";
  doTask: { __typename?: "DoTaskResponse"; status: DoTaskResponse_Status };
};

export type CreateTaskMutationVariables = Exact<{
  input: TaskInput;
}>;

export type CreateTaskMutation = {
  __typename?: "Mutation";
  createTask: {
    __typename?: "CreateTaskResponse";
    status: CreateTaskResponse_Status;
  };
};

export type LoginMutationVariables = Exact<{
  request: LoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "LoginResponse";
    data?: {
      __typename?: "User";
      accessToken: string;
      address: any;
      points: number;
      cyberClubPass: {
        __typename?: "CyberClubPass";
        role: UserRole;
        minted: boolean;
        reputations: number;
      };
    } | null;
  };
};

export type StakeMutationVariables = Exact<{
  amount: Scalars["Int"]["input"];
}>;

export type StakeMutation = {
  __typename?: "Mutation";
  stake: { __typename?: "StakeResponse"; status: StakeResponse_Status };
};

export type AccountQueryVariables = Exact<{ [key: string]: never }>;

export type AccountQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "User";
    accessToken: string;
    address: any;
    points: number;
    cyberClubPass: {
      __typename?: "CyberClubPass";
      role: UserRole;
      minted: boolean;
      reputations: number;
    };
  } | null;
};

export type AccountFragment = {
  __typename?: "User";
  accessToken: string;
  address: any;
  points: number;
  cyberClubPass: {
    __typename?: "CyberClubPass";
    role: UserRole;
    minted: boolean;
    reputations: number;
  };
};

export type MyTasksQueryVariables = Exact<{ [key: string]: never }>;

export type MyTasksQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "User";
    myTasks: {
      __typename?: "UserTaskPage";
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: any | null;
        endCursor?: any | null;
      };
      list: Array<{
        __typename?: "UserTask";
        win: boolean;
        points: number;
        reputations: number;
        choice: boolean;
        task: {
          __typename?: "BinaryDecisionTask";
          choice?: boolean | null;
          right: number;
          wrong: number;
          id: string;
          taskType: TaskType;
          title: string;
          description: string;
          startTime: any;
          endTime: any;
          rewards: number;
          status: TaskStatus;
        };
      }>;
    };
  } | null;
};

export type TaskFragment = {
  __typename?: "BinaryDecisionTask";
  choice?: boolean | null;
  right: number;
  wrong: number;
  id: string;
  taskType: TaskType;
  title: string;
  description: string;
  startTime: any;
  endTime: any;
  rewards: number;
  status: TaskStatus;
};

export type PageInfoFragment = {
  __typename?: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: any | null;
  endCursor?: any | null;
};

export type TasksQueryVariables = Exact<{
  status?: InputMaybe<TaskStatus>;
}>;

export type TasksQuery = {
  __typename?: "Query";
  tasks: {
    __typename?: "TaskPage";
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: any | null;
      endCursor?: any | null;
    };
    list: Array<{
      __typename?: "BinaryDecisionTask";
      choice?: boolean | null;
      right: number;
      wrong: number;
      id: string;
      taskType: TaskType;
      title: string;
      description: string;
      startTime: any;
      endTime: any;
      rewards: number;
      status: TaskStatus;
    }>;
  };
};

export const AccountFragmentDoc = gql`
  fragment Account on User {
    accessToken
    address
    points
    cyberClubPass {
      role
      minted
      reputations
    }
  }
`;
export const TaskFragmentDoc = gql`
  fragment Task on Task {
    id
    taskType
    title
    description
    startTime
    endTime
    rewards
    status
    ... on BinaryDecisionTask {
      choice
      right
      wrong
    }
  }
`;
export const PageInfoFragmentDoc = gql`
  fragment PageInfo on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`;
export const CancelTaskDocument = gql`
  mutation cancelTask($id: ID!) {
    cancelTask(id: $id) {
      status
    }
  }
`;
export const CheckDocument = gql`
  mutation check {
    checkAccess {
      isVerified
      isStake
    }
  }
`;
export const DoTaskDocument = gql`
  mutation doTask($input: DoTaskInput!) {
    doTask(input: $input) {
      status
    }
  }
`;
export const CreateTaskDocument = gql`
  mutation createTask($input: TaskInput!) {
    createTask(input: $input) {
      status
    }
  }
`;
export const LoginDocument = gql`
  mutation login($request: LoginInput!) {
    login(input: $request) {
      data {
        ...Account
      }
    }
  }
  ${AccountFragmentDoc}
`;
export const StakeDocument = gql`
  mutation stake($amount: Int!) {
    stake(amount: $amount) {
      status
    }
  }
`;
export const AccountDocument = gql`
  query account {
    me {
      ...Account
    }
  }
  ${AccountFragmentDoc}
`;
export const MyTasksDocument = gql`
  query myTasks {
    me {
      myTasks {
        pageInfo {
          ...PageInfo
        }
        list {
          task {
            ...Task
          }
          win
          points
          reputations
          choice
        }
      }
    }
  }
  ${PageInfoFragmentDoc}
  ${TaskFragmentDoc}
`;
export const TasksDocument = gql`
  query tasks($status: TaskStatus) {
    tasks(status: $status) {
      pageInfo {
        ...PageInfo
      }
      list {
        ...Task
      }
    }
  }
  ${PageInfoFragmentDoc}
  ${TaskFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    cancelTask(
      variables: CancelTaskMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<CancelTaskMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CancelTaskMutation>(CancelTaskDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "cancelTask",
        "mutation",
        variables
      );
    },
    check(
      variables?: CheckMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<CheckMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CheckMutation>(CheckDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "check",
        "mutation",
        variables
      );
    },
    doTask(
      variables: DoTaskMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<DoTaskMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DoTaskMutation>(DoTaskDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "doTask",
        "mutation",
        variables
      );
    },
    createTask(
      variables: CreateTaskMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<CreateTaskMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateTaskMutation>(CreateTaskDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "createTask",
        "mutation",
        variables
      );
    },
    login(
      variables: LoginMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<LoginMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoginMutation>(LoginDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "login",
        "mutation",
        variables
      );
    },
    stake(
      variables: StakeMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<StakeMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<StakeMutation>(StakeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "stake",
        "mutation",
        variables
      );
    },
    account(
      variables?: AccountQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<AccountQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AccountQuery>(AccountDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "account",
        "query",
        variables
      );
    },
    myTasks(
      variables?: MyTasksQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<MyTasksQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MyTasksQuery>(MyTasksDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "myTasks",
        "query",
        variables
      );
    },
    tasks(
      variables?: TasksQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<TasksQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TasksQuery>(TasksDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "tasks",
        "query",
        variables
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  const sdk = getSdk(client, withWrapper);
  const genKey = <V extends Record<string, unknown> = Record<string, unknown>>(
    name: string,
    object: V = {} as V
  ): SWRKeyInterface => [
    name,
    ...Object.keys(object)
      .sort()
      .map((key) => object[key]),
  ];
  return {
    ...sdk,
    useAccount(
      variables?: AccountQueryVariables,
      config?: SWRConfigInterface<AccountQuery, ClientError>
    ) {
      return useSWR<AccountQuery, ClientError>(
        genKey<AccountQueryVariables>("Account", variables),
        () => sdk.account(variables),
        config
      );
    },
    useMyTasks(
      variables?: MyTasksQueryVariables,
      config?: SWRConfigInterface<MyTasksQuery, ClientError>
    ) {
      return useSWR<MyTasksQuery, ClientError>(
        genKey<MyTasksQueryVariables>("MyTasks", variables),
        () => sdk.myTasks(variables),
        config
      );
    },
    useTasks(
      variables?: TasksQueryVariables,
      config?: SWRConfigInterface<TasksQuery, ClientError>
    ) {
      return useSWR<TasksQuery, ClientError>(
        genKey<TasksQueryVariables>("Tasks", variables),
        () => sdk.tasks(variables),
        config
      );
    },
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;
