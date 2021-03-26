import React from "react";
import ImageGridList from "..";
import ImageGridElement from "../../ImageGridElement";
import * as enzyme from "enzyme";

const tileData = [
  { urls: { small: "http://aaa.com" }, id: "aaa" },
  { urls: { small: "http://bbb.com" }, id: "bbb" },
];

describe("ImageGridList", () => {
  test("renders ul properly", () => {
    const imageGridList = enzyme.mount(<ImageGridList tileData={tileData} />);
    expect(imageGridList.find("ul").exists()).toBe(true);
  });

  test.only("renders img src properly", () => {
    const imageGridList = enzyme.mount(<ImageGridList tileData={tileData} />);
    // console.log(imageGridList.find(".ImageGrid").debug());
    expect(imageGridList.find(ImageGridElement).length).toBe(2);
  });
});
