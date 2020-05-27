import axios from 'axios';

class ApiClient {
  private url = '/';

  private token: string | null = null;

  constructor(url: string, token?: string) {
    this.url = url;
    this.token = token || null;
  }

  private request = <Data>({
    method,
    endpoint,
    params,
    payload,
    noAuth,
  }: ApiRequestOptions): Promise<ApiRequestReturn<Data>> => {
    const { url, token } = this;

    return new Promise((resolve, reject) =>
      axios({
        data: payload,
        method,
        params,
        url: url + endpoint,
        headers: {
          Authorization: noAuth || !token ? undefined : `Token ${token}`,
        },
      })
        .then((res) => {
          // 2xx Success
          if (res.status >= 200 && res.status <= 299) {
            return resolve({
              rawData: res.data,
            });
          }

          // 4xx Client Errors
          if (res.status >= 400 && res.status <= 499) {
            return resolve({
              error: { errorCode: res.status, errorMessage: res.statusText },
            });
          }

          // 5xx Server Errors
          if (res.status >= 500 && res.status <= 599) {
            return resolve({
              error: { errorCode: res.status, errorMessage: res.statusText },
            });
          }

          return reject();
        })
        .catch((err) => reject(err)),
    );
  };

  public fetch = <Data>(
    endpoint: string,
    params?: ApiParams,
    noAuth?: boolean,
  ): Promise<ApiRequestReturn<Data>> =>
    this.request<Data>({
      method: 'GET',
      endpoint,
      params,
      noAuth,
    });

  public post = <Data>(
    endpoint: string,
    payload: ApiPayload,
    noAuth?: boolean,
  ): Promise<ApiRequestReturn<Data>> =>
    this.request<Data>({
      method: 'POST',
      endpoint,
      payload,
      noAuth,
    });

  public delete = <Data>(
    endpoint: string,
    noAuth?: boolean,
  ): Promise<ApiRequestReturn<Data>> =>
    this.request<Data>({
      method: 'DELETE',
      endpoint,
      noAuth,
    });
}

export type ApiMethods = 'GET' | 'POST' | 'DELETE';

export type ApiParams = Record<string, string | number | boolean> | undefined;

export type ApiPayload = Record<string, any> | undefined;

export interface ApiRequestOptions {
  method: ApiMethods;
  endpoint: string;
  params?: ApiParams;
  payload?: ApiPayload;
  noAuth?: boolean;
}

export interface ApiRequestError {
  errorCode?: number;
  errorMessage?: string;
}

export interface ApiRequestReturn<Data> {
  error?: ApiRequestError;
  rawData?: Data | any;
}

export default ApiClient;
