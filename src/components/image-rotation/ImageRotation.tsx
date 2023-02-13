import { useState, useEffect, useRef } from "react";
import rotatingImages from "data/rotating-images.json";
import { cacheImages } from "utils";
import { TImage } from "types/image";
import ImageRotationStyled from "./ImageRotationStyled";
import ImageContainer from "./ImageContainer";

const images = rotatingImages as unknown as TImage[];
const timeToChange = 10000;
const dir = `${process.env.PUBLIC_URL}/assets/images/rotating-images`;

const ImageRotation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count.current === images.length - 1) {
        count.current = 0;
      } else {
        count.current = count.current + 1;
      }
      setActiveImageIndex(count.current);
    }, timeToChange);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const doImageCache = async () => {
      await cacheImages(dir, images);
      setIsLoading(false);
    };
    doImageCache();
  }, []);

  return (
    <ImageRotationStyled>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ImageContainer
            image={images[activeImageIndex]}
            timeToChange={timeToChange}
            speed={1000}
          />
        </div>
      )}
    </ImageRotationStyled>
  );
};

export default ImageRotation;
