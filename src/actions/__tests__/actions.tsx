import * as actions from "..";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { initialState } from "../../utils/initialState";

test("setKeyword should create an action to create a new keyword", () => {
  const kw = "plants";
  const expectedAction = {
    type: actions.SET_KEYWORD,
    keyword: kw
  };
  expect(actions.setKeyword(kw)).toEqual(expectedAction);
});

test("requestImgs should create an action to request images", () => {
  const kw = "plants";
  const expectedAction = {
    type: actions.REQUEST_IMGS,
    keyword: kw
  };
  expect(actions.requestImgs(kw)).toEqual(expectedAction);
});

test("receiveImgs should create an action to receive images", () => {
  const kw = "plants";
  const jsonStringified = JSON.stringify({ results: [] });
  const json = JSON.parse(jsonStringified);
  const expectedAction = {
    type: actions.RECEIVE_IMGS,
    keyword: kw,
    payload: []
  };
  expect(actions.receiveImgs(kw, json)).toEqual(expectedAction);
});

test("if isFetching is false then shouldFetchImgs returns true", () => {
  expect(actions.shouldFetchImgs(initialState)).toEqual(true);
});

// async action creators
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test("fetchImgs dispatches requestImgs and receiveImgs", () => {
    fetchMock.getOnce(
      "https://api.unsplash.com/search/photos/?page=1&per_page=10&query=plants&client_id=dcbe7b61e55f00a8ffe49e9131cf5454cea68fa52077599cf250e44a718267a1",
      {
        body: { results: [{ id: "string", urls: { small: "url" } }] },
        headers: { "content-type": "application/json" }
      }
    );

    const kw = "plants";

    const expectedActions = [
      { type: actions.REQUEST_IMGS, keyword: kw },
      {
        type: actions.RECEIVE_IMGS,
        keyword: kw,
        payload: [{ id: "string", urls: { small: "url" } }]
      }
    ];
    const store = mockStore({
      currentKeyword: { keyword: "" },
      imgs: { isFetching: false, payload: [] }
    });

    return store.dispatch<any>(actions.fetchImgs(kw)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("fetchImgsIfNeeded dispatches requestImgs and receiveImgs when isFetching: false", () => {
    fetchMock.getOnce(
      "https://api.unsplash.com/search/photos/?page=1&per_page=10&query=plants&client_id=dcbe7b61e55f00a8ffe49e9131cf5454cea68fa52077599cf250e44a718267a1",
      {
        body: { results: [{ id: "string", urls: { small: "url" } }] },
        headers: { "content-type": "application/json" }
      }
    );

    const kw = "plants";

    const expectedActions = [
      { type: actions.REQUEST_IMGS, keyword: kw },
      {
        type: actions.RECEIVE_IMGS,
        keyword: kw,
        payload: [{ id: "string", urls: { small: "url" } }]
      }
    ];
    const store = mockStore({
      currentKeyword: { keyword: "" },
      imgs: { isFetching: false, payload: [] }
    });

    return store.dispatch<any>(actions.fetchImgsIfNeeded(kw)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("fetchImgsIfNeeded returns undefined when isFetching: true", () => {
    fetchMock.getOnce(
      "https://api.unsplash.com/search/photos/?page=1&per_page=10&query=plants&client_id=dcbe7b61e55f00a8ffe49e9131cf5454cea68fa52077599cf250e44a718267a1",
      {
        body: { results: [{ id: "string", urls: { small: "url" } }] },
        headers: { "content-type": "application/json" }
      }
    );

    const kw = "plants";

    const expectedActions = [
      { type: actions.REQUEST_IMGS, keyword: "" },
      {
        type: actions.RECEIVE_IMGS,
        keyword: "",
        payload: []
      }
    ];
    const store = mockStore({
      currentKeyword: { keyword: "" },
      imgs: { isFetching: true, payload: [] }
    });

    return expect(store.dispatch<any>(actions.fetchImgsIfNeeded(kw))).toBe(
      undefined
    );
  });
});
