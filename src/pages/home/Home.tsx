import {
  CallToAction,
  ContainerOuter,
  ContainerInner,
  Header,
  ImageRotation,
  PageBlurb,
  ThinBanner,
} from "components";
import { pageHomeText } from "../../constants";

const Home = () => {
  return (
    <ContainerOuter>
      <Header />
      <ThinBanner />
      <ContainerInner></ContainerInner>
      <ImageRotation />
      <PageBlurb title={pageHomeText.TITLE} text={pageHomeText.TEXT} />
    </ContainerOuter>
  );
};

export default Home;
