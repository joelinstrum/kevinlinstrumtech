import { styled } from "@mui/system";
import { ContainerInner } from "components";

interface PageBlurbProps {
  title: string;
  text: string | React.ReactNode;
}

const PageBlurbStyled = styled("div")(({ theme }) => ({
  "& > div:nth-of-type(1)": {
    fontSize: "20px",
    fontWeight: "bold",
  },
  "& > div:nth-of-type(2)": {
    color: theme.palette.secondary.main,
  },
}));

const PageBlurb: React.FC<PageBlurbProps> = ({ title, text }) => {
  return (
    <ContainerInner>
      <PageBlurbStyled>
        <div>{title}</div>
        <div>{text}</div>
      </PageBlurbStyled>
    </ContainerInner>
  );
};

export default PageBlurb;
