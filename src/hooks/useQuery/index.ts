import { useReducer } from 'react';
import { reducer, initialState, UseQueryState } from './reducer';
import { STARTED, SUCCEEDED, FAILED, RESET } from './constants';
import ApiClient, {
  ApiMethods,
  ApiParams,
  ApiPayload,
  ApiRequestError,
  ApiRequestReturn,
} from 'src/ApiClient';

const useQuery = <Data = any>({
  apiClient,
  endpoint,
  method,
  digest,
  noAuth,
}: UseQueryOptions<Data>): UseQuery<Data> => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleResponse = ({ error, rawData }: ApiRequestReturn<Data>) =>
    new Promise((resolve, reject) => {
      if (error) {
        dispatch({
          type: FAILED,
          payload: error,
        });

        return reject();
      }

      const data: Data = digest ? digest(rawData) : rawData;

      dispatch({
        type: SUCCEEDED,
        payload: {
          data,
        },
      });

      return resolve(data);
    });

  const handleCatch = ({ errorCode, errorMessage }: ApiRequestError) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: FAILED,
        payload: {
          errorCode,
          errorMessage,
        },
      });
      return reject();
    });

  const submit: UseQuerySubmit = (options = {}) => {
    const { payload, params } = options;

    dispatch({ type: STARTED });

    if (method === 'GET')
      return apiClient
        .fetch<Data>(endpoint, params, noAuth)
        .then(handleResponse)
        .catch(handleCatch);

    if (method === 'POST')
      return apiClient
        .post<Data>(endpoint, payload, noAuth)
        .then(handleResponse)
        .catch(handleCatch);

    if (method === 'DELETE')
      return apiClient
        .delete<Data>(endpoint, noAuth)
        .then(handleResponse)
        .catch(handleCatch);

    throw new Error(`<useQuery> invalid api method "${method}"`);
  };

  const reset: UseQueryReset = () =>
    new Promise((resolve) => {
      dispatch({ type: RESET });
      return resolve();
    });

  return {
    ...(state as UseQueryState<Data>),
    reset,
    submit,
  };
};

export interface UseQueryOptions<Data> {
  apiClient: ApiClient;
  endpoint: string;
  method: ApiMethods;
  digest?: (rawData: any) => Data;
  noAuth?: boolean;
}

export interface UseQuery<Data> extends UseQueryState<Data> {
  reset: UseQueryReset;
  submit: UseQuerySubmit;
}

export type UseQuerySubmit = (options?: {
  payload?: ApiPayload;
  params?: ApiParams;
}) => Promise<any>;

export type UseQueryReset = () => Promise<void>;

export default useQuery;
