import { FunctionComponent } from "react";
import { Imgs } from "./types";
import ImageGridElement from "../ImageGridElement";
import "./style.css";

export const tileDataCreator = (payload: Imgs) =>
  payload.map((imgData) => {
    const url = imgData.urls.small;
    return { img: url.slice(0, url.lastIndexOf("?")), title: imgData.id };
  });

const ImageGridList: FunctionComponent<{ tileData: Imgs }> = ({ tileData }) => {
  return (
    <div className="ImageGrid w-screen my-0 mx-auto flex flex-wrap items-center p-1 pt-96px">
      {tileDataCreator(tileData).map((tile) => (
        <ImageGridElement img={tile.img} key={tile.title} />
      ))}
    </div>
  );
};

export default ImageGridList;
