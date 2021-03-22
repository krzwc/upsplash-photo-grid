import { Imgs } from "../ImageGridList/types";
import { Dispatch } from "redux";

export type AppStateKeywordPart = {
  keyword: string;
};

type GenericAppStateImgsPart<T> = {
  isFetching: boolean;
  payload: T;
};

export type AppStateImgsPart = GenericAppStateImgsPart<Imgs>;

export type AppState = {
  currentKeyword: AppStateKeywordPart;
  imgs: AppStateImgsPart;
};

type GenericAppProps<T> = {
  keyword: string;
  payload: T;
  isFetching: boolean;
  dispatch: Dispatch<any>;
};

export type AppProps = GenericAppProps<Imgs>;
