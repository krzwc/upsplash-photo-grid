import React from "react";
import { Imgs } from "../../types/Imgs";
import { TileData } from "../../types/TileData";
import ImageGridList from "../ImageGridList";

export const rowRandomizer = () => {
  const range = 3;
  const randomNumber1 = Math.random() > 0.5 ? 2 : 1;
  const randomNumber2 = Math.random() > 0.5 ? 2 : 1;
  return randomNumber1 === 2
    ? [randomNumber1, range - randomNumber1]
    : randomNumber2 === 2
    ? [randomNumber1, randomNumber2]
    : [randomNumber1, randomNumber2, range - randomNumber1 - randomNumber2];
};

export const masonryLayoutGenerator = (imgAmount: number) => {
  let columnArray: Array<number> = [];
  let randomizingRange = Math.ceil(imgAmount / 2);
  for (let i = 0; i < randomizingRange; i++) {
    columnArray = columnArray.concat(rowRandomizer());
  }
  return columnArray;
};

export const tileDataCreator = (payload: Imgs) => {
  const tileData: TileData = [];
  const cols = masonryLayoutGenerator(10);
  let i = 0;
  payload.forEach(img => {
    tileData.push(
      Object.assign({}, { img: img.urls.small, title: img.id, cols: cols[i] })
    );
    i++;
  });

  return tileData;
};

type Props = {
  payload: Imgs;
};

const ImageGridListContainer = ({ payload }: Props) => (
  <ImageGridList tileData={tileDataCreator(payload)} />
);

export default ImageGridListContainer;
