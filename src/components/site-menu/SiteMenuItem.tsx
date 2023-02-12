import { Link } from "react-router-dom";
import { IMenu } from "constants/menu";

interface SiteMenuItemProps {
  menuItem: IMenu;
  active: boolean;
}

const SiteMenuItem: React.FC<SiteMenuItemProps> = ({ menuItem, active }) => {
  return (
    <li>
      <Link to={`/${menuItem.url}`}>{menuItem.label}</Link>
    </li>
  );
};

export default SiteMenuItem;
