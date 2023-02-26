import { useState } from "react";
import { ContainerOuter, Header, PageBlurb, ContainerInner } from "components";
import { pageAssessmentText } from "../../constants";
import { AssessmentForm } from "components";

const Assessment = () => {
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
              title={pageAssessmentText.TITLE}
              text={pageAssessmentText.TEXT}
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

export default Assessment;
