// NOTE: Update this as needed
export interface Gif {
  id: string;
  title: string;
  images: Images;
}

interface Images {
  downsized_still: {
    height: string;
    width: string;
    url: string;
  };
}
