import { TImage } from "./image";

interface IGallery {
  name: string;
  description: string;
  galleryImages: TImage[];
  location?: string;
  type?: string;
  date?: string;
  value?: string;
}

interface IGalleries {
  [key: string]: IGallery;
}
