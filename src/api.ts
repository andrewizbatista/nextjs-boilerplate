import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const request = <Data>({
  method,
  endpoint,
  baseUrl = API_URL,
  params,
  payload,
  noAuth,
}: FetcherOptions): Promise<Data> => {
  return new Promise((resolve, reject) =>
    axios({
      data: payload,
      method,
      params,
      url: baseUrl + endpoint,
    })
      .then((res) => {
        console.info(res); // eslint-disable-line no-console

        // 2xx Success
        if (res.status >= 200 && res.status <= 299) {
          return resolve(res.data);
        }

        // 4xx Client Errors
        if (res.status >= 400 && res.status <= 499) {
          return reject(res.status);
        }

        // 5xx Server Errors
        if (res.status >= 500 && res.status <= 599) {
          return reject(res.status);
        }

        return reject();
      })
      .catch((err) => {
        console.error(err); // eslint-disable-line no-console

        return reject(err);
      }),
  );
};

export const fetcher = <Data>(
  endpoint: string,
  params?: ApiParams,
  noAuth?: boolean,
) =>
  request<Data>({
    method: 'GET',
    endpoint,
    params,
    noAuth,
  });

export const poster = <Data>(
  endpoint: string,
  payload: ApiPayload,
  noAuth?: boolean,
) =>
  request<Data>({
    method: 'POST',
    endpoint,
    payload,
    noAuth,
  });
