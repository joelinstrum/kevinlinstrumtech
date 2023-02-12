import { company } from "../../../constants";
import ContactEmail from "./ContactEmail";
import ContactPhone from "./ContactPhone";
import ContactLinkedIn from "./ContactLinkedIn";
import SiteOwnership from "./SiteOwnership";

const Contact = () => (
  <>
    <div>
      <ul>
        <ContactPhone phone={company.PHONE} />
        <ContactEmail email={company.EMAIL} />
        <ContactLinkedIn linkedin={company.LINKEDIN} />
      </ul>
    </div>
    <div>
      <ul>
        <SiteOwnership />
      </ul>
    </div>
  </>
);

export default Contact;
