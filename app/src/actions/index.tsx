import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { APP_ID } from "../utils/credentials";
import { apiUrl } from "../utils/apiUrl";

import { AppState } from "../components/App/types";

export const REQUEST_IMGS = "REQUEST_IMGS";
export const RECEIVE_IMGS = "RECEIVE_IMGS";
export const SET_KEYWORD = "SET_KEYWORD";

export const setKeyword: ActionCreator<Action> = (keyword: string) => ({
  type: SET_KEYWORD,
  keyword
});

export const requestImgs: ActionCreator<Action> = (keyword: string) => ({
  type: REQUEST_IMGS,
  keyword
});

export const receiveImgs: ActionCreator<Action> = (keyword: string, json) => ({
  type: RECEIVE_IMGS,
  keyword,
  payload: json.results
});

export const fetchImgs: ActionCreator<
  ThunkAction<Promise<any>, AppState, undefined, Action>
> = (keyword: string) => async dispatch => {
  dispatch(requestImgs(keyword));
  const url = apiUrl(keyword, APP_ID);
  // const response = await fetch(url);
  // const json = await response.json();
  // dispatch(receiveImgs(keyword, json));

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveImgs(keyword, json)));
};

export const shouldFetchImgs = (state: AppState) => {
  if (state.imgs.isFetching) {
    return false;
  }
  return true;
};

export const fetchImgsIfNeeded: ActionCreator<
  ThunkAction<Promise<void> | undefined, AppState, undefined, Action>
> = (keyword: string) => (dispatch, getState) => {
  if (shouldFetchImgs(getState())) {
    return dispatch(fetchImgs(keyword));
  }
};
