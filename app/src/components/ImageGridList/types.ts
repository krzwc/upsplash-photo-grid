export type Props = {
  tileData: Imgs;
};

export type TileData = Array<{ img: string; title: string }>;

export type Imgs = Img[];

export type Img = {
  id: string;
  urls: {
    small: string;
  };
};
