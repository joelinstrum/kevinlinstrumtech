import { ContainerOuter, Header, ImageRotation, PageBlurb } from "components";
import { pageHomeText } from "../../constants";

const Home = () => {
  return (
    <ContainerOuter>
      <Header />
      <ImageRotation />
      <PageBlurb title={pageHomeText.TITLE} text={pageHomeText.TEXT} />
    </ContainerOuter>
  );
};

export default Home;
