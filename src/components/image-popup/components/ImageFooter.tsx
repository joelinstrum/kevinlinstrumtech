import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state/store";
import { setIndex } from "state/features/gallerySlice";
import { ImageFooterStyled } from "./ImagePopupStyled";

interface ImageFooterProps {
  size: number;
}

const ImageFooter: React.FC<ImageFooterProps> = ({ size }) => {
  const arr = Array.apply(null, Array(size));
  const { currentIndex } = useSelector(
    (state: RootState) => state.galleryReducer
  );
  const dispatch = useDispatch();
  const clickHandler = (index: number) => {
    dispatch(setIndex(index));
  };
  return (
    <ImageFooterStyled>
      <ul>
        {arr.map((j, i) => (
          <li
            key={i}
            className={`${i === currentIndex && "active"}`}
            onClick={() => clickHandler(i)}
          />
        ))}
      </ul>
    </ImageFooterStyled>
  );
};

export default ImageFooter;
