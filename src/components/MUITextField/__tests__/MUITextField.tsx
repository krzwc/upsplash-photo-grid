import React from "react";
import MUITextField from "..";
import * as enzyme from "enzyme";

const onChange = () => {};

describe("MUITextField", () => {
  test("renders ul properly", () => {
    const mUITextField = enzyme.mount(<MUITextField onChange={onChange} />);
    expect(mUITextField.find("input").exists()).toBe(true);
  });

  test("renders img src properly", () => {
    const mUITextField = enzyme.mount(<MUITextField onChange={onChange} />);
    expect(mUITextField.find("input").prop("placeholder")).toBe("Search...");
  });
});
