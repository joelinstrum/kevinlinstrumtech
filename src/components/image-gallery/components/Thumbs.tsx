import { styled } from "@mui/system";
import { IGallery } from "types/gallery";

const ThumbsStyled = styled("div")(() => ({
  "& > ul": {
    padding: 0,
    margin: 0,
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "& > li": {
      marginBottom: "10px",
    },
  },
  "& > ul > li > img": {
    width: "200px",
    height: "140px",
    objectFit: "cover",
  },
}));

interface ThumbsProps {
  imageGallery: IGallery;
}

const Thumbs: React.FC<ThumbsProps> = ({ imageGallery }) => {
  return (
    <ThumbsStyled>
      <ul>
        {imageGallery.galleryImages.map((imageObject, i) => (
          <li key={`${imageObject.name}-${i}`}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/${imageObject.src}`}
              alt={imageObject.caption}
            />
          </li>
        ))}
      </ul>
    </ThumbsStyled>
  );
};

export default Thumbs;
