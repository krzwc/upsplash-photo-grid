type ServiceLoaded<T> = {
  payload: T;
  isFetching: Boolean;
  didInvalidate: Boolean;
};

export type MyState<T> = ServiceLoaded<T>;
