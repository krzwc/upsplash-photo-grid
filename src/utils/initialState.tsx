import { AppState } from "../types/AppState";
import { defaultKeyword } from "../utils/defaultKeyword";

export const initialState: AppState = {
  currentKeyword: { keyword: defaultKeyword },
  imgs: { isFetching: false, payload: [] }
};
