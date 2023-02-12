import { TImage } from "types/image";

const cacheImages = async (directory: string, images: any) => {
  const promises = await images.map((imgObj: TImage) => {
    return new Promise((resolve: any, reject: any) => {
      const img = new Image();
      img.src = `${directory}/${imgObj.src}`;
      img.onload = resolve();
      img.onerror = reject();
    });
  });
  await Promise.all(promises);
};

export default cacheImages;
