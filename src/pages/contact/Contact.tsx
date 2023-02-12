import { ContainerOuter, Header, PageBlurb } from "components";
import { pageContactText } from "../../constants";

const Contact = () => {
  return (
    <ContainerOuter>
      <Header />
      <PageBlurb title={pageContactText.TITLE} text={pageContactText.TEXT} />
    </ContainerOuter>
  );
};

export default Contact;
