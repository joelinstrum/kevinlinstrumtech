import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ContactEmail: React.FC<{ email: string }> = ({ email }) => (
  <li>
    <span>
      <MailOutlineIcon fontSize="inherit" />
    </span>
    <span>{email}</span>
  </li>
);

export default ContactEmail;
