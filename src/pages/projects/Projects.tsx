import { ContainerOuter, Header, PageBlurb } from "components";
import { pageProjectsText } from "../../constants";

const Projects = () => {
  return (
    <ContainerOuter>
      <Header />
      <PageBlurb title={pageProjectsText.TITLE} text={pageProjectsText.TEXT} />
    </ContainerOuter>
  );
};

export default Projects;
