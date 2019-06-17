import React from "react";
import ImageGridList from "../components/ImageGridList";
import * as enzyme from "enzyme";

const tileData = [
  { img: "http://aaa.com", title: "aaa", cols: 1 },
  { img: "http://bbb.com", title: "bbb", cols: 2 }
];

describe("ImageGridList", () => {
  test("renders ul properly", () => {
    const imageGridList = enzyme.mount(<ImageGridList tileData={tileData} />);
    expect(imageGridList.find("ul").exists()).toBe(true);
  });

  test("renders img src properly", () => {
    const imageGridList = enzyme.mount(<ImageGridList tileData={tileData} />);
    expect(
      imageGridList
        .find("img")
        .at(1)
        .prop("src")
    ).toBe("http://bbb.com");
  });
});
