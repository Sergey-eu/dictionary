// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type JsonDataItem = Record<string, any>;
export type JsonData = Array<JsonDataItem>;

export type WithDataTest = Readonly<{
  dataTest: string;
}>;

export type WithOptionalDataTest = Readonly<{
  dataTest?: string;
}>;

export enum RequestStatus {
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error',
  Pending = 'Pending',
}

