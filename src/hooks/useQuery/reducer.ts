import { STARTED, SUCCEEDED, FAILED, RESET } from './constants';

export const initialState: UseQueryState = {
  data: null,
  errorCode: null,
  errorMessage: null,
  hasError: false,
  hasSucceeded: false,
  isLoading: false,
};

export const reducer: UseQueryReducer = (state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case STARTED:
      return {
        ...state,
        data: null,
        errorCode: null,
        errorMessage: null,
        hasError: false,
        hasSucceeded: false,
        isLoading: true,
      };
    case SUCCEEDED:
      return {
        ...state,
        data: payload?.data || null,
        errorCode: null,
        errorMessage: null,
        hasError: false,
        hasSucceeded: true,
        isLoading: false,
      };
    case FAILED:
      return {
        ...state,
        errorCode: payload?.errorCode || null,
        errorMessage: payload?.errorMessage || null,
        hasError: true,
        hasSucceeded: false,
        isLoading: false,
      };
    case RESET:
      return { ...initialState };

    default:
      throw new Error(`<useQuery> invalid dispatch type "${type}"`);
  }
};

export interface UseQueryState<Data = any> {
  data: Data | null;
  errorCode: number | null;
  errorMessage: string | null;
  hasError: boolean;
  hasSucceeded: boolean;
  isLoading: boolean;
}

export type UseQueryReducer = <Data = any>(
  state: UseQueryState<Data>,
  action: {
    type?: 'STARTED' | 'SUCCEEDED' | 'FAILED' | 'RESET';
    payload?: {
      data?: Data | {};
      errorCode?: number | null;
      errorMessage?: string | null;
    };
  },
) => UseQueryState<Data>;
