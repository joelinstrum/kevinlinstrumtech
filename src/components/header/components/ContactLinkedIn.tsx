import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactLinkedIn: React.FC<{ linkedin: string }> = ({ linkedin }) => (
  <li>
    <span>
      <LinkedInIcon fontSize="inherit" />
    </span>
    <span>{linkedin}</span>
  </li>
);

export default ContactLinkedIn;
