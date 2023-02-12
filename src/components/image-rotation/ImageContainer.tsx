import { useState, useEffect, useRef } from "react";
import { TImage } from "types/image";
import Fade from "@mui/material/Fade";

interface ImageContainerProps {
  image: TImage;
  timeToChange: number;
  speed?: number;
}

const dir = `${process.env.PUBLIC_URL}/assets/images/rotating-images`;

const ImageContainer: React.FC<ImageContainerProps> = ({
  image,
  timeToChange,
  speed = 1000,
}) => {
  const [fadeIn, setFadeIn] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current);
      setFadeIn(true);
    }
    timer.current = setInterval(() => {
      setFadeIn(false);
    }, timeToChange - 1000);
    return () => clearInterval(timer.current);
    // eslint-disable-next-line
  }, [image.src]);

  return (
    <Fade in={fadeIn} timeout={1000}>
      <div>
        <img src={`${dir}/${image.src}`} alt={image.name} />
        <div>
          <div>{image.name}</div>
          <div>{image.caption}</div>
        </div>
      </div>
    </Fade>
  );
};

export default ImageContainer;
