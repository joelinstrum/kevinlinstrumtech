import { useState, useEffect } from "react";
import { ContainerOuter, Header, PageBlurb, ContainerInner } from "components";
import { pageContactText } from "../../constants";
import { Assessment, ServiceCalls } from "components";
import ContactStyled from "./ContactStyled";
import ContactCard from "./ContactCard";

const Contact = () => {
  const [whichForm, setWhichForm] = useState("");
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
      <PageBlurb title={pageContactText.TITLE} text={pageContactText.TEXT} />
      <ContainerInner>
        {whichForm === "" && (
          <ContactStyled>
            <ContactCard
              title="Free Assessment"
              image="clipboard.png"
              onClick={setForm}
            />
            <div> or </div>
            <ContactCard
              title="Service Call"
              image="ServiceWorker.png"
              onClick={setForm}
            />
          </ContactStyled>
        )}
        {whichForm === "Free Assessment" && (
          <Assessment onCancel={() => setForm("")} onSubmit={onSubmit} />
        )}
        {whichForm === "Service Call" && (
          <ServiceCalls onCancel={() => setForm("")} onSubmit={onSubmit} />
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
