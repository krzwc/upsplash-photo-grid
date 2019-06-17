import React from "react";
import ImageGridListContainer, {
  rowRandomizer,
  masonryLayoutGenerator,
  tileDataCreator
} from "../components/ImageGridListContainer";
import * as enzyme from "enzyme";

test("rowRandomizer randomizes columns properly", () => {
  const arr = [[1, 1, 1], [1, 2], [2, 1]];
  expect(arr).toContainEqual(rowRandomizer());
});

test("masonryLayoutGenerator contains only 1s and 2s", () => {
  const masonry = masonryLayoutGenerator(10);
  expect(masonry).toEqual(expect.arrayContaining([1, 2]));
});

const payload = [
  {
    id: "aaa",
    urls: {
      small: "http://aaa.com"
    }
  },
  {
    id: "bbb",
    urls: {
      small: "http://bbb.com"
    }
  }
];

test("tileDataCreator creates correct tiles", () => {
  const masonry = tileDataCreator(payload);
  expect(masonry).toMatchObject([
    { img: "http://aaa.com", title: "aaa" },
    { img: "http://bbb.com", title: "bbb" }
  ]);
});

describe("ImageGridListContainer", () => {
  test("renders ul properly", () => {
    const imageGridListContainer = enzyme.mount(
      <ImageGridListContainer payload={payload} />
    );
    expect(imageGridListContainer.find("ul").exists()).toBe(true);
  });

  test("renders img src properly", () => {
    const imageGridListContainer = enzyme.mount(
      <ImageGridListContainer payload={payload} />
    );
    expect(
      imageGridListContainer
        .find("img")
        .at(1)
        .prop("src")
    ).toBe("http://bbb.com");
  });
});
