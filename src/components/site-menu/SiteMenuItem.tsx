import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { IMenu } from "constants/menu";
import { theme } from "components/theme/default-theme";

interface SiteMenuItemProps {
  menuItem: IMenu;
  active: boolean;
  menuClickHandler: (menuItem: IMenu) => void;
}

const SiteMenuItem: React.FC<SiteMenuItemProps> = ({
  menuItem,
  active,
  menuClickHandler,
}) => {
  const handler = (e: MouseEvent) => {
    menuClickHandler(menuItem);
  };

  return (
    <li>
      <Link
        to={`/${menuItem.url}`}
        onClick={(e) => handler(e)}
        style={
          active
            ? { color: theme.primaryColor }
            : { color: theme.secondaryColor }
        }
      >
        {menuItem.label}
      </Link>
    </li>
  );
};

export default SiteMenuItem;
