import { FunctionComponent, useEffect } from "react";
import { Props, Imgs, TileData } from "./types";
import "./style.css";

export const tileDataCreator = (payload: Imgs) => {
  const tileData: TileData = [];
  payload.forEach((img) => {
    const url = img.urls.small;
    tileData.push(
      Object.assign(
        {},
        {
          img: url.slice(0, url.lastIndexOf("?")),
          title: img.id,
        }
      )
    );
  });

  return tileData;
};

const ImageGridList: FunctionComponent<Props> = ({ tileData }) => {
  useEffect(() => {
    const baseUrl = "http://res.cloudinary.com/deoe6zzdw/image/fetch";

    Array.from(document.querySelectorAll("[data-bg]")).forEach((image) => {
      const { clientWidth, clientHeight } = image;
      const pixelRatio = window.devicePixelRatio || 1.0;
      const imageParams = `w_${
        100 * Math.round((clientWidth * pixelRatio) / 100)
      },h_${
        100 * Math.round((clientHeight * pixelRatio) / 100)
      },c_fill,g_auto,f_auto`;
      const url = `${baseUrl}/${imageParams}/${
        (image as HTMLElement).dataset.bg
      }`;
      (image as HTMLElement).style.backgroundImage = `url('${url}')`;
    });
  });
  return (
    <div className="ImageGrid">
      {tileDataCreator(tileData).map((tile) => (
        <div data-bg={tile.img} key={tile.title} />
      ))}
    </div>
  );
};

export default ImageGridList;
