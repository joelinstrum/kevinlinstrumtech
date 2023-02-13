import { TImage } from "./image";

export interface IGallery {
  name: string;
  description: string;
  galleryImages: TImage[];
  location?: string;
  type?: string;
  date?: string;
  value?: string;
}

export interface IGalleries {
  [key: string]: IGallery;
}
