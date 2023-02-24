import { ContactCardStyled } from "./ContactStyled";

interface ContactCardProps {
  image: string;
  title: string;
  onClick: (title: string) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, image, onClick }) => {
  return (
    <ContactCardStyled onClick={() => onClick(title)}>
      <div>{title}</div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/forms/${image}`}
          alt={title}
        />
      </div>
    </ContactCardStyled>
  );
};

export default ContactCard;
