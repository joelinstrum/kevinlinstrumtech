import {
  ContainerOuter,
  ContainerInner,
  Header,
  ImageGallery,
  PageBlurb,
  Spacer,
} from "components";
import { pageProjectsText } from "../../constants";
import { projectGalleries } from "constants/galleries";

const Projects = () => {
  return (
    <ContainerOuter>
      <Header />
      <ContainerInner>
        <PageBlurb
          title={pageProjectsText.TITLE}
          text={pageProjectsText.TEXT}
        />
        <Spacer height={40} />
        <ImageGallery imageGallery={projectGalleries} />
      </ContainerInner>
    </ContainerOuter>
  );
};

export default Projects;
