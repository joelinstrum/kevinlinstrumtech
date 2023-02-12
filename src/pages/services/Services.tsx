import { ContainerOuter, Header, PageBlurb } from "components";
import { pageServicesText } from "../../constants";

const Services = () => {
  return (
    <ContainerOuter>
      <Header />
      <PageBlurb title={pageServicesText.TITLE} text={pageServicesText.TEXT} />
    </ContainerOuter>
  );
};

export default Services;
