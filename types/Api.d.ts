type ApiMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

type ApiParams = Record<string, string | number | boolean> | null;

type ApiPayload = Record<string, any> | null;

interface FetcherOptions {
  method: ApiMethods;
  endpoint: string;
  baseUrl?: string;
  params?: ApiParams;
  payload?: ApiPayload;
  noAuth?: boolean;
}
