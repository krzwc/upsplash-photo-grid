import * as reducers from "..";
import rootReducer from "..";
import * as actions from "../../actions";
import { AnyAction } from "redux";
import { defaultKeyword } from "../../utils/defaultKeyword";
import { initialState } from "../../utils/initialState";

describe("currentKeyword reducer", () => {
  test("should return the initial state", () => {
    const act: AnyAction = { type: "" };
    expect(reducers.currentKeyword(undefined, act)).toEqual({
      keyword: defaultKeyword
    });
  });

  test("should handle SET_KEYWORD", () => {
    expect(
      reducers.currentKeyword(
        { keyword: defaultKeyword },
        {
          type: actions.SET_KEYWORD,
          keyword: "plants"
        }
      )
    ).toEqual({ keyword: "plants" });
  });
});

describe("imgs reducer", () => {
  test("should return the initial state", () => {
    const act: AnyAction = { type: "" };
    expect(reducers.imgs(undefined, act)).toEqual({
      isFetching: false,
      payload: []
    });
  });

  test("should handle REQUEST_IMGS", () => {
    expect(
      reducers.imgs(
        {
          isFetching: false,
          payload: []
        },
        {
          type: actions.REQUEST_IMGS
        }
      )
    ).toEqual({ isFetching: true, payload: [] });
  });

  test("should handle RECEIVE_IMGS", () => {
    expect(
      reducers.imgs(
        { isFetching: true, payload: [] },
        {
          type: actions.RECEIVE_IMGS,
          payload: [{ id: "string", urls: { small: "url" } }]
        }
      )
    ).toEqual({
      isFetching: false,
      payload: [{ id: "string", urls: { small: "url" } }]
    });
  });
});

describe("rootReducer", () => {
  test("should return the initial state", () => {
    const act: AnyAction = { type: "" };
    expect(rootReducer(undefined, act)).toEqual(initialState);
  });

  test("should handle SET_KEYWORD", () => {
    expect(
      rootReducer(
        {
          imgs: {
            isFetching: false,
            payload: [{ id: "string", urls: { small: "url" } }]
          },
          currentKeyword: { keyword: defaultKeyword }
        },
        {
          type: actions.SET_KEYWORD,
          keyword: "plants"
        }
      )
    ).toEqual({
      imgs: {
        isFetching: false,
        payload: [{ id: "string", urls: { small: "url" } }]
      },
      currentKeyword: { keyword: "plants" }
    });
  });

  test("should handle REQUEST_IMGS", () => {
    expect(
      rootReducer(
        {
          imgs: {
            isFetching: false,
            payload: [{ id: "string", urls: { small: "url" } }]
          },
          currentKeyword: { keyword: defaultKeyword }
        },
        {
          type: actions.REQUEST_IMGS,
          keyword: "plants"
        }
      )
    ).toEqual({
      imgs: {
        isFetching: true,
        payload: [{ id: "string", urls: { small: "url" } }]
      },
      currentKeyword: { keyword: defaultKeyword }
    });
  });

  test("should handle RECEIVE_IMGS", () => {
    expect(
      rootReducer(
        {
          imgs: {
            isFetching: true,
            payload: [{ id: "string", urls: { small: "url" } }]
          },
          currentKeyword: { keyword: defaultKeyword }
        },
        {
          type: actions.RECEIVE_IMGS,
          keyword: "plants",
          payload: [{ id: "different", urls: { small: "different" } }]
        }
      )
    ).toEqual({
      imgs: {
        isFetching: false,
        payload: [{ id: "different", urls: { small: "different" } }]
      },
      currentKeyword: { keyword: defaultKeyword }
    });
  });
});
