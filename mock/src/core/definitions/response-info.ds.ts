export interface ResponseInfoDS {
    headers: { [name: string]: string };
    status: number;
    statusText: string;
    error?: any;
    body?: any;
  }