import { ContainerOuter, Header, PageBlurb } from "components";
import { pageAboutText } from "../../constants";

const About = () => {
  return (
    <ContainerOuter>
      <Header />
      <PageBlurb title={pageAboutText.TITLE} text={pageAboutText.TEXT} />
    </ContainerOuter>
  );
};

export default About;
