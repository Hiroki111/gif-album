export interface Gif {
  id: string;
  title: string;
  images: Images;
}

interface Images {
  original: {
    height: string;
    width: string;
    url: string;
  };
  downsized_still: {
    height: string;
    width: string;
    url: string;
  };
}
