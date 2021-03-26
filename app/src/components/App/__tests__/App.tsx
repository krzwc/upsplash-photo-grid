import React from "react";
import ReactDOM from "react-dom";
import App from "..";
import { App as NotConnectedApp } from "../App";
import * as enzyme from "enzyme";
import { Dispatch, AnyAction } from "redux";
import { store } from "../../../Store";
import { Provider } from "react-redux";

//todo -> testing of the App component without store connection
// const dispatch: Dispatch = null as any;

// describe("App", () => {
//   test("renders properly without connection to the store", () => {
//     const app = enzyme.mount(
//       <App
//         keyword={"test"}
//         payload={[]}
//         isFetching={false}
//         dispatch={dispatch}
//       />
//     );
//     expect(app.find("#root").exists()).toBe(true);
//   });

//   test("renders img src properly", () => {
//     const app = enzyme.mount(
//       <App
//         keyword={"test"}
//         payload={[]}
//         isFetching={false}
//         dispatch={dispatch}
//       />
//     );
//     expect(app.find("ul").exists()).toBe(false);
//   });
// });

describe("App", () => {
  test("connects to the store, receives props and renders the img grid", () => {
    const app = enzyme.mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(app.find(".ImageGrid").exists()).toBe(true);
  });
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
