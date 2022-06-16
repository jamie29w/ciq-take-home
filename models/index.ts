export * from './ServerLogEntry';

export interface httpResponse {
  config: any;
  data: any[];
  headers: any;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}
