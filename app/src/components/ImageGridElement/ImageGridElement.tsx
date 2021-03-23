import { FunctionComponent, useEffect, useRef } from "react";

const ImageGridElement: FunctionComponent<{ img: string }> = ({ img }) => {
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const baseUrl = "http://res.cloudinary.com/deoe6zzdw/image/fetch";
    const pixelRatio = window.devicePixelRatio || 1.0;

    if (imgRef.current) {
      const { clientWidth, clientHeight } = imgRef.current;
      const imageParams = `w_${
        100 * Math.round((clientWidth * pixelRatio) / 100)
      },h_${
        100 * Math.round((clientHeight * pixelRatio) / 100)
      },c_fill,g_auto,f_auto`;
      const url = `${baseUrl}/${imageParams}/${img}`;
      imgRef.current.style.backgroundImage = `url('${url}')`;
    }
  });
  return (
    <div
      className="bg-gray-800 h-150px w-150px flex-grow flex-shrink-0 m-1 bg-cover bg-no-repeat bg-center"
      ref={imgRef}
    />
  );
};

export default ImageGridElement;
