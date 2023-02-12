import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ContactPhone: React.FC<{ phone: string }> = ({ phone }) => (
  <li>
    <span>
      <LocalPhoneIcon fontSize="inherit" />
    </span>
    <span>{phone}</span>
  </li>
);

export default ContactPhone;
