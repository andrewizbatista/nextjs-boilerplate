import axios from 'axios';

import appConfig from 'src/appConfig';

const { API_URL } = appConfig;

const apiRequest = <Data>({
  method,
  endpoint,
  baseUrl = API_URL,
  params,
  payload,
}: ApiRequestOptions): Promise<Data> => {
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
          return resolve(res.data as Data);
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
  apiRequest<Data>({
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
  apiRequest<Data>({
    method: 'POST',
    endpoint,
    payload,
    noAuth,
  });
