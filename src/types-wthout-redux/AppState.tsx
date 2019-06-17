import { Imgs } from "./Imgs";

type GenericAppState<T> = {
  keyword?: string;
  isFetching?: boolean;
  payload?: T;
};

export type AppState = GenericAppState<Imgs>;

export const initialState: AppState = {};
