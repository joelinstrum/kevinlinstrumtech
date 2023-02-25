import { useState } from "react";
import { ContainerOuter, Header, PageBlurb, ContainerInner } from "components";
import { pageContactText } from "../../constants";
import { AssessmentForm } from "components";

const Contact = () => {
  const [whichForm, setWhichForm] = useState("Free Assessment");
  const setForm = (formTitle: string) => {
    setWhichForm(formTitle);
  };
  const onSubmit = (data: any) => {
    console.log(data);
    setWhichForm("submitted");
  };

  return (
    <ContainerOuter>
      <Header />

      <ContainerInner>
        {whichForm === "Free Assessment" && (
          <>
            <PageBlurb
              title={pageContactText.TITLE}
              text={pageContactText.TEXT}
            />
            <AssessmentForm onCancel={() => setForm("")} onSubmit={onSubmit} />
          </>
        )}
        {whichForm === "submitted" && (
          <div style={{ marginTop: "20px" }}>
            <div>Thank for contacting us</div>
            <div>We will respond to your request as soon as possible</div>
          </div>
        )}
      </ContainerInner>
    </ContainerOuter>
  );
};

export default Contact;
