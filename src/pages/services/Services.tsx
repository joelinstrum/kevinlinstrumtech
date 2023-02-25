import { useState } from "react";
import {
  ContainerInner,
  ContainerOuter,
  Header,
  PageBlurb,
  ServiceCalls,
} from "components";
import { pageServicesText } from "../../constants";

const Services = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    setSubmitted(true);
  };

  return (
    <ContainerOuter>
      <Header />
      <PageBlurb title={pageServicesText.TITLE} text={pageServicesText.TEXT} />
      <ContainerInner>
        {submitted ? (
          <div>Thank you for contacting us</div>
        ) : (
          <ServiceCalls onSubmit={onSubmit} />
        )}
      </ContainerInner>
    </ContainerOuter>
  );
};

export default Services;
