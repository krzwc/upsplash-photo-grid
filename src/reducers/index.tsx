import { combineReducers, Reducer } from "redux";
import { defaultKeyword } from "../utils/defaultKeyword";
import { SET_KEYWORD, REQUEST_IMGS, RECEIVE_IMGS } from "../actions";
import { AppStateKeywordPart, AppStateImgsPart } from "../types/AppState";

export const currentKeyword: Reducer<AppStateKeywordPart> = (
  state = { keyword: defaultKeyword },
  action
) => {
  switch (action.type) {
    case SET_KEYWORD:
      return { ...state, keyword: action.keyword };
    default:
      return state;
  }
};

export const imgs: Reducer<AppStateImgsPart> = (
  state = {
    isFetching: false,
    payload: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_IMGS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_IMGS:
      return {
        ...state,
        isFetching: false,
        payload: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  imgs,
  currentKeyword
});

export default rootReducer;
